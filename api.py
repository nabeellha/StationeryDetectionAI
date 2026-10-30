
from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from PIL import Image
import numpy as np
import tensorflow as tf
import io
from pathlib import Path
import gdown
import os

app = FastAPI(title="Stationery Detection API")

# Allow requests from local development and deployed website
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://stationery-detection-ai.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

BASE_DIR = Path(__file__).resolve().parent
MODEL_DIR = BASE_DIR / "model"

CLASS_NAMES = [
    "Sharpener",
    "erasers",
    "markers",
    "pencils",
    "rulers",
]

MODEL_FILES = {
    "cnn": {
        "filename": "best_stationery_cnn (1).keras",
        "file_id": "1fBR7Yl2JoKskcakVHYpmFTNszQgqHRvq",
    },
    "mobilenetv2": {
        "filename": "best_mobilenetv2_stationery.keras",
        "file_id": "1z9Gg6Tlg5q_LFsVwKO3gEolZs12g8HMG",
    },
}

def download_models():
    MODEL_DIR.mkdir(parents=True, exist_ok=True)

    for model_name, details in MODEL_FILES.items():
        model_path = MODEL_DIR / details["filename"]

        if not model_path.exists():
            print(f"Downloading {model_name} model...")

            url = f"https://drive.google.com/uc?id={details['file_id']}"

            gdown.download(
                url,
                str(model_path),
                quiet=False
            )

        if not model_path.exists() or model_path.stat().st_size == 0:
            raise RuntimeError(
                f"Failed to download {model_name} model."
            )

        print(f"{model_name} model is ready!")


download_models()

models = {
    name: tf.keras.models.load_model(
        MODEL_DIR / details["filename"],
        compile=False
    )
    for name, details in MODEL_FILES.items()
}


@app.get("/")
def home():
    return {
        "message": "Stationery Detection API is running!"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy",
        "models_loaded": list(models.keys())
    }


@app.post("/predict")
async def predict(
    file: UploadFile = File(...),
    model_name: str = Form("mobilenetv2"),
):
    if model_name not in models:
        return JSONResponse(
            status_code=400,
            content={"error": "Choose cnn or mobilenetv2."},
        )

    try:
        # Read and prepare the uploaded image
        contents = await file.read()

        image = Image.open(
            io.BytesIO(contents)
        ).convert("RGB")

        image = image.resize((224, 224))

        image_array = np.asarray(
            image,
            dtype=np.float32
        )

        image_array = np.expand_dims(
            image_array,
            axis=0
        )

        # Each saved model contains its own Rescaling layer.
        # Do not preprocess the image again here.
        predictions = models[model_name].predict(
            image_array,
            verbose=0
        )[0]

        predicted_index = int(np.argmax(predictions))

        return {
            "model": model_name,
            "predicted_class": CLASS_NAMES[predicted_index],
            "confidence": round(
                float(predictions[predicted_index]), 4
            ),
            "scores": {
                name: round(float(score), 4)
                for name, score in zip(
                    CLASS_NAMES,
                    predictions
                )
            },
        }

    except Exception as error:
        return JSONResponse(
            status_code=400,
            content={"error": str(error)},
        )

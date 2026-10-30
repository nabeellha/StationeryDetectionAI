
import argparse
import json
from pathlib import Path

import numpy as np
import tensorflow as tf
from PIL import Image


PROJECT_DIR = Path(__file__).resolve().parent
MODEL_PATH = PROJECT_DIR / "model" / "best_mobilenetv2_stationery.keras"

CLASS_NAMES = [
    "Sharpener",
    "erasers",
    "markers",
    "pencils",
    "rulers",
]


def predict_image(image_path):
    """Predict the stationery category for one image."""
    if not MODEL_PATH.exists():
        raise FileNotFoundError(f"Model not found: {MODEL_PATH}")

    if not Path(image_path).is_file():
        raise FileNotFoundError(f"Image not found: {image_path}")

    model = tf.keras.models.load_model(MODEL_PATH, compile=False)

    image = Image.open(image_path).convert("RGB")
    image = image.resize((224, 224))
    image_array = np.asarray(image, dtype=np.float32)
    image_array = np.expand_dims(image_array, axis=0)

    # MobileNetV2 preprocessing: map pixels from [0, 255] to [-1, 1].
    image_array = image_array / 127.5 - 1.0

    predictions = model.predict(image_array, verbose=0)[0]
    predicted_index = int(np.argmax(predictions))

    return {
        "predicted_class": CLASS_NAMES[predicted_index],
        "confidence": round(float(predictions[predicted_index]), 4),
        "scores": {
            name: round(float(score), 4)
            for name, score in zip(CLASS_NAMES, predictions)
        },
    }


if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        description="Classify an image using Stationery Detection AI."
    )
    parser.add_argument(
        "image",
        help="Path to an image file to classify.",
    )
    args = parser.parse_args()

    try:
        result = predict_image(args.image)
        print(json.dumps(result, indent=2))
    except Exception as error:
        parser.exit(1, f"Prediction failed: {error}\n")

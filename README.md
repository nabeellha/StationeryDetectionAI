# StationeryDetectionAI
### Stationery Object Detection Using Deep Learning

**StationeryDetectionAI** is a deep learning project that identifies stationery objects from uploaded images using image classification. The system recognizes five categories: Sharpener, Erasers, Markers, Pencils, and Rulers.

Two deep learning models were developed and compared:
- Custom Convolutional Neural Network (CNN)
- MobileNetV2 using Transfer Learning

MobileNetV2 was selected as the final model because it demonstrated better classification performance during sample image testing.

---

## Project Information

| Detail | Information |
|---|---|
| Project Name | StationeryDetectionAI |
| Student Name | Nabiha Asim |
| Student ID | SU92-BSCSM-F23-060 |
| Program | BSCS-7A |
| University | Superior University |
| Project Type | Deep Learning / Image Classification |
| Final Model | MobileNetV2 |

---

## 1. Project Objectives

The main objectives of this project are:

- Develop an image classification system for stationery objects.
- Prepare and organize a dataset containing five stationery categories.
- Build a Custom CNN model from scratch.
- Implement MobileNetV2 using transfer learning.
- Compare both models using training results and sample predictions.
- Integrate the trained models into a web-based application.
- Allow users to upload images and receive predicted categories with confidence scores.

---

## 2. Supported Stationery Categories

The system classifies images into the following five categories:

| Class | Description |
|---|---|
| Sharpener | Identifies pencil sharpeners |
| Erasers | Identifies erasers |
| Markers | Identifies marker pens |
| Pencils | Identifies pencils |
| Rulers | Identifies measuring rulers |

---

## 3. Dataset Description

The project uses a combined dataset containing original stationery images and additional images from a public dataset.

The dataset contains five classes and was divided into three subsets:

| Dataset Split | Number of Images |
|---|---:|
| Training | 1,929 |
| Validation | 435 |
| Testing | 412 |
| **Total** | **2,776** |

**Dataset Usage:**
- Training data was used to train the models.
- Validation data was used to monitor model performance during training.
- Testing data was reserved for final model evaluation.

---

## 4. Data Preprocessing

The following preprocessing steps were performed:

- Images were organized into separate class folders.
- Images were resized to 224 × 224 pixels.
- Images were converted into batches for model training.
- Pixel values were normalized according to each model's requirements.
- Training, validation, and testing datasets were kept separate.
- Data augmentation was applied during Custom CNN training.

### Data Augmentation

The Custom CNN training process included:
- Horizontal flipping
- Rotation
- Zooming
- Contrast adjustment

These transformations helped introduce variations into the training images.

---

## 5. Model 1: Custom CNN

A Custom Convolutional Neural Network was developed using TensorFlow and Keras.

### Architecture

The model consists of:

1. Input layer (224 × 224 × 3)
2. Data augmentation
3. Rescaling layer
4. Four convolutional layers
5. Batch normalization layers
6. Max pooling layers
7. Global Average Pooling
8. Dense layer with 128 neurons
9. Dropout layer
10. Output layer with five neurons and softmax activation

**Total Parameters:** Approximately 423,877

### Training Configuration

| Parameter | Setting |
|---|---|
| Framework | TensorFlow / Keras |
| Optimizer | Adam |
| Initial Learning Rate | 0.0001 |
| Loss Function | Sparse Categorical Crossentropy |
| Batch Size | 32 |
| Maximum Epochs | 12 |
| Class Weighting | Applied |
| Early Stopping | Applied |
| Learning Rate Reduction | Applied |

### Custom CNN Training Results

Training stopped after five epochs because validation loss did not improve.

| Metric | Result |
|---|---:|
| Training Accuracy at Stopping | 50.91% |
| Best Validation Accuracy | 5.98% |
| Latest Validation Accuracy | 9.66% |
| Best Validation Loss | 1.65893 |

Further investigation showed that the model predicted every training and validation image as the Rulers class.

Average validation prediction probabilities:

| Class | Average Probability |
|---|---:|
| Sharpener | 18.90% |
| Erasers | 22.53% |
| Markers | 17.30% |
| Pencils | 15.55% |
| Rulers | 25.72% |

The model showed poor class discrimination and did not achieve satisfactory validation performance.

Therefore, the Custom CNN was not selected as the final model.

---

## 6. Model 2: MobileNetV2

MobileNetV2 was implemented using transfer learning.

Transfer learning uses a pretrained model that has already learned useful image features from a large dataset. These learned features are reused for a new classification task.

### Architecture

The MobileNetV2 model includes:

1. Input images of size 224 × 224 × 3
2. ImageNet-pretrained MobileNetV2 base
3. Frozen pretrained layers
4. Global Average Pooling layer
5. Dropout layer
6. Dense output layer with five neurons
7. Softmax activation

| Model Information | Value |
|---|---|
| Base Model | MobileNetV2 |
| Pretrained Weights | ImageNet |
| Total Parameters | Approximately 2.26 million |
| Trainable Parameters | Approximately 6,405 |
| Input Size | 224 × 224 × 3 |
| Output Classes | 5 |

### Training Configuration

| Parameter | Setting |
|---|---|
| Optimizer | Adam |
| Learning Rate | 0.001 |
| Loss Function | Sparse Categorical Crossentropy |
| Epochs | 10 |
| Input Size | 224 × 224 × 3 |
| Output Classes | 5 |

### MobileNetV2 Sample Prediction Results

MobileNetV2 was tested through the web application using five sample images, one from each stationery category.

| Input Image | Predicted Class | Confidence | Result |
|---|---|---:|---|
| Pencil | Pencils | 88.86% | Correct |
| Marker | Markers | 81.57% | Correct |
| Eraser | Erasers | 99.83% | Correct |
| Ruler | Rulers | 99.74% | Correct |
| Sharpener | Sharpener | 99.06% | Correct |

**Sample Testing Result: 5 out of 5 correct predictions.**

MobileNetV2 correctly classified all five tested sample images.

These confidence scores represent individual predictions. They are not the model's overall test accuracy.

---

## 7. Comparison of Both Models

Both models were tested using the same five sample images through the web application.

| Test Image | MobileNetV2 | Custom CNN |
|---|---|---|
| Pencil | Pencils — 88.86% | Rulers — 24.18% |
| Marker | Markers — 81.57% | Rulers — 24.19% |
| Eraser | Erasers — 99.83% | Erasers — 24.28% |
| Ruler | Rulers — 99.74% | Pencils — 27.72% |
| Sharpener | Sharpener — 99.06% | Rulers — 23.84% |
| **Correct Predictions** | **5/5** | **1/5** |

### Comparison Summary

| Feature | Custom CNN | MobileNetV2 |
|---|---|---|
| Model Type | Built from Scratch | Transfer Learning |
| Pretrained Weights | No | ImageNet |
| Total Parameters | 423,877 | Approximately 2.26 million |
| Training Approach | Full Model Training | Frozen Pretrained Base |
| Validation Performance | Very Poor | Full formal evaluation pending |
| Sample Predictions | 1/5 Correct | 5/5 Correct |
| Final Selection | Not Selected | Selected |

### Final Model Selection

MobileNetV2 was selected as the final classification model because it demonstrated substantially better sample prediction behaviour than the Custom CNN.

The Custom CNN showed poor classification performance and was not selected for the final application.

**Note:** Overall test accuracy and other evaluation metrics still need to be calculated using the complete 412-image test dataset.

---

## 8. Web Application Integration

The project includes a web-based application that allows users to upload stationery images and receive classification results.

### Main Functionality

- Upload an image of a stationery object.
- Select a model for prediction, where available.
- Process the uploaded image through the backend API.
- Display the predicted stationery category.
- Display the confidence score.
- Display confidence scores for all five classes.

### Technologies Used

| Technology | Purpose |
|---|---|
| Next.js | Frontend Development |
| TypeScript | Frontend Programming |
| Tailwind CSS | User Interface Styling |
| FastAPI | Backend API |
| Python | Backend Programming |
| TensorFlow / Keras | Deep Learning Framework |
| MobileNetV2 | Final Classification Model |
| Custom CNN | Comparison Model |

### Application Workflow

1. The user uploads a stationery image through the website.
2. The Next.js frontend sends the image to the FastAPI backend.
3. The backend loads the selected trained model.
4. The image is resized and prepared for prediction.
5. The model generates class confidence scores.
6. The backend identifies the class with the highest score.
7. The predicted category and confidence scores are returned to the frontend.
8. The website displays the prediction result.

---

## 9. Project Structure

The project is organized into frontend, backend, and model files.

```text
StationeryDetectionAI/
│
├── stationery-website/
│   ├── model/
│   │   ├── best_mobilenetv2_stationery.keras
│   │   └── best_stationery_cnn (1).keras
│   │
│   ├── src/
│   │   └── app/
│   │       ├── page.tsx
│   │       └── globals.css
│   │
│   ├── api.py
│   ├── package.json
│   ├── README.md
│   └── ...
│
└── Dataset/
    ├── Sharpener/
    ├── erasers/
    ├── markers/
    ├── pencils/
    └── rulers/
```

*Note: This is an overview of the main project components. The complete dataset and additional configuration files may be stored separately.*

---

## 10. Installation and Setup

### Prerequisites

Install the following software:

- Python
- Node.js and npm
- Git
- Visual Studio Code

### Step 1: Clone the Repository

```bash
git clone https://github.com/nabeellha/StationeryDetectionAI.git
```

### Step 2: Open the Website Folder

```bash
cd StationeryDetectionAI/stationery-website
```

### Step 3: Install Frontend Dependencies

```bash
npm install
```

### Step 4

# Stationery Detection AI

A Deep Learning semester project that uses **MobileNetV2 Transfer Learning** to classify stationery images into five categories.

## 1. Project Overview

Stationery Detection AI is an image classification project designed to recognize five common stationery objects using deep learning.

The saved model uses a pretrained MobileNetV2 architecture with a custom classification head.

The five categories are:
- Sharpener
- Erasers
- Markers
- Pencils
- Rulers

## 2. Project Objectives

- Prepare and organize a labeled stationery image dataset.
- Explore deep learning approaches for image classification.
- Implement MobileNetV2 transfer learning.
- Train and evaluate a five-class classification model.
- Save the trained model for future predictions.
- Develop a web interface to present the project.

## 3. Model Architecture

The saved model uses:
1. Input image size: 224 × 224 × 3.
2. Image rescaling to the range -1 to 1.
3. Pretrained MobileNetV2 feature extraction layers.
4. Global Average Pooling.
5. Dropout layer.
6. Dense output layer with five neurons and softmax activation.

## 4. Dataset

The dataset contains five categories:
- Sharpener
- Erasers
- Markers
- Pencils
- Rulers

Approximately 245 images were used during the original dataset preparation.

Dataset sources and image usage permissions should be documented according to the actual sources used.

## 5. Technologies Used

- Python
- TensorFlow and Keras
- MobileNetV2
- NumPy
- Matplotlib
- Scikit-learn
- Next.js
- TypeScript
- Tailwind CSS
- Git and GitHub
- Vercel

## 6. Model Evaluation

The model was evaluated using validation accuracy, validation loss, precision, recall, F1-score, and confusion matrix analysis.

The saved model was tested using the Python prediction script. Some sample images were incorrectly classified, so further improvements are needed.

## 7. Project Structure

```text
StationeryDetectionAI/
├── Dataset/
│   ├── Sharpener/
│   ├── erasers/
│   ├── markers/
│   ├── pencils/
│   └── rulers/
├── Stationery_Detection_AI.ipynb
├── best_mobilenetv2_stationery.keras
└── stationery-website/
    ├── model/
    ├── src/
    ├── public/
    ├── predict.py
    ├── package.json
    └── README.md
```

## 8. Project Resources

- **GitHub Repository:** https://github.com/nabeellha/StationeryDetectionAI
- **Live Website:** To be added after deployment.
- **Project Report:** To be added.
- **Presentation:** To be added.
- **YouTube Video:** To be added.

## 9. Project Status

The MobileNetV2 model has been trained and saved. A Python prediction script has been implemented and tested locally. The Next.js website has been developed.

The live website prediction integration and final deployment are separate remaining tasks.

## 10. Academic Project

Developed as a Deep Learning semester project.
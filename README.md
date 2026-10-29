# Stationery Detection AI

A Deep Learning semester project that uses a custom Convolutional Neural Network (CNN) to classify stationery images into five categories.

## Project Overview

Stationery Detection AI aims to recognize common stationery objects from images. The project uses TensorFlow and Keras to build and train a custom CNN for image classification.

The five target classes are:

- Sharpener
- Erasers
- Markers
- Pencils
- Rulers

## Objectives

- Prepare and organize a labeled image dataset.
- Build a custom CNN for image classification.
- Train and evaluate the model.
- Save the trained model for inference.
- Develop a web application to demonstrate predictions and explain the project code.

## Model Architecture

The custom CNN includes:

1. Image augmentation
2. Image rescaling
3. Convolutional layers with ReLU activation
4. Max-pooling layers
5. Global average pooling
6. A dense layer with dropout
7. A five-class softmax output layer

## Dataset

The dataset contains images organized into five class folders. The current dataset has approximately 245 usable images, subject to image-loading and validation checks.

The dataset source and any applicable image licenses will be documented here.

## Technologies

- Python
- TensorFlow
- Keras
- NumPy
- Matplotlib
- Scikit-learn
- Next.js
- Vercel

## Evaluation

The model is evaluated using validation accuracy, validation loss, precision, recall, F1-score, and a confusion matrix.

The current experimental results show that further improvement is needed. Final results will be documented after model selection and testing.

## Project Resources

- **GitHub Repository:** https://github.com/nabeellha/StationeryDetectionAI
- **Live Website:** To be added
- **Project Report:** To be added
- **Presentation:** To be added
- **YouTube Video:** To be added
- **LinkedIn Post:** To be added

## Project Status

The initial custom CNN has been implemented and trained. Model evaluation, repository organization, and web deployment are in progress.

## Academic Project

Developed as a Deep Learning semester project.

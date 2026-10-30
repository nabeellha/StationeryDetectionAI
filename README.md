# StationeryDetectionAI 🎒

A Deep Learning semester project that uses **Custom CNN and MobileNetV2 Transfer Learning** to classify stationery images into five categories.

## 1. Project Overview

StationeryDetectionAI is an image classification project designed to recognize five common stationery objects using deep learning.

Two deep learning approaches were implemented and compared:

- **Custom CNN:** A convolutional neural network developed and trained from scratch.
- **MobileNetV2:** A pretrained convolutional neural network using transfer learning.

MobileNetV2 was selected as the final classification model because it demonstrated better classification behaviour during project testing.

The five categories are:

- Sharpener
- Erasers
- Markers
- Pencils
- Rulers

## 2. Project Objectives

- Prepare and organize a labeled stationery image dataset.
- Explore deep learning approaches for image classification.
- Implement a Custom CNN architecture.
- Implement MobileNetV2 transfer learning.
- Train and compare both models.
- Evaluate model performance.
- Save trained models for future predictions.
- Develop a web interface for stationery classification.

## 3. Dataset

The combined dataset contains **2,776 images** divided into three subsets.

| Dataset | Number of Images |
|---|---:|
| Training | 1,929 |
| Validation | 435 |
| Testing | 412 |
| **Total** | **2,776** |

The dataset contains five classes:

- Sharpener
- Erasers
- Markers
- Pencils
- Rulers

Images were resized to 224 × 224 pixels before being used by the models.

Data augmentation techniques were also applied during Custom CNN training, including:

- Horizontal flipping
- Random rotation
- Random zoom
- Random contrast adjustment

## 4. Model Architectures

### 4.1 Custom CNN

A convolutional neural network was developed using TensorFlow and Keras.

Its main components include:

1. Input layer (224 × 224 × 3).
2. Data augmentation and image rescaling.
3. Four Conv2D layers.
4. Batch normalization.
5. Max pooling.
6. Global Average Pooling.
7. Dense layer with 128 neurons.
8. Dropout.
9. Softmax output layer with five classes.

The model contains approximately 423,877 parameters.

### 4.2 MobileNetV2 Transfer Learning

MobileNetV2 was implemented using pretrained ImageNet weights.

Its main components include:

1. Input image size of 224 × 224 × 3.
2. Image preprocessing.
3. Pretrained MobileNetV2 feature extraction layers.
4. Global Average Pooling.
5. Dropout.
6. Dense output layer with five neurons.
7. Softmax activation.

Transfer learning allows the model to reuse features learned from a large image dataset.

## 5. Model Training and Evaluation

Both models were trained using the combined stationery dataset.

### Custom CNN Results

The Custom CNN did not achieve satisfactory validation performance.

| Metric | Result |
|---|---:|
| Training accuracy at stopping | 50.91% |
| Best validation accuracy | 5.98% |
| Latest validation accuracy | 9.66% |
| Best validation loss | 1.65893 |

Further investigation showed that the model predicted every training and validation image as the Rulers class.

Therefore, the Custom CNN was not selected for final predictions.

### MobileNetV2 Results

MobileNetV2 demonstrated better classification behaviour during sample prediction tests.

Examples from individual predictions:

- Eraser image: 99.83% confidence.
- Marker image: 81.57% confidence.

These are individual prediction examples, not overall test accuracy measurements.

MobileNetV2 was selected as the final model based on its observed performance.

## 6. Model Comparison

| Feature | Custom CNN | MobileNetV2 |
|---|---|---|
| Architecture | Built from scratch | Pretrained |
| Transfer learning | No | Yes |
| Total parameters | 423,877 | Approximately 2.26 million |
| Training approach | CNN training | Transfer learning |
| Observed performance | Poor validation results | Better sample predictions |
| Final selection | Experimental model | Selected model |

The comparison demonstrates the practical benefits of transfer learning for this stationery image classification task.

## 7. Technologies Used

- Python
- TensorFlow and Keras
- MobileNetV2
- NumPy
- Matplotlib
- Scikit-learn
- Next.js
- TypeScript
- Tailwind CSS
- FastAPI
- Git and GitHub
- Vercel

## 8. Web Application

The project includes a web application designed to provide an easy way to classify stationery images.

The planned application workflow is:

1. User uploads a stationery image.
2. The backend receives the image.
3. The selected deep learning model processes it.
4. The application returns the predicted stationery category and confidence score.
5. The frontend displays the prediction.

### Main Technologies

- **Frontend:** Next.js, TypeScript and Tailwind CSS.
- **Backend:** FastAPI.
- **Model:** TensorFlow/Keras with MobileNetV2.

## 9. Project Structure

The project includes the following main components:

```text
StationeryDetectionAI/
│
├── Dataset/
│   ├── train/
│   ├── val/
│   └── test/
│
├── Stationery_Detection_AI.ipynb
│
├── stationery-website/
│   ├── model/
│   ├── src/
│   ├── public/
│   ├── predict.py
│   └── package.json
│
└── README.md
```

The trained model files are maintained separately from the source code where necessary.

## 10. Project Resources

- **GitHub Repository:** [StationeryDetectionAI](https://github.com/nabeellha/StationeryDetectionAI)
- **Live Website:** To be added after deployment.
- **Project Report:** To be added.
- **Presentation:** To be added.
- **YouTube Demonstration:** To be added.

## 11. Future Improvements

- Collect more high-quality stationery images.
- Improve dataset class balance.
- Experiment with additional CNN architectures.
- Fine-tune pretrained MobileNetV2 layers.
- Improve prediction accuracy.
- Add more stationery categories.
- Complete and deploy the web application.
- Improve the user interface and user experience.

## 12. Conclusion

StationeryDetectionAI demonstrates how deep learning and transfer learning can be used for image classification. Both a Custom CNN and MobileNetV2 were implemented and compared. The Custom CNN experienced poor validation performance, while MobileNetV2 showed better classification behaviour during sample testing. Therefore, MobileNetV2 was selected as the final classification model.

This project provided practical experience in dataset preparation, image preprocessing, CNN development, transfer learning, model evaluation, and web application development.

---

**Project Type:** Deep Learning Semester Project  
**Final Selected Model:** MobileNetV2  
**Classification Categories:** 5

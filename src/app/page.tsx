"use client";

import { useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL
  ? `${process.env.NEXT_PUBLIC_API_URL}/predict`
  : "http://127.0.0.1:8000/predict";

type Prediction = {
  model: string;
  predicted_class: string;
  confidence: number;
  scores: Record<string, number>;
};

const categories = [
  {
    name: "Sharpener",
    description: "Detect sharpeners from uploaded stationery images.",
    symbol: "S",
  },
  {
    name: "Erasers",
    description: "Identify erasers using the trained detection models.",
    symbol: "E",
  },
  {
    name: "Markers",
    description: "Recognize markers from different stationery images.",
    symbol: "M",
  },
  {
    name: "Pencils",
    description: "Classify pencils using image recognition.",
    symbol: "P",
  },
  {
    name: "Rulers",
    description: "Identify rulers in the uploaded image.",
    symbol: "R",
  },
];

const resources = [
  {
    title: "GitHub Repository",
    description: "Explore the project source code.",
    symbol: "GH",
    href: "https://github.com/nabeellha/StationeryDetectionAI",
  },
  {
    title: "Dataset",
    description: "View the dataset used for training.",
    symbol: "DS",
    href: "https://drive.google.com/drive/folders/1Gk1KGZOA6_4S3qcpfHhSaQwiMgvN4ssQ?usp=sharing",
  },
  {
    title: "CNN Model",
    description: "Access the trained custom CNN model.",
    symbol: "CNN",
    href: "https://drive.google.com/file/d/1fBR7Yl2JoKskcakVHYpmFTNszQgqHRvq/view?usp=sharing",
  },
  {
    title: "MobileNetV2 Model",
    description: "Access the trained MobileNetV2 model.",
    symbol: "MV",
    href: "https://drive.google.com/file/d/1z9Gg6Tlg5q_LFsVwKO3gEolZs12g8HMG/view?usp=sharing",
  },
  {
    title: "Project Report",
    description: "Read the complete project documentation.",
    symbol: "PDF",
    href: "https://docs.google.com/document/d/1kFVKJi_SbUsmS1MBWKSGherQK2c0KkLD/edit?usp=sharing&ouid=110132836728801374447&rtpof=true&sd=true",
  },
  {
    title: "Demo Video",
    description: "Watch the StationeryAI project demonstration.",
    symbol: "▶",
    href: "https://youtu.be/_W8lHCi85hs",
  },
  {
    title: "LinkedIn Post",
    description: "View the project announcement on LinkedIn.",
    symbol: "IN",
    href: "https://lnkd.in/p/drTXGRvY",
  },
];

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [modelName, setModelName] = useState("mobilenetv2");
  const [prediction, setPrediction] = useState<Prediction | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function handleFileChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const selectedFile = event.target.files?.[0];

    setPrediction(null);
    setError("");

    if (!selectedFile) {
      setFile(null);
      return;
    }

    if (!selectedFile.type.startsWith("image/")) {
      setFile(null);
      setError("Please select a valid image file.");
      event.target.value = "";
      return;
    }

    setFile(selectedFile);
  }

  function handleRemoveFile() {
    setFile(null);
    setPrediction(null);
    setError("");

    const input = document.getElementById(
      "image-upload"
    ) as HTMLInputElement | null;

    if (input) {
      input.value = "";
    }
  }

  async function handlePredict(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (!file) {
      setError("Please upload an image first.");
      return;
    }

    setLoading(true);
    setError("");
    setPrediction(null);

    try {
      const formData = new FormData();

      formData.append("file", file);
      formData.append("model_name", modelName);

      const response = await fetch(API_URL, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Prediction failed.");
      }

      setPrediction(data as Prediction);
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.";

      setError(
        message.includes("fetch")
          ? "Could not connect to the prediction server. Make sure your Python API is running."
          : message
      );
    } finally {
      setLoading(false);
    }
  }

  function closeMobileMenu() {
    setMobileMenuOpen(false);
  }

  const navigation = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Categories", href: "#categories" },
    { label: "Models", href: "#models" },
    { label: "Demo", href: "#demo" },
    { label: "Resources", href: "#resources" },
  ];

  return (
    <main className="site-shell">
      <header className="site-header">
        <a
          href="#home"
          className="logo-mark"
          onClick={closeMobileMenu}
        >
          <span>S</span>
          StationeryAI
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? "×" : "☰"}
        </button>

        <nav
          className={`site-nav ${mobileMenuOpen ? "nav-open" : ""}`}
        >
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="nav-link"
              onClick={closeMobileMenu}
            >
              {item.label}
            </a>
          ))}

          <a
            href="#demo"
            className="header-button"
            onClick={closeMobileMenu}
          >
            Try the Demo
          </a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="hero-section" id="home">
        <div className="hero-content">
          <div className="eyebrow">
            <span className="status-dot" />
            DEEP LEARNING PROJECT
          </div>

          <h1>
            Smart stationery
            <br />
            <span className="gradient-text">
              detection.
            </span>
          </h1>

          <p className="hero-description">
            StationeryAI is an image classification project
            that uses deep learning to recognize stationery
            items. Upload an image, choose a model, and see
            what the system predicts.
          </p>

          <div className="hero-actions">
            <a href="#demo" className="primary-button">
              Try the Demo <span>→</span>
            </a>

            <a href="#about" className="secondary-button">
              Explore Project
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <strong>05</strong>
              <span>Object Categories</span>
            </div>

            <div className="stat-item">
              <strong>02</strong>
              <span>Deep Learning Models</span>
            </div>

            <div className="stat-item">
              <strong>AI</strong>
              <span>Image Classification</span>
            </div>
          </div>
        </div>

        <div className="hero-art">
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />

          <div className="hero-text-card">
            <span className="hero-card-label">
              STATIONERY RECOGNITION
            </span>

            <h3>From image to insight.</h3>

            <p>
              Upload a stationery image and let a trained
              deep learning model analyze its contents.
            </p>

            <div className="hero-card-tags">
              <span>Custom CNN</span>
              <span>MobileNetV2</span>
              <span>Computer Vision</span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="section" id="about">
        <div className="section-heading">
          <span className="section-label">ABOUT THE PROJECT</span>

          <h2 className="section-title">
            Making stationery recognition
            <span className="gradient-text"> smarter.</span>
          </h2>

          <p className="section-description">
            StationeryAI demonstrates how deep learning
            techniques can be used to classify everyday
            stationery objects through image recognition.
          </p>
        </div>

        <div className="process-grid">
          <article className="process-card">
            <div className="process-number">01</div>
            <h3>Upload an Image</h3>
            <p>
              Select an image of a stationery item from
              your device.
            </p>
          </article>

          <article className="process-card">
            <div className="process-number">02</div>
            <h3>Choose a Model</h3>
            <p>
              Select either the Custom CNN or MobileNetV2
              model for prediction.
            </p>
          </article>

          <article className="process-card">
            <div className="process-number">03</div>
            <h3>Get Prediction</h3>
            <p>
              View the predicted stationery category and
              the confidence scores.
            </p>
          </article>
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section className="section section-band" id="categories">
        <div className="section-heading">
          <span className="section-label">WHAT WE DETECT</span>

          <h2 className="section-title">
            Five stationery categories.
          </h2>

          <p className="section-description">
            The project currently focuses on recognizing
            these five stationery classes.
          </p>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <article className="category-card" key={category.name}>
              <div className="category-icon">
                {category.symbol}
              </div>

              <h3>{category.name}</h3>
              <p>{category.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* MODELS SECTION */}
      <section className="section" id="models">
        <div className="section-heading">
          <span className="section-label">OUR MODELS</span>

          <h2 className="section-title">
            Two approaches to
            <span className="gradient-text"> learning.</span>
          </h2>

          <p className="section-description">
            Compare a custom-built Convolutional Neural
            Network with a transfer learning approach.
          </p>
        </div>

        <div className="model-grid">
          <article className="model-card">
            <div className="model-symbol">CNN</div>

            <h3>Custom CNN</h3>

            <p>
              A Convolutional Neural Network built using
              convolution, pooling, and dense layers to
              learn image features from the training data.
            </p>

            <span className="model-tag">
              Built from scratch
            </span>
          </article>

          <article className="model-card model-card-highlight">
            <div className="model-symbol violet-symbol">
              MV
            </div>

            <h3>MobileNetV2</h3>

            <p>
              A lightweight pretrained convolutional
              neural network used through transfer learning
              for stationery image classification.
            </p>

            <span className="model-tag">
              Transfer learning
            </span>
          </article>
        </div>
      </section>

      {/* DEMO SECTION */}
      <section className="section section-band" id="demo">
        <div className="section-heading">
          <span className="section-label">LIVE DEMONSTRATION</span>

          <h2 className="section-title">
            Try StationeryAI.
          </h2>

          <p className="section-description">
            Upload an image and select a model to see
            the prediction.
          </p>
        </div>

        <div className="demo-panel">
          <div className="demo-intro">
            <span className="section-label">
              IMAGE CLASSIFICATION
            </span>

            <h3>
              Let&apos;s recognize your stationery.
            </h3>

            <p>
              Choose an image file, select your preferred
              model, and click the prediction button.
              The result will appear here.
            </p>

            <div className="demo-features">
              <div className="demo-feature">
                <span>✦</span>
                Image upload
              </div>

              <div className="demo-feature">
                <span>✦</span>
                Two model choices
              </div>

              <div className="demo-feature">
                <span>✦</span>
                Prediction confidence scores
              </div>
            </div>
          </div>

          <div>
            <form className="demo-form" onSubmit={handlePredict}>
              <div className="form-group">
                <label htmlFor="model-select">
                  Select Deep Learning Model
                </label>

                <select
                  id="model-select"
                  className="form-control"
                  value={modelName}
                  onChange={(event) => {
                    setModelName(event.target.value);
                    setPrediction(null);
                    setError("");
                  }}
                >
                  <option value="mobilenetv2">
                    MobileNetV2
                  </option>

                  <option value="cnn">
                    Custom CNN
                  </option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="image-upload">
                  Upload Stationery Image
                </label>

                <label className="upload-area" htmlFor="image-upload">
                  <strong>
                    {file ? "Image selected" : "Choose an image"}
                  </strong>

                  <span>
                    {file
                      ? "Your file is ready for prediction."
                      : "Click here to browse your device"}
                  </span>

                  <small>Supported image formats</small>
                </label>

                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  hidden
                />

                {file && (
                  <div>
                    <p className="file-name">
                      Selected file: {file.name}
                    </p>

                    <button
                      type="button"
                      className="remove-file"
                      onClick={handleRemoveFile}
                    >
                      Remove file
                    </button>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="primary-button demo-submit"
                disabled={!file || loading}
              >
                {loading
                  ? "Analyzing Image..."
                  : "Predict Stationery →"}
              </button>

              {error && (
                <div className="error-message" role="alert">
                  {error}
                </div>
              )}
            </form>

            {prediction && (
              <div className="result-panel">
                <h4>Prediction Result</h4>

                <div className="result-highlight">
                  {prediction.predicted_class}
                </div>

                <div className="result-confidence">
                  Confidence:{" "}
                  {(prediction.confidence * 100).toFixed(2)}%
                </div>

                <h4>Class Confidence Scores</h4>

                <div className="score-list">
                  {Object.entries(prediction.scores).map(
                    ([className, score]) => {
                      const percentage = Math.max(
                        0,
                        Math.min(100, score * 100)
                      );

                      return (
                        <div className="score-item" key={className}>
                          <div className="score-heading">
                            <span>{className}</span>
                            <span>
                              {percentage.toFixed(2)}%
                            </span>
                          </div>

                          <div className="score-track">
                            <div
                              className="score-bar"
                              style={{
                                width: `${percentage}%`,
                              }}
                            />
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* RESOURCES SECTION */}
      <section className="section" id="resources">
        <div className="section-heading">
          <span className="section-label">PROJECT RESOURCES</span>

          <h2 className="section-title">
            Explore the project.
          </h2>

          <p className="section-description">
            Find the project repository, dataset, trained models,
            documentation, demo video, and LinkedIn post.
          </p>
        </div>

        <div className="resource-grid">
          {resources.map((resource) => (
            <a
              className="resource-card"
              href={resource.href}
              key={resource.title}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="resource-icon">
                {resource.symbol}
              </div>

              <div>
                <strong>{resource.title}</strong>
                <small>{resource.description}</small>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div>
          <span className="footer-brand">StationeryAI</span>
          <p>
            A deep learning project for stationery image
            classification.
          </p>
        </div>

        <span>© 2026 StationeryAI. All rights reserved.</span>
      </footer>
    </main>
  );
}
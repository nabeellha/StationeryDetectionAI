
"use client";

import { useState } from "react";

const classes = [
  { name: "Sharpener", icon: "✏️", color: "#e0eaff" },
  { name: "Erasers", icon: "◻️", color: "#fce7f3" },
  { name: "Markers", icon: "🖊️", color: "#dcfce7" },
  { name: "Pencils", icon: "✏️", color: "#fef3c7" },
  { name: "Rulers", icon: "📏", color: "#ede9fe" },
];

const models = [
  {
    name: "Custom CNN",
    type: "Built from scratch",
    description:
      "A convolutional neural network designed to learn visual features from stationery images.",
    status: "Baseline model",
  },
  {
    name: "MobileNetV2",
    type: "Transfer learning",
    description:
      "A pretrained image model adapted to recognize five stationery categories.",
    status: "Selected model",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-600 text-2xl text-white">
              ✦
            </span>
            <span>
              <span className="block text-lg font-extrabold tracking-tight">
                Stationery<span className="text-indigo-600">AI</span>
              </span>
              <span className="text-xs text-slate-500">
                Intelligent image classification
              </span>
            </span>
          </a>

          <button
            className="rounded-lg border px-3 py-2 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>

          <nav
            className={`${menuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col gap-4 border-b bg-white p-6 text-sm font-medium md:static md:flex md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0`}
          >
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#classes" className="hover:text-indigo-600">Categories</a>
            <a href="#models" className="hover:text-indigo-600">Models</a>
            <a href="#results" className="hover:text-indigo-600">Results</a>
            <a href="#resources" className="hover:text-indigo-600">Resources</a>
            <a
              href="#resources"
              className="rounded-xl bg-indigo-600 px-5 py-3 text-center font-semibold text-white hover:bg-indigo-700"
            >
              Explore project ↗
            </a>
          </nav>
        </div>
      </header>

      <section id="home" className="overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Deep Learning · Computer Vision
            </div>

            <h1 className="max-w-2xl text-5xl font-black leading-tight tracking-tight sm:text-6xl">
              Everyday stationery.
              <span className="mt-2 block text-indigo-600">
                Recognized by AI.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              An image-classification project that explores how deep learning
              can identify common stationery items using computer vision.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#models"
                className="rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700"
              >
                Discover the models →
              </a>
              <a
                href="#about"
                className="rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold hover:border-indigo-300"
              >
                Learn about the project
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-500">
              <span>✓ 5 stationery categories</span>
              <span>✓ CNN + transfer learning</span>
              <span>✓ Python & TensorFlow</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[3rem] bg-indigo-200/40 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white bg-white p-5 shadow-2xl shadow-indigo-100 sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-500">
                    PROJECT OVERVIEW
                  </p>
                  <h2 className="mt-1 text-2xl font-bold">Meet the classes</h2>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                  5 classes
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {classes.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-2xl border border-slate-100 p-4 transition hover:-translate-y-1 hover:shadow-md"
                    style={{ backgroundColor: item.color }}
                  >
                    <div className="flex h-14 items-center justify-center text-4xl">
                      {item.icon}
                    </div>
                    <p className="mt-3 text-center font-bold">{item.name}</p>
                    <p className="mt-1 text-center text-xs text-slate-500">
                      Image category
                    </p>
                  </div>
                ))}
                <div className="flex min-h-28 flex-col items-center justify-center rounded-2xl border border-dashed border-indigo-200 bg-indigo-50 p-3 text-center">
                  <span className="text-2xl">🧠</span>
                  <span className="mt-2 text-sm font-bold text-indigo-700">
                    Deep learning
                  </span>
                  <span className="mt-1 text-xs text-slate-500">
                    Image recognition
                  </span>
                </div>
              </div>

              <div className="mt-5 rounded-2xl bg-slate-900 p-5 text-white">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-300">
                    Classification pipeline
                  </span>
                  <span className="text-xs text-emerald-300">PROJECT FLOW</span>
                </div>
                <div className="mt-4 flex items-center justify-between gap-2 text-center text-xs sm:text-sm">
                  <div className="flex-1 rounded-xl bg-white/10 p-3">Image</div>
                  <span className="text-indigo-300">→</span>
                  <div className="flex-1 rounded-xl bg-white/10 p-3">Model</div>
                  <span className="text-indigo-300">→</span>
                  <div className="flex-1 rounded-xl bg-white/10 p-3">Prediction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-slate-200 bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
              About the project
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Teaching a computer to recognize stationery
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Stationery Detection AI is a student deep-learning project that
              classifies stationery images into five predefined categories.
              It explores image preprocessing, model training, prediction,
              and performance evaluation.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              The project compares a custom Convolutional Neural Network
              (CNN) with MobileNetV2, a model architecture commonly used for
              efficient image recognition.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["01", "Image input", "Provide a stationery image to the model."],
              ["02", "Preprocessing", "Prepare the image in the model's expected format."],
              ["03", "Classification", "The model estimates scores for five classes."],
              ["04", "Evaluation", "Assess predictions with suitable metrics."],
            ].map(([number, title, description]) => (
              <div key={number} className="rounded-2xl border border-slate-200 p-6">
                <span className="text-sm font-extrabold text-indigo-600">{number}</span>
                <h3 className="mt-4 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="classes" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
              Classification labels
            </p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Five categories. One project.
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              These are the five target classes used by the current model.
            </p>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {classes.map((item, index) => (
              <div key={item.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-20 items-center justify-center rounded-2xl text-5xl" style={{ backgroundColor: item.color }}>
                  {item.icon}
                </div>
                <p className="mt-5 text-xs font-bold uppercase tracking-wider text-slate-400">
                  CLASS 0{index + 1}
                </p>
                <h3 className="mt-1 text-xl font-bold">{item.name}</h3>
                <p className="mt-2 text-sm text-slate-500">Target label</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="models" className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-300">
            Model development
          </p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Two approaches to image recognition
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-300">
            Comparing a model trained from scratch with transfer learning helps
            us explore different ways to approach image classification.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {models.map((model, index) => (
              <article key={model.name} className="rounded-3xl border border-white/10 bg-white/[0.06] p-7">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/20 text-xl font-bold text-indigo-200">
                    {index === 0 ? "CNN" : "M"}
                  </span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                    {model.status}
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-bold">{model.name}</h3>
                <p className="mt-1 text-sm text-indigo-200">{model.type}</p>
                <p className="mt-4 leading-7 text-slate-300">{model.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-amber-300/20 bg-amber-200/10 p-5 text-sm leading-6 text-amber-100">
            Model performance must be reported using the final evaluation results.
            We will connect the verified metrics and downloadable model files
            before publishing the project.
          </div>
        </div>
      </section>

      <section id="results" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
            Testing and evaluation
          </p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Results you can verify
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            We will publish the final evaluation report, including accuracy,
            class-wise precision and recall, a confusion matrix, and examples
            of model predictions. Metrics should be linked to the actual
            evaluation code and results rather than presented as guarantees.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <span className="text-2xl">📊</span>
              <h3 className="mt-4 font-bold">Performance metrics</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Accuracy, precision, recall, and F1-score.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <span className="text-2xl">🔎</span>
              <h3 className="mt-4 font-bold">Prediction examples</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Show predicted labels and confidence scores from actual model runs.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <span className="text-2xl">🧪</span>
              <h3 className="mt-4 font-bold">Reproducible testing</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Provide a Python script and instructions for loading the saved model.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="resources" className="bg-indigo-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
            Project resources
          </p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Everything in one place
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-600">
            The final version will link to the public source repository,
            model files, project report, presentation, and video demonstration.
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["⌘", "Source code", "GitHub repository and setup instructions."],
              ["🧠", "Trained model", "Downloadable model weights and inference script."],
              ["📄", "Project report", "Problem statement, methodology, and results."],
              ["🎞️", "Presentation", "Slides explaining the project workflow."],
              ["▶", "Video demonstration", "Project walkthrough and model demonstration."],
              ["↗", "Project publication", "Share the completed project on LinkedIn."],
            ].map(([icon, title, description]) => (
              <div key={title} className="rounded-2xl border border-indigo-100 bg-white p-6">
                <span className="text-3xl">{icon}</span>
                <h3 className="mt-4 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-indigo-600">
                  Link to be added
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-extrabold">
              Stationery<span className="text-indigo-400">AI</span>
            </p>
            <p className="mt-1 text-sm text-slate-400">
              A student project in deep learning and computer vision.
            </p>
          </div>
          <p className="text-sm text-slate-500">
            Built with Next.js · Python · TensorFlow
          </p>
        </div>
      </footer>
    </main>
  );
}

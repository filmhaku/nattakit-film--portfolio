# 📊 Nattakit Film | Data Analyst Portfolio

A high-fidelity, interactive, and responsive portfolio website designed for a **Data Analyst**. The site features a modern cyber-dark default theme, a user-toggled light theme, smooth animations, and a live interactive analytical dashboard powered by Chart.js.

🔗 **Live Website:** [https://filmhaku.github.io/nattakit-film--portfolio/](https://filmhaku.github.io/nattakit-film--portfolio/)

---

## ✨ Features

* **🎨 Responsive Cyber Aesthetics**: Modern glassmorphic layout, glowing neon highlights, and custom hover states.
* **🌓 Theme Toggle Switch**: A top-right toggle switch allowing users to swap between dark mode (default) and light mode. Persists theme choices via `localStorage`.
* **📈 Live Visualizations**: An interactive mini-dashboard powered by **Chart.js** that dynamically redraws charts (line, bar, and doughnut charts) and updates metrics on user click. It adjusts its color palettes dynamically to match the active theme.
* **💼 Highlighted Analytics Projects**: 3 portfolio cards showcasing data science/analytics projects with highlighted business impact takeaways.
* **📱 Mobile-Optimized**: Fully responsive design with an animated drawer menu for smaller screens.
* **✉️ Contact & Network Integration**: Integrated email, LinkedIn, and GitHub links alongside a client-side validated contact form.

---

## 📂 Project Structure

```text
/
├── index.html          # HTML structure, external CDNs (Fonts, Icons, Chart.js)
├── style.css           # Styling system (variables, responsive queries, glassmorphism)
├── app.js              # Theme-switching, Chart.js configuration, and form logic
├── README.md           # Project documentation
└── plan/
    └── our_plan.md     # Initial portfolio proposal and deployment plan
```

---

## 💼 Featured Projects

### 1. Telco Customer Churn Modeling
* **Description**: Built an end-to-end machine learning pipeline analyzing 7,000+ customer records to predict subscription churn. Resolved class imbalance using SMOTE and tuned XGBoost parameters to maximize recall.
* **Impact**: Identified key churn drivers, enabling targeted retention campaigns that decreased overall churn by **18.2%**.
* **Tools**: Python (Pandas), XGBoost, SQL, SMOTE.

### 2. Stock Price Regression Analysis
* **Description**: Engineered a quantitative analysis pipeline utilizing historical market data. Integrated technical indicator features (MACD, RSI, EMA) to train Ridge and LSTM regression models predicting daily closes.
* **Impact**: Achieved a Mean Absolute Percentage Error (MAPE) of **1.45%**, enhancing short-term asset trend signal accuracy.
* **Tools**: Python, Regression, Scikit-Learn, Time Series.

### 3. Customer Segmentation Study
* **Description**: Partitioned retail client transactions using K-Means, DBSCAN, and agglomerative clustering algorithms. Optimized cluster counts using Silhouette analysis to build clear buyer personas.
* **Impact**: Defined 4 high-value customer clusters, raising marketing campaign email click-through rates (CTR) by **22%**.
* **Tools**: Python, Clustering, K-Means, Customer Persona.

---

## 🛠️ Technologies Used

* **Structure**: HTML5
* **Styling**: CSS3 (Vanilla CSS variables, grid, flexbox, keyframe animations)
* **Logic & Charts**: JavaScript (ES6+), [Chart.js (v4+)](https://www.chartjs.org/)
* **Icons**: [Lucide Icons](https://lucide.dev/)
* **Typography**: [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) via Google Fonts

---

## 🚀 Getting Started Locally

To run the project on your local machine:

1. Clone this repository:
   ```bash
   git clone https://github.com/filmhaku/nattakit-film--portfolio.git
   ```
2. Open the directory:
   ```bash
   cd nattakit-film--portfolio
   ```
3. Open `index.html` in your web browser (or run a local development server like Live Server in VS Code).

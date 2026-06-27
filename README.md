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

### 1. Customer Cohort & Churn Study
* **Description**: Conducted transaction analysis of 500k+ customer records to construct monthly retention cohorts and pinpoint peak churn windows.
* **Impact**: Target marketing focus on churn-risk points improved retention rate by **14.5%**.
* **Tools**: SQL, Python (Pandas), Seaborn, Jupyter.

### 2. Marketing ROI Dashboard
* **Description**: Programmed an interactive tool that parses advertising spends across multiple channels and calculates real-time click-through rates (CTR) and ROI.
* **Impact**: Centralized visualization reduced reporting time from 8 hours/week to instantaneous.
* **Tools**: JavaScript, Chart.js, HTML5, CSS3.

### 3. Real Estate Price Predictor
* **Description**: Built and cross-validated Random Forest & XGBoost regression models to forecast housing prices and identify key value drivers.
* **Impact**: Achieved an $R^2$ of **0.89** and found that proximity to public transit carried 12% higher value weight than square footage alone.
* **Tools**: Python, Scikit-Learn, Regression, Matplotlib.

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

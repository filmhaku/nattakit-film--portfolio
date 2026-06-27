# Data Analyst Portfolio Plan for Nattakit Film

This document outlines the step-by-step plan to build and deploy a premium, interactive portfolio website for **Nattakit Film (Data Analyst)** on GitHub Pages.

---

## 🎨 Visual Identity & Design System
* **Font**: **JetBrains Mono** (loaded from Google Fonts). This provides a technical, data-driven, and highly readable terminal aesthetic.
* **Colors**: 
  * Background: Dark charcoal/midnight gray (`#0a0b0e` to `#12131a` gradient).
  * Accents: Cyber Green (`#00e676`) and Cyber Cyan (`#00e5ff`) for data visualizations and highlighted text.
  * Cards: Glassmorphism panels (semi-transparent with backdrop blur and subtle borders) to display projects.

---

## 🏗️ Structure of the Site (Single-Page App)

### 1. Hero Section
* **Title**: Nattakit Film
* **Sub-title**: Data Analyst
* **Tagline**: *"Unlocking hidden patterns in data to drive strategic business decisions."*
* **Call to Action**: "View Projects" and "Download Resume" buttons.

### 2. Live Interactive Dashboard (Chart.js Integration)
* We will load **Chart.js** via CDN.
* This section will display a live, interactive data dashboard showcasing analytics (e.g., Marketing Campaign Performance or Website traffic). 
* Visitors can toggle between different datasets (e.g., Conversion Rate vs. Revenue) to see the charts animate live, proving your visualization skills.

### 3. Projects Showcase (3 Selected Projects)
* **Project 1: Customer Cohort & Churn Analysis** (SQL & Python)
  * *Focus*: Customer retention cohorts and lifetime value (LTV).
* **Project 2: Interactive Campaign Performance Dashboard** (JavaScript & CSS)
  * *Focus*: Live dashboard showing conversion metrics.
* **Project 3: Real Estate Market Valuation & Price Predictor** (Python & Machine Learning)
  * *Focus*: Regression modeling and feature importance analysis.

### 4. Contact Details
* Professional Email address.
* GitHub profile link.
* LinkedIn profile link.

---

## 🚀 Step-by-Step Creation Guide

### Step 1: Create the Project Files
We will create three core files in your workspace directory:
1. `index.html`: Holds the page structure, icons, and Chart.js library.
2. `style.css`: Configures the grid layouts, glassmorphic styles, JetBrains Mono font, and animations.
3. `app.js`: Configures the interactive charts and dynamic page behavior.

### Step 2: Push Your Project to GitHub
1. Create a new public repository on GitHub (e.g., `nattakit-film-portfolio`).
2. Run the following Git commands in your project folder:
   ```bash
   git init
   git add .
   git commit -m "feat: init data analyst portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

### Step 3: Publish to GitHub Pages
1. Go to your repository on **GitHub.com**.
2. Click **Settings** > **Pages** (under Code and automation).
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Set the branch to **`main`** and folder to **`/(root)`**, then click **Save**.
5. Your site will go live at `https://<your-username>.github.io/<repo-name>/`.

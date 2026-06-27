/* ==========================================================================
   PORTFOLIO LOGIC & INTERACTIVITY
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initNavigation();
    initAnalyticsDashboard();
    initContactForm();
    initScrollEffects();
});

/* ==========================================================================
   THEME TOGGLE LOGIC
   ========================================================================== */
function initThemeToggle() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (!themeToggleBtn) return;

    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    
    if (savedTheme === 'light' || (!savedTheme && systemPrefersLight)) {
        document.body.classList.add('light-mode');
    }

    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        
        // Save choice in localStorage
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        
        // Dispatch custom event to notify chart.js and other components
        window.dispatchEvent(new CustomEvent('theme-changed'));
    });
}

/* ==========================================================================
   NAVIGATION LOGIC
   ========================================================================== */
function initNavigation() {
    const header = document.getElementById('header');
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinksContainer = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Scroll event for styling header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile nav toggle
    mobileToggle.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
        const icon = mobileToggle.querySelector('i');
        if (navLinksContainer.classList.contains('active')) {
            icon.setAttribute('data-lucide', 'x');
        } else {
            icon.setAttribute('data-lucide', 'menu');
        }
        lucide.createIcons();
    });

    // Close mobile nav when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinksContainer.classList.remove('active');
            const icon = mobileToggle.querySelector('i');
            icon.setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        });
    });
}

/* ==========================================================================
   ANALYTICS DASHBOARD (CHART.JS)
   ========================================================================== */
function initAnalyticsDashboard() {
    const ctx = document.getElementById('analyticsChart').getContext('2d');
    if (!ctx) return;

    let activeDatasetKey = 'campaign';
    let currentChart = null;

    function getThemeColors() {
        const isLight = document.body.classList.contains('light-mode');
        return {
            cyan: isLight ? '#0284c7' : '#00e5ff',
            green: isLight ? '#15803d' : '#00e676',
            glow: isLight ? '#7e22ce' : '#bc00dd',
            muted: isLight ? '#475569' : '#64748b',
            grid: isLight ? 'rgba(15, 23, 42, 0.06)' : 'rgba(255, 255, 255, 0.05)',
            text: isLight ? '#0f172a' : '#f1f5f9',
            doughnutBorder: isLight ? '#ffffff' : '#0f111a'
        };
    }

    function getDatasetsConfig() {
        const colors = getThemeColors();
        return {
            campaign: {
                title: "Marketing Campaign ROI Analysis",
                type: 'bar',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [
                        {
                            label: 'Ad Spend ($k)',
                            data: [12, 19, 15, 25, 22, 30],
                            backgroundColor: colors.glow + '40', // 25% opacity
                            borderColor: colors.glow,
                            borderWidth: 2,
                            borderRadius: 4,
                            order: 2
                        },
                        {
                            label: 'Revenue ($k)',
                            data: [35, 58, 48, 85, 78, 114],
                            type: 'line',
                            borderColor: colors.cyan,
                            backgroundColor: colors.cyan + '0d', // 5% opacity
                            borderWidth: 3,
                            pointBackgroundColor: colors.cyan,
                            pointBorderColor: colors.doughnutBorder,
                            pointHoverRadius: 6,
                            fill: true,
                            tension: 0.3,
                            order: 1
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            labels: { color: colors.text, font: { family: 'JetBrains Mono' } }
                        }
                    },
                    scales: {
                        x: {
                            grid: { color: colors.grid },
                            ticks: { color: colors.muted, font: { family: 'JetBrains Mono' } }
                        },
                        y: {
                            grid: { color: colors.grid },
                            ticks: { color: colors.muted, font: { family: 'JetBrains Mono' } }
                        }
                    }
                },
                stats: {
                    conversions: "4,820",
                    cac: "$12.50",
                    roas: "3.8x"
                }
            },
            traffic: {
                title: "Web Traffic Acquisition Channels",
                type: 'doughnut',
                data: {
                    labels: ['Organic Search', 'Paid Ads', 'Social Media', 'Referrals', 'Direct'],
                    datasets: [{
                        label: 'Visits',
                        data: [4200, 2800, 1800, 950, 1400],
                        backgroundColor: [
                            colors.cyan + 'cc',
                            colors.glow + 'cc',
                            colors.green + 'cc',
                            'rgba(255, 235, 59, 0.8)',
                            'rgba(100, 116, 139, 0.8)'
                        ],
                        borderColor: colors.doughnutBorder,
                        borderWidth: 3
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'right',
                            labels: { color: colors.text, font: { family: 'JetBrains Mono' } }
                        }
                    }
                },
                stats: {
                    conversions: "11,150",
                    cac: "$8.90",
                    roas: "4.2x"
                }
            },
            retention: {
                title: "User Cohort Retention Curve",
                type: 'line',
                data: {
                    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
                    datasets: [{
                        label: 'Retention Rate %',
                        data: [100, 84.5, 68.2, 55.4, 48.9, 42.1],
                        borderColor: colors.green,
                        backgroundColor: colors.green + '14',
                        borderWidth: 3,
                        pointBackgroundColor: colors.green,
                        pointHoverRadius: 6,
                        fill: true,
                        tension: 0.2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            labels: { color: colors.text, font: { family: 'JetBrains Mono' } }
                        }
                    },
                    scales: {
                        x: {
                            grid: { color: colors.grid },
                            ticks: { color: colors.muted, font: { family: 'JetBrains Mono' } }
                        },
                        y: {
                            min: 0,
                            max: 100,
                            grid: { color: colors.grid },
                            ticks: { 
                                color: colors.muted, 
                                font: { family: 'JetBrains Mono' },
                                callback: function(value) { return value + "%"; }
                            }
                        }
                    }
                },
                stats: {
                    conversions: "89.5%",
                    cac: "$15.20",
                    roas: "2.9x"
                }
            }
        };
    }

    function renderChart() {
        const datasets = getDatasetsConfig();
        const ds = datasets[activeDatasetKey];
        
        if (currentChart) {
            currentChart.destroy();
        }

        currentChart = new Chart(ctx, {
            type: ds.type,
            data: ds.data,
            options: ds.options
        });
    }

    // Initial render
    renderChart();

    // Control buttons event listeners
    const buttons = document.querySelectorAll('.db-btn');
    const titleElement = document.getElementById('dashboard-title');
    const statConversions = document.getElementById('stat-conversions');
    const statCac = document.getElementById('stat-cac');
    const statRoas = document.getElementById('stat-roas');

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const datasetKey = e.target.getAttribute('data-dataset');
            if (datasetKey === activeDatasetKey) return;

            buttons.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');

            activeDatasetKey = datasetKey;
            const datasets = getDatasetsConfig();
            const ds = datasets[datasetKey];

            titleElement.textContent = ds.title;
            statConversions.textContent = ds.stats.conversions;
            statCac.textContent = ds.stats.cac;
            statRoas.textContent = ds.stats.roas;

            renderChart();
        });
    });

    // Re-render chart on theme change
    window.addEventListener('theme-changed', () => {
        renderChart();
    });
}

/* ==========================================================================
   CONTACT FORM LOGIC
   ========================================================================== */
function initContactForm() {
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('form-feedback');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Show submitting state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i data-lucide="loader-2" class="btn-icon animate-spin"></i> Processing...';
        lucide.createIcons();

        // Simulate network API call
        setTimeout(() => {
            // Success response simulation
            feedback.textContent = "Message sent successfully! Thanks, I will be in touch.";
            feedback.className = "form-feedback success";
            
            // Reset form
            form.reset();
            
            // Re-enable button
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
            lucide.createIcons();
            
            // Remove success message after 5 seconds
            setTimeout(() => {
                feedback.className = "form-feedback hidden";
            }, 5000);

        }, 1500);
    });
}

/* ==========================================================================
   SCROLL EFFECTS & SCROLL ACTIVE LINK
   ========================================================================== */
function initScrollEffects() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll active link highlight
    window.addEventListener('scroll', () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Highlight link if scroll position is within section boundaries
            if (window.scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // CSS Scroll Animation trigger (using Intersection Observer)
    const observerOptions = {
        root: null,
        threshold: 0.15,
        rootMargin: "0px"
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                observer.unobserve(entry.target); // Trigger only once
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.classList.add('fade-in-section');
        sectionObserver.observe(section);
    });
}

// Add animation classes dynamically to CSS on load
const style = document.createElement('style');
style.textContent = `
    .fade-in-section {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    .fade-in-visible {
        opacity: 1;
        transform: translateY(0);
    }
    .animate-spin {
        animation: spin 1s linear infinite;
    }
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);

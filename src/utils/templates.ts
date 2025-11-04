import type { Template } from '../types';

export const templates: Template[] = [
  {
    id: 'blank',
    name: 'Blank Canvas',
    description: 'Start from scratch with a minimal template',
    category: 'blank',
    files: {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
</head>
<body>
    <h1>Hello World!</h1>
</body>
</html>`,
      css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: system-ui, -apple-system, sans-serif;
    padding: 2rem;
}`,
      javascript: `// Your JavaScript code here
console.log('Ready to code!');`
    }
  },
  {
    id: 'landing',
    name: 'Landing Page',
    description: 'Modern landing page with hero section',
    category: 'landing',
    files: {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product Landing</title>
</head>
<body>
    <nav class="navbar">
        <div class="container">
            <div class="logo">MyBrand</div>
            <ul class="nav-links">
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>

    <section class="hero">
        <div class="container">
            <h1>Build Amazing Websites</h1>
            <p>Create stunning web experiences with our powerful platform</p>
            <button class="cta-button">Get Started</button>
        </div>
    </section>

    <section id="features" class="features">
        <div class="container">
            <h2>Features</h2>
            <div class="feature-grid">
                <div class="feature-card">
                    <h3>⚡ Fast</h3>
                    <p>Lightning-fast performance</p>
                </div>
                <div class="feature-card">
                    <h3>🎨 Beautiful</h3>
                    <p>Stunning modern designs</p>
                </div>
                <div class="feature-card">
                    <h3>📱 Responsive</h3>
                    <p>Works on all devices</p>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <p>&copy; 2024 MyBrand. All rights reserved.</p>
    </footer>
</body>
</html>`,
      css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    line-height: 1.6;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Navbar */
.navbar {
    background: white;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    padding: 1rem 0;
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #6366f1;
}

.nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
}

.nav-links a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.3s;
}

.nav-links a:hover {
    color: #6366f1;
}

/* Hero Section */
.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 8rem 0;
    text-align: center;
}

.hero h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
}

.hero p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    opacity: 0.9;
}

.cta-button {
    background: white;
    color: #667eea;
    padding: 1rem 2.5rem;
    font-size: 1.1rem;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    font-weight: bold;
    transition: transform 0.3s;
}

.cta-button:hover {
    transform: scale(1.05);
}

/* Features Section */
.features {
    padding: 5rem 0;
    background: #f9fafb;
}

.features h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
}

.feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.feature-card {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transition: transform 0.3s;
}

.feature-card:hover {
    transform: translateY(-5px);
}

.feature-card h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}

/* Footer */
footer {
    background: #1f2937;
    color: white;
    text-align: center;
    padding: 2rem 0;
}

@media (max-width: 768px) {
    .hero h1 {
        font-size: 2rem;
    }

    .nav-links {
        gap: 1rem;
    }
}`,
      javascript: `// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// CTA button click handler
document.querySelector('.cta-button').addEventListener('click', () => {
    alert('Welcome! Let\\'s get started building your website! 🚀');
});

console.log('Landing page loaded successfully!');`
    }
  },
  {
    id: 'portfolio',
    name: 'Portfolio',
    description: 'Showcase your work beautifully',
    category: 'portfolio',
    files: {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
</head>
<body>
    <header>
        <h1>John Doe</h1>
        <p class="tagline">Full Stack Developer & Designer</p>
    </header>

    <section class="about">
        <div class="container">
            <h2>About Me</h2>
            <p>I'm a passionate developer who loves creating beautiful and functional websites.</p>
        </div>
    </section>

    <section class="projects">
        <div class="container">
            <h2>My Projects</h2>
            <div class="project-grid">
                <div class="project-card">
                    <div class="project-image"></div>
                    <h3>Project 1</h3>
                    <p>A stunning web application</p>
                </div>
                <div class="project-card">
                    <div class="project-image"></div>
                    <h3>Project 2</h3>
                    <p>Mobile-first design</p>
                </div>
                <div class="project-card">
                    <div class="project-image"></div>
                    <h3>Project 3</h3>
                    <p>E-commerce platform</p>
                </div>
            </div>
        </div>
    </section>

    <section class="contact">
        <div class="container">
            <h2>Get In Touch</h2>
            <p>Email: hello@example.com</p>
        </div>
    </section>
</body>
</html>`,
      css: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: #0f172a;
    color: white;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

header {
    text-align: center;
    padding: 5rem 0;
    background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
}

header h1 {
    font-size: 3rem;
    margin-bottom: 0.5rem;
}

.tagline {
    color: #94a3b8;
    font-size: 1.2rem;
}

section {
    padding: 4rem 0;
}

h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-align: center;
}

.about p {
    text-align: center;
    font-size: 1.2rem;
    color: #cbd5e1;
    max-width: 600px;
    margin: 0 auto;
}

.project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.project-card {
    background: #1e293b;
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.3s;
}

.project-card:hover {
    transform: translateY(-10px);
}

.project-image {
    height: 200px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.project-card h3,
.project-card p {
    padding: 1rem;
}

.contact {
    text-align: center;
    background: #1e293b;
}

.contact p {
    color: #94a3b8;
    font-size: 1.1rem;
}`,
      javascript: `// Add hover effects and animations
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.3)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = 'none';
    });
});

console.log('Portfolio loaded!');`
    }
  }
];

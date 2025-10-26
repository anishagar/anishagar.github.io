# Personal Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Features a clean design with smooth animations, mobile responsiveness, and easy project management.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Easy Project Management**: Simple JavaScript-based project system
- **Contact Integration**: Direct links to email, GitHub, and LinkedIn
- **Smooth Navigation**: Single-page application with smooth scrolling
- **Mobile Menu**: Hamburger menu for mobile devices
- **Scroll Animations**: Projects animate in as you scroll

## Project Structure

```
Website/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
└── README.md           # This file
```


## ✏️ How to Customize

### 1. Update Personal Information

**In `index.html`:**
- Replace "Your Name" with your actual name
- Update the hero subtitle with your title
- Modify the about section text
- Update contact links (email, GitHub, LinkedIn URLs)

### 2. Add/Edit Projects

**In `script.js`, find the `projectsData` array:**

```javascript
const projectsData = [
    {
        title: "Your Project Title",
        description: "Project description here...",
        technologies: ["React", "Node.js", "MongoDB"],
        liveUrl: "https://your-project-demo.com",
        githubUrl: "https://github.com/yourusername/project",
        icon: "🚀"  // Choose any emoji
    },
    // Add more projects here...
];
```

**To add a new project:**
1. Copy the project object structure
2. Fill in your project details
3. Choose an appropriate emoji icon
4. Save the file and refresh your browser

### 3. Update Skills

**In `index.html`, find the skills section:**
```html
<div class="skills-grid">
    <span class="skill-tag">JavaScript</span>
    <span class="skill-tag">React</span>
    <!-- Add or modify skills here -->
</div>
```

### 4. Customize Colors and Styling

**In `styles.css`:**
- Change the gradient colors in the hero section
- Modify the color scheme throughout the site
- Adjust fonts, spacing, and animations

## 🎨 Customization Examples

### Adding a New Project:
```javascript
{
    title: "My Awesome App",
    description: "A revolutionary app that solves world hunger through code.",
    technologies: ["React", "TypeScript", "Firebase"],
    liveUrl: "https://my-awesome-app.com",
    githubUrl: "https://github.com/yourusername/awesome-app",
    icon: "🌟"
}
```

### Changing the Color Scheme:
```css
/* In styles.css, replace the gradient */
.hero {
    background: linear-gradient(135deg, #your-color-1, #your-color-2);
}
```

## 📱 Mobile Responsiveness

The website is fully responsive and includes:
- Mobile navigation menu
- Touch-friendly buttons
- Optimized layouts for all screen sizes
- Smooth animations on mobile devices

## 🔧 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 📝 Notes

- All images are placeholder - replace with your actual project screenshots
- Contact links need to be updated with your actual URLs
- The website uses Font Awesome icons - make sure you have internet connection
- No build process required - just open and customize!

## 🚀 Deployment

### GitHub Pages:
1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select source as "Deploy from a branch"
5. Choose "main" branch
6. Your site will be available at `https://yourusername.github.io/repository-name`

### Netlify:
1. Drag and drop your project folder to Netlify
2. Your site will be live instantly!

## 🆘 Troubleshooting

**Website not loading properly:**
- Make sure all files are in the same folder
- Check that file names match exactly (case-sensitive)
- Try using a local server instead of opening directly

**Projects not showing:**
- Check the browser console for JavaScript errors
- Ensure the `projectsData` array is properly formatted
- Verify all quotes and brackets are closed

**Styling issues:**
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
- Check that `styles.css` is linked properly in HTML
- Ensure no syntax errors in CSS

## 📞 Support

If you need help customizing your portfolio, feel free to:
- Check the code comments for guidance
- Modify the examples provided
- Experiment with different values and see what happens!

---

**Happy coding! 🎉**

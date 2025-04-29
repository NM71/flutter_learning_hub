Flutter Developer Learning Hub
A modern, responsive web application that provides a curated collection of Flutter development resources and tutorials. This hub is designed to help Flutter developers at all skill levels find high-quality learning materials organized by category and skill level.

Features
Modern UI/UX: Clean, intuitive interface with smooth animations and transitions
Dark/Light Mode: Toggle between themes with automatic preference saving
Responsive Design: Optimized for all device sizes from mobile to desktop
Advanced Filtering: Filter tutorials by category (beginner, intermediate, advanced, etc.)
Search Functionality: Quickly find specific topics with real-time search
Tag System: Visual tags to identify tutorial topics at a glance
Persistent Settings: User preferences are saved between sessions
Technologies Used
HTML5
CSS3 (with CSS Variables for theming)
JavaScript (ES6+)
Font Awesome Icons
LocalStorage API
Getting Started
View Live Demo
Visit the live site: Flutter Developer Learning Hub

Run Locally
Clone this repository

git clone https://github.com/your-username/flutter-learning-hub.git



Open the project folder

cd flutter-learning-hub



Open index.html in your browser

Project Structure
index.html - Main HTML structure
styles.css - All styling including dark/light mode themes
data.js - Tutorial data with categories and tags
app.js - Application logic and event handlers
Adding New Tutorials
To add new tutorials, edit the data.js file and add new entries to the tutorials array:

{
  title: "Tutorial Title",
  url: "https://tutorial-url.com",
  category: ["beginner", "state"],  // Categories this tutorial belongs to
  tags: ["Tag1", "Tag2"]  // Tags to describe the tutorial
}



Contributing
Contributions are welcome! If you'd like to contribute:

Fork the repository
Create a new branch (git checkout -b feature/amazing-feature)
Make your changes
Commit your changes (git commit -m 'Add some amazing feature')
Push to the branch (git push origin feature/amazing-feature)
Open a Pull Request
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
All the amazing content creators who made the tutorials
The Flutter team for creating such an amazing framework
Font Awesome for the icons
Made with ❤️ for the Flutter community

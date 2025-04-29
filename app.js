// DOM Elements
const grid = document.getElementById("cardGrid");
const input = document.getElementById("searchInput");
const filterBtns = document.querySelectorAll(".filter-btn");
const themeToggle = document.getElementById("themeToggle");
const backToTop = document.getElementById("backToTop");

// State
let currentFilter = "all";
let searchTerm = "";
let isDarkMode = false;

// Functions
function renderCards() {
  grid.innerHTML = "";
  
  const filteredTutorials = tutorials.filter(tutorial => {
    const matchesSearch = tutorial.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = currentFilter === "all" || tutorial.category.includes(currentFilter);
    return matchesSearch && matchesCategory;
  });

  if (filteredTutorials.length === 0) {
    const noResults = document.createElement("div");
    noResults.className = "no-results";
    noResults.innerHTML = `
      <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.3;"></i>
      <h3>No tutorials found</h3>
      <p>Try adjusting your search or filter criteria</p>
    `;
    grid.appendChild(noResults);
    return;
  }

  filteredTutorials.forEach((tutorial, index) => {
    const div = document.createElement("div");
    div.className = "card";
    div.style.animationDelay = `${index * 0.05}s`;
    
    const tagsHTML = tutorial.tags.map(tag => 
      `<span class="card-tag">${tag}</span>`
    ).join('');
    
    div.innerHTML = `
      <div class="card-content">
        <h3>${tutorial.title}</h3>
        <div class="card-tags">${tagsHTML}</div>
      </div>
      <a href="${tutorial.url}" class="card-link" target="_blank">
        Watch Tutorial <i class="fas fa-arrow-right"></i>
      </a>
    `;
    
    grid.appendChild(div);
  });
}

function setActiveFilter(filter) {
  filterBtns.forEach(btn => {
    if (btn.dataset.category === filter) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

function toggleTheme() {
  isDarkMode = !isDarkMode;
  document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  themeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  
  // Save preference
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

function checkScroll() {
  if (window.scrollY > 300) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Event Listeners
input.addEventListener("input", e => {
  searchTerm = e.target.value;
  renderCards();
});

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    currentFilter = btn.dataset.category;
    setActiveFilter(currentFilter);
    renderCards();
  });
});

themeToggle.addEventListener("click", toggleTheme);

backToTop.addEventListener("click", scrollToTop);

window.addEventListener("scroll", checkScroll);

// Initialize
function init() {
  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    isDarkMode = savedTheme === 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  }
  
  renderCards();
  checkScroll();
}

// Start the app
init();

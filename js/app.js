/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const sections = document.querySelectorAll("section");
const navList = document.querySelector("#navbar__list");
const navBar = document.querySelector(".navbar__menu");
const header = document.querySelector(".page__header");
let userMove;

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
window.addEventListener("scroll", setActiveSection);
window.addEventListener("mousemove", toggleNavBar);

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

/**
 * Sets up the navigation bar with links to sections.
 * Creates navigation buttons for each section and appends them to the navigation list.
 * Configures smooth scroll behavior for each navigation button.
 * Finally, appends the navigation list to the navigation bar.
 * 
 * @function setUpNavBar
 */
function setUpNavBar() {
    sections.forEach((section) => {
        const navButton = document.createElement("li");
        navButton.innerHTML = `<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`;
        navList.appendChild(navButton);
        scrollBehavior(navButton, section);
    });
    navBar.appendChild(navList);
}


// Add class 'active' to section when near top of viewport

/**
 * Sets the active state for sections based on their position in the viewport.
 * Adds or removes classes to indicate active sections and corresponding navigation buttons.
 * 
 * @function setActiveSection
 */
function setActiveSection() {
    const activeSection = document.querySelectorAll(".menu__link");

    sections.forEach((section, i) => {
        const sectionBound = section.getBoundingClientRect();

        if (sectionBound.top <= 380 && sectionBound.bottom >= 350) {
            section.classList.add("your-active-class");
            activeSection[i].classList.add("active_button");
        } else {
            section.classList.remove("your-active-class");
            activeSection[i].classList.remove("active_button");
        }
    });
}

/**
 * Toggles the visibility of the navigation bar based on user interaction.
 * If the header has the "hidden-header" class, removes it to show the navigation bar.
 * Clears any existing timeout for hiding the navigation bar.
 * Sets a new timeout to hide the navigation bar after 6000 milliseconds (6 seconds).
 * 
 * @function toggleNavBar
 */
function toggleNavBar() {
    if (header.classList.contains("hidden-header")) {
        header.classList.remove("hidden-header");
    }
    window.clearTimeout(userMove);

    userMove = setTimeout(function () {
        header.classList.add("hidden-header");
    }, 6000);
}


// Scroll to anchor ID using scrollTO event
/**
 * Sets up smooth scroll behavior for a navigation button.
 * When the navigation button is clicked, prevents the default link behavior,
 * scrolls to the top of the specified section smoothly.
 * 
 * @param {Element} navButton - The navigation button element to which the click event is attached.
 * @param {Element} section - The section element to scroll to when the navigation button is clicked.
 * @function scrollBehavior
 */
function scrollBehavior(navButton, section) {
    navButton.addEventListener("click", (event) => {
        event.preventDefault();

        window.scrollTo({
            top: section.offsetTop,
            behavior: "smooth",
        });
    });
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
setUpNavBar();
// Scroll to section on link click

// Set sections as active


const menuButton = document.getElementById("menu-button");
const navLinks = document.querySelector(".nav-links");


function toggleMenu() {
    // 1. Toggle the CSS class (controls visibility via CSS)
    navLinks.classList.toggle('open');

    // 2. Update the button text/icon for accessibility
    const isExpanded = navLinks.classList.contains('open');
    menuButton.setAttribute('aria-expanded', isExpanded);
    menuButton.innerHTML = isExpanded ? '✕' : '☰'; // X vs Hamburger
}

// Add the event handler
menuButton.addEventListener("click", toggleMenu);


// OPTIONAL: Close the menu when a link inside is clicked (for mobile UX)
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('open')) {
            toggleMenu(); //Closes the menu
        }
    });
});

const contactForm = document.getElementById('form');

 if(contactForm){
    contactForm.addEventListener('submit',function(event){
        //Stop the browser from submitting the form and refreshing the page
        event.preventDefault();


        const name = contactForm.querySelector("input[name='name']").value;
        const email = contactForm.querySelector("input[name='email']").value;
        const message = contactForm.querySelector("input[name='message']").value;

        if (name === "" || email === "" || message === "") {
            alert("Please fill out all fields.");
        } else {
            alert("Form submitted successfully!");
            contactForm.reset();  //Clear the form fields
        }
    });
 }
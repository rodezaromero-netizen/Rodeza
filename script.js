// ================= PAGE NAVIGATION =================

function showPage(pageName) {

    // Hide all pages
    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });


    // Show selected page
    const selectedPage = document.getElementById(pageName);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }


    // Update active navigation
    const links = document.querySelectorAll(".nav-link");

    links.forEach(function(link) {

        link.classList.remove("active");

        if (link.dataset.page === pageName) {
            link.classList.add("active");
        }

    });


    // Scroll to top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ================= NAVIGATION CLICK =================

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const page = this.getAttribute("data-page");

        showPage(page);

    });

});


// ================= FEEDBACK =================

function submitFeedback(event) {

    event.preventDefault();

    const name = document.getElementById("fullname").value;

    alert(
        "Thank you, " +
        name +
        "! 💗 Your feedback has been submitted."
    );

    event.target.reset();
}
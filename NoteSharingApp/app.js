// Get the current page URL
var currentPageUrl = window.location.href;

// Get all the navigation links
var navigationLinks = document.querySelectorAll(".menu li a");

// Loop through the navigation links
for (var i = 0; i < navigationLinks.length; i++) {
    var link = navigationLinks[i];
    
    // Check if the link's href matches the current page URL
    if (link.href === currentPageUrl) {
        link.classList.add("active");
        break;
    }
}

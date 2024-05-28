//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("modal");
    var signUpBtn = document.getElementById("signUpBtn");
    var closeBtn = document.getElementsByClassName("close-btn")[0];

    // Show the modal when the Sign Up button is clicked
    signUpBtn.onclick = function() {
        modal.style.display = "block";
    }

    // Close the modal when the close button is clicked
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Close the modal when clicking outside of the modal content
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
function removeEl(id) {
    document.getElementById(id).style.display = "none";
}

/* Accordion - Start */
function accordion() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");

            /* Toggle between hiding and showing the active panel */
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            } 
        });
    }
}
/* Accordion - End */

/* Alternating Section Backgrounds - Start */
function backgrounds() {
    var arr = document.getElementsByClassName("altBgs");

    arr[0].style.background = "#fff";
    for (i = 1; i < arr.length; i++) {
        if ((i % 2) != 0) {
            arr[i].style.background = "#454355";
            arr[i].style.color = "#fff";
        }
        else {
            arr[i].style.background = "#fff";
        }
    }
}
/* Alternating Section Backgrounds - Start */

window.onload = function () {
    accordion();
    backgrounds();
}
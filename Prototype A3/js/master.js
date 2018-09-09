function hideDisplay(element) {
  element[0].style.display = "none";
};

function showDisplay(element) {
  element[0].style.display = "grid";
};

/* hides and shows menus when the main menu buttons are clicked */

document.querySelector('#allergiesBtn')
  .addEventListener('click', function(evt) {
    hideDisplay(document.getElementsByClassName('menuButtons'));
    showDisplay(document.getElementsByClassName('allergiesMenu'));
  });

document.querySelector('#dietryBtn')
  .addEventListener('click', function(evt) {
    hideDisplay(document.getElementsByClassName('menuButtons'));
    showDisplay(document.getElementsByClassName('dietryMenu'));
  });

document.querySelector('#searchBtn')
  .addEventListener('click', function(evt) {
    hideDisplay(document.getElementsByClassName('menuButtons'));
    showDisplay(document.getElementsByClassName('searchMenu'));
  });

document.querySelector('#backBtn')
.addEventListener('click', function(evt) {
  hideDisplay(document.getElementsByClassName('allergiesMenu'));
  hideDisplay(document.getElementsByClassName('dietryMenu'));
  hideDisplay(document.getElementsByClassName('searchMenu'));
  showDisplay(document.getElementsByClassName('menuButtons'));
});


/* code from https://www.w3schools.com/howto/howto_js_accordion.asp
  for the expandable menu in the allergies and dietry menus */

var expMenu = document.getElementsByClassName("expandableList");
var i;

for (i = 0; i < expMenu.length; i++) {
    expMenu[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
};
/* code so that when all Nuts is selected, all the unselected nuts get checked
and when all nuts is deselected, all the selected nuts get unchecked */

console.log(document.getElementsByClassName("expandableList"))

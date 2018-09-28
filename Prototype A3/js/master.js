function hideDisplay(element) {
  Array.from(element).forEach((elem) => {
    elem.classList.add('hidden');
  })
  //element[0].style.display = "none";
};

function showDisplay(element) {
  Array.from(element).forEach((elem) => {
    elem.classList.remove('hidden');
  })
  //element[0].style.display = "grid";
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
        if (panel.style.display === "grid") {
            panel.style.display = "none";
        } else {
            panel.style.display = "grid";
        }
    });
};
/* code so that when all Nuts is selected, all the unselected nuts get checked
and when all nuts is deselected, all the selected nuts get unchecked */

var checkbox = document.querySelector("#allNuts");
var nuts = document.getElementsByClassName("nut");
console.log(nuts[0]);
console.log(checkbox)

checkbox.addEventListener('change', function() {
    if(checkbox.checked) {
        // Checkbox is checked..
        console.log("checked")
        for (i = 0; i < nuts.length; i++) {
          nuts[i].checked = true;
        };
    } else {
        // Checkbox is not checked..
        console.log('unchecked')
        for (i = 0; i < nuts.length; i++) {
          nuts[i].checked = false;
        };
    };
});

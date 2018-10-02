var checkboxAll = document.getElementsByClassName("All");
var checkboxSub1 = document.getElementsByClassName("Sub1");
var checkboxSub2 = document.getElementsByClassName("Sub2");

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
    selector(checkboxSub1, checkboxAll[0])
    hideDisplay(document.getElementsByClassName('menuButtons'));
    showDisplay(document.getElementsByClassName('allergiesMenu'));
  });

document.querySelector('#dietryBtn')
  .addEventListener('click', function(evt) {
    selector(checkboxSub2, checkboxAll[1])
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

function selector(checkboxSub,checkboxAll) {
  checkboxAll.addEventListener('change', function() {
      if(checkboxAll.checked) {
          // Checkbox is checked..
          for (i = 0; i < checkboxSub.length; i++) {
            checkboxSub[i].checked = true;
            deselectorForSub(checkboxSub[i],checkboxAll);
          };
      } else {
          // Checkbox is not checked..
          for (i = 0; i < checkboxSub.length; i++) {
            checkboxSub[i].checked = false;
            deselectorRemover(checkboxSub[i],checkboxAll);
          };
      };
  });
};
// When the nuts are deslected after allnuts is selected all nuts should be deslected
function deselectorForSub(sub,checkboxAll) {
  sub.addEventListener('change', function() {
    if(sub.checked === false) {
      checkboxAll.checked = false;
    };
  });
};
// To minimise strain on the machine, the event listener will be removed when allNuts is unchecked
function deselectorRemover(sub,checkboxAll) {
  sub.removeEventListener('change', function() {
    if(sub.checked === false) {
      checkboxAll.checked = false;
    };
  });
};

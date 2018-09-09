function hideDisplay(element) {
  element[0].style.display = "none";
};

function showDisplay(element) {
  element[0].style.display = "grid";
};

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

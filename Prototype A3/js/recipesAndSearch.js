fetch('JSON/recipes.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    var recipes = myJson;
    console.log(Object.keys(recipes));
    document.getElementById('resultsRecipeName').innerHTML += recipes["name"] + "<br>" + "<br>";
    for (x = 0; x < recipes["method"].length; x++) {
      document.getElementById('results').innerHTML += (x+1) + ". " + recipes["method"][x] + "<br>" + "<br>";
    };
    // put the json file in local storage
  });

/*
function filterRecipes(group) {
  return recipes.filter(function(recipe) {
    return recipe.groups.indexOf(group) >= 0;
  });
}
*/

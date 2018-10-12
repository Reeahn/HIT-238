fetch('../JSON/recipes.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    var recipes = myJson;
    console.log(Object.keys(recipes));
    document.getElementById('results').innerHTML += recipes["name"], "\n";
    for (x in recipes["ingredients"]) {
      document.getElementById('results').innerHTML += recipes[x], "\n";
    };
  });

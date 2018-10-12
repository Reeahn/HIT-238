fetch('../JSON/recipes.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    var recipes = JSON.stringify(myJson);
    console.log(Object.keys(recipes));
    for (x in recipes) {
      document.getElementById('results').innerHTML += recipes[x];
    };
  });

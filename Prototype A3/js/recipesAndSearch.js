fetch('../JSON/recipes.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    var recipes = JSON.stringify(myJson);
    for (i = 0; i < recipes.length; i++) {
      document.getElementById('results').innerhtml += recipes[i]
      console.log(recipes[i])
    }
});

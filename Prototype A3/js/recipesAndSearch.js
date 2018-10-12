fetch('../JSON/recipes.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    var recipes = JSON.stringify(myJson);
    for (x in recipes) {
      document.getElementById('results').innerhtml += recipes[x];
    };
  })
  

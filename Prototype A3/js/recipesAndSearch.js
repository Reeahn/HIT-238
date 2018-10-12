fetch('../JSON/recipes.json')
  .then(function(response) {
    console.log(response.json())
    console.log(response)
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
});
// var recipes = JSON.parse(recipes)
// for (i = 0; i < recipes.length; i++) {
//   document.getElementById('results').innerhtml += recipes[i]
//   console.log(recipes[i])
// }
// console.log("recipes js loaded")

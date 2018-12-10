function MainController(){
    this.name = 'Jake';
    this.likes = ['pizza', 'coke'];
    this.favoriteMovies = [{
        title:"Shawshank Redemption",
        year: "1994"
    },
    {
        title:"Inception",
        year: "2010"
    },
    {
        title:"The Matrix",
        year: "1999"
    },
    {
        title:"Saving Private Ryan",
        year: "1998"
    }];
} 

// Allows code to be minification safe. Maps these arguments to the arguments in the function above, so minified variables access intended objects.
// MainController.$inject = ["$scope"]

//getter syntax
//registers a controller in the ng system called MainController, using the function reference  MainController
angular.module('app').controller('MainController', MainController);
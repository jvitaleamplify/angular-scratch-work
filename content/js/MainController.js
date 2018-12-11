function MainController(){
    this.name = 'Jake';
    this.likes = ['pizza', 'coke'];
    this.favoriteMovies = [{
        title:"Shawshank Redemption",
        year: "1994",
        popular:true,
        category: "thriller"
    },
    {
        title:"Inception",
        year: "2010",
        popular:false,
        category: "fantasy"
    },
    {
        title:"The Matrix",
        year: "1999",
        popular:true,
        category: "fantasy"
    },
    {
        title:"Saving Private Ryan",
        year: "1998",
        popular:true,
        category: "action"
    }];
} 

// Allows code to be minification safe. Maps these arguments to the arguments in the function above, so minified variables access intended objects.
// MainController.$inject = ["$scope"]

//getter syntax
//registers a controller in the ng system called MainController, using the function reference  MainController
angular.module('app').controller('MainController', MainController);
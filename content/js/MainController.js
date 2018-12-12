function MainController(){
    this.myDate = 1288323623006;
    this.myAmount = 209.82;
    this.movies = [
        {
            title:"movie A",
            year:2010
        },
        {
            title:"movie B",
            year:1995
        },
        {
            title:"movie C",
            year:2000
        }
    ]

    this.person = {
        name:"Jake Vitale",
        location:"Brooklyn"
    }
} 

// Allows code to be minification safe. Maps these arguments to the arguments in the function above, so minified variables access intended objects.
// MainController.$inject = ["$scope"]

//getter syntax
//registers a controller in the ng system called MainController, using the function reference  MainController
angular.module('app').controller('MainController', MainController);
function MainController(){
    this.text = "Hello World"
    this.myObject = {
        one: "Key 1",
        two: "Key 2"
    };
    this.myArray = ['my', 'angular', 'app'];
} 

// Allows code to be minification safe. Maps these arguments to the arguments in the function above, so minified variables access intended objects.
// MainController.$inject = ["$scope"]

//getter syntax
//registers a controller in the ng system called MainController, using the function reference  MainController
angular.module('app').controller('MainController', MainController);
function OrderController(){
    this.name = "Coca Cola"
    this.orderQuantity = 5;
}

angular.module('app').controller('OrderController', OrderController);
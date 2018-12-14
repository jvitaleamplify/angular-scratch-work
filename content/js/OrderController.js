function OrderController(){
    this.customerOrder = {
        name:'',
        email:'',
        location:'',
        product:{
            label:'',
            id:'',
        },
        comments:''
    };

    this.submitOrder = function(){
        console.log(this);
    }
}

angular.module('app').controller('OrderController', OrderController);
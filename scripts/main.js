var app = angular.module('StarterApp', ['ngMaterial']);

app.controller('AppController', function ($scope, $mdSidenav) {
    'use strict';
    var vm = this;
    
    var myDataRef = new Firebase('https://popping-fire-7452.firebaseio.com/');
    myDataRef.on("value", function(snapshot){
        console.log(snapshot.val());
    });
    
    vm.lat = 123;
    vm.lng = 234;
    this.getLatLng = function(){
        vm.lat = 'calculating...';
        navigator.geolocation.getCurrentPosition(function(pos){
            alert('ok', pos);
            console.log(pos);
            vm.lat = pos.coords.latitude;
            vm.lng = pos.coords.longitude;
            $scope.$apply();
        });
    };
    
    $scope.onSwipeLeft = function(ev) {
        alert("nicememe!");
    };
    
    $scope.onSwipeRight = function(ev) {
        alert("nicememe(right)!");
    };

    this.shoptypes = [
        {display: 'Closed'},
        {display: 'Souveniers'},
        {display: 'Gelateria'},
        {display: 'Bakery'},
        {display: 'Restaurant'},
        {display: 'Tobacco Store'},
        {display: 'Hotel'},
        {display: 'Grocery Store'},
        {display: 'Pharmacy'},
        {display: 'Bank'},
        {display: 'Leather Goods'},
        {display: 'Art'},
        {display: 'Pizzeria'},
        {display: 'Jewelry'},
        {display: 'Clothing'},
        {display: 'Bar'},
        {display: 'Optical Store'},
        {display: 'Electronics'},
        {display: 'Shoes'},
        {display: 'Exchange'},
        {display: 'Hotel with Restaurant'},
        {display: 'Bed and Breakfast'},
        {display: 'Boat Supplies'},
        {display: 'Travel Agency'},
        {display: 'Office Supplies'},
        {display: 'Hair Salon'},
        {display: 'Household Goods'},
        {display: 'Books'},
        {display: 'Affitacamere'},
        {display: 'Real Estate'},
        {display: 'Fitness'},
        {display: 'Wine'},
        {display: 'Butcher'},
        {display: 'Antiques'},
        {display: 'Masseuse'},
        {display: 'General Store'},
        {display: 'Produce'},
        {display: 'Textile'},
        {display: 'Florist'},
        {display: 'Hardware Store'},
        {display: 'Toys'},
        {display: 'Photo Store'},
        {display: 'Accessories'},
        {display: 'Dry Cleaner'},
        {display: 'Tailor'},
        {display: 'Appartment Rental'},
        {display: 'Wood Work'},
        {display: 'Hostel'},
        {display: 'Fish'},
        {display: 'Other Recreational Activites'},
        {display: 'Pet Store'},
        {display: 'Cosmetics'},
        {display: 'Perfume'},
        {display: 'Undergarments'},
        {display: 'Wedding'},
        {display: 'Metal Work'},
        {display: 'Repair'},
        {display: 'Coffee'},
        {display: 'Furniture'},
        {display: 'Candy'},
        {display: 'Dairy'},
        {display: 'Funeral Services'},
        {display: 'Nail Salon'},
        {display: 'Funeral Goods'},
        {display: 'Graphic Design'},
        {display: 'Stationery'},
        {display: 'Tattoo and Piercing'},
        {display: 'Costumes'},
        {display: 'Knives'},
        {display: 'Medical Goods'},
        {display: 'Delivery'},
        {display: 'Spa'},
        {display: 'Photographer'},
        {display: 'Entertainment'},
        {display: 'Liquor'},
        {display: 'Sporting Goods'},
        {display: 'Computer Services'},
        {display: 'Photocopy'},
        {display: 'Luxury'},
        {display: 'Laundromat'},
        {display: 'Money Transfer'},
        {display: 'Car Rental'},
        {display: 'Transportation'},
        {display: 'Coins and Stamps'},
        {display: 'Gloves'},
        {display: 'Hotel Without Restaurant'},
        {display: 'Computers'},
        {display: 'Musical Instruments'}
    ];
    
    vm.toggleSidenav = function (menuId) {
        $mdSidenav(menuId).toggle();
    };

});

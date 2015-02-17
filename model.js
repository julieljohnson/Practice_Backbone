var food = Backbone.Model.extend({
    urlRoot: "http://tiy-fee-rest.herokuapp.com/collections/bbpracJJ",
    idAttributes: '_id',
    defaults: {
        "restaurant": "Peninsula Grill",
        "entree": "steak",
        "dessert": "coconut cake"

    },

    initialize: function (){
        console.log('food model is created');
    }

});

var pizza = Backbone.Model.extend({
    eat: function(){
        console.log("yummmmm");
}
});

var Person = pizza.extend({
    eat: function(){
        pizza.prototype.eat.apply(this);
    }
});
var person = new Person();
person.eat();

var food1 = new food({restaurant: 'Vinnys', entree: 'Pizza', dessert: 'cannoli'})



Backbone.history.start();

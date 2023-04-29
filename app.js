
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/FruitsDB');

const fruitSchema = new mongoose.Schema ({
	name: String,
	rating: Number,
	review: String
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const apple = new Fruit ({
    name: 'Apple',
    rating: 1,
    review: 'solid'
});
const orange = new Fruit ({
    name: 'Orange',
    rating: 2,
    review: 'sour'
});
const kiwi = new Fruit ({
    name: 'Kiwi',
    rating: 3,
    review: 'soft'
});

//Fruit.insertMany([apple, orange, kiwi]);

Fruit.find()
    .then(function (fruits) {
        fruits.forEach(function (fruit) {
            console.log(fruit.name);
        });
        mongoose.connection.close();
    })
    .catch(function (err) {
        console.log(err);
    });


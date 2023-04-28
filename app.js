
const mongoose = require('mongoose');

//main().catch(err => console.log(err));

/* async function main() {

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
} */
mongoose.connect('mongodb://127.0.0.1:27017/FruitsDB');

const fruitSchema = new mongoose.Schema ({
	name: String,
	rating: Number,
	review: String
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const someFruit = new Fruit ({
    name: 'Apple',
    rating: 1,
    review: 'solid'
});

console.log(someFruit.name); // 'Apple'

someFruit.save();


const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/FruitsDB');
/* const fruitSchema = new mongoose.Schema ({
	name: String,
	rating: Number,
	review: String
}); */


const fruitSchema = new mongoose.Schema ({
    name: {type: String, required: [true, 'name is required, you forgot to specify it']},
    rating: {type: Number, min: 1, max: 10},
    review: {type: String}
});
const personSchema = new mongoose.Schema ({
    name: {type: String, required: [true, 'name is required, you forgot to specify it']},
    age: {type: Number, min: 1, max: 100},
    favoriteFruite: fruitSchema
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const Person = mongoose.model('Person', personSchema);

/* const apple = new Fruit ({
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
const fruitItem = new Fruit ({
    rating: 3,
    review: 'solid'
});
*/

const fruit = new Fruit({
    name: 'Pineapple',
    rating: 3,
    review: 'strange'
});
fruit.save();

const person = new Person({
    name: 'Amy',
    age: 12,
    favoriteFruite: fruit
});

person.save();
//Fruit.insertMany([apple, orange, kiwi]);
//fruitItem.save();
//Fruit.find()
//Fruit.updateOne({_id: '644cc525c3fbe00e1e6237c0'}, {name: 'Peach'});
//const id = '644b52ef0ca459b3502808d1';
//const ObjectId = new mongoose.Types.ObjectId;
//Fruit.deleteOne({_id: '644b52ef0ca459b3502808d1'});
//mongoose.connection.close();
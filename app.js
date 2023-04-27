const mongoose = require('mongoose');

/* main().catch(err => console.log(err));
async function main() {  await mongoose.connect('mongodb://localhost:27017/FruitsDB');  };
 */
mongoose.connect('mongodb://localhost:27017/FruitsDB', { useNewUrlParser: true, useUnifiedTopology: true });

/* const fruitSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    rating: { type: Number, required: true },
    review: { type: String, required: true }
}); */
const fruitSchema = new mongoose.Schema ({
	name: String,
	rating: Number,
	review: String
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit ({
    name: 'Apple1',
    rating: 7,
    review: 'pretty solid'
});

fruit.save();
/* fruit.save((err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Data saved successfully');
    }
  }); */
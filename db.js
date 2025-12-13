const mongoose = require('mongoose')

const URI = "mongodb+srv://oldage:karachi43211@cluster0.oxsh1nf.mongodb.net/?appName=Cluster0"
mongoose.set("strictQuery", false);
const connectToMongoose = () => mongoose.connect(URI, () => {
    console.log("Connected to Mongo Successfully")
})

module.exports = connectToMongoose


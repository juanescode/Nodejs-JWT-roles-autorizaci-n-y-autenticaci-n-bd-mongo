import mongoose from 'mongoose'

mongoose.connect("mongodb://localhost/company")
    .then(db => console.log("Connected to MongoDB"))
    .catch(err => console.log(err));

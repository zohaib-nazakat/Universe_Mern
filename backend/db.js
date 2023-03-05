const mongoose = require('mongoose')

const url = "mongodb+srv://Musharaf:galaxy@cluster0.biukzhi.mongodb.net/Data?retryWrites=true&w=majority"

module.exports.connect = () => {
    mongoose.connect(url, {
        useNewUrlparser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('MongoDB connected successfully')
    }).catch((error) => console.log("Error: ", error ))
}


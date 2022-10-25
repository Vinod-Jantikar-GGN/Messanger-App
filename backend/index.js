const express = require('express');
const mongoose = require('mongoose');



const connect = () => {
    return mongoose.connect(
        "mongodb://127.0.0.1:27017/messanger_app"
    )
}

const app = express()

const PORT =  9090




app.listen(PORT, () => {
    connect()
    console.log(`listening on port ${PORT}`);
})
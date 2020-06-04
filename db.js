const mongoose = require('mongoose');

const urlMongo = 'mongodb://heroku_mjjcbl5q:p4ps4ld71s74eiiotpivvekf5d@ds151247.mlab.com:51247/heroku_mjjcbl5q';

const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(urlMongo, config);

const mongoose = require('mongoose')

const connection = async () => {
    try {
        const connect = await mongoose.connect ('mongodb+srv://saraththekkadavan:zjWGpcggkcBaEdYu@cluster0.sphyvt5.mongodb.net/',
        {
            useNewUrlParser : true,
            useUnifiedTopology : true,

        });
        console.log("Database is running");
    }
    catch (err){
        console.log(`error : ${err}`);
        process.exit();
    }
};
module.exports = connection
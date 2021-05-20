module.exports ={
    mongoConnectionString: process.env.MONGO_CONNECTION_STRING,
    //Heroku sets port environment variable 
    webPort: process.env.PORT || 3000
}
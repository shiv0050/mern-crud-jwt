import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
import RestaurantsDAO from "/Users/shivanshgupta/mern-crud-auth/backend/dao/restaurantsDAO.js";
import ReviewsDAO from "/Users/shivanshgupta/mern-crud-auth/backend/dao/reviewsDAO.js"
dotenv.config();
const MongoClient = mongodb.MongoClient
const port = process.env.PORT || 8000
MongoClient.connect(
    process.env.RESTREVIEWS_DB_URI,
   {
        maxPoolSize:10,
        wtimeoutMS : 250,
        useNewUrlParser: true
    }
)
.catch(err=>{
    console.error(err.stack)
    process.exit(1)
})
.then(async client => {
    await RestaurantsDAO.injectDB(client)
    await ReviewsDAO.injectDB(client)

    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
})

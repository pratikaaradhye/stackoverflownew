import  express  from "express";
import mongoose from "mongoose";
import cors from 'cors'

import userRoutes from './routes/users.js'

mongoose.set('strictQuery', false);
const app = express();
app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

app.get('/',(req,res) => {
    res.send("This is a StackOverflow Clone API ")
})

app.use('/user',userRoutes)

const PORT = process.env.PORT || 5000

const CONNECTION_URL = "mongodb+srv://pratikaradhye:pratik@stack-overlow-clone.uzoookk.mongodb.net/" 

mongoose.connect( CONNECTION_URL , {useNewUrlParser:true,useUnifiedTopology:true})
    .then(() => app.listen(PORT, () => {console.log(`server running on port ${PORT}`)}))
    .catch((err) => console.log(err.message))
import express, {Router} from "express"
import router from "./routes/index.routes.js"
import mongoose from "mongoose"

const app = express();

const port = 3000;

mongoose
    .connect('mongodb://127.0.0.1:27017/todo')
    .then(() => console.log('Connected!'))

app.use(express.json())
app.use(express.urlencoded({ extended : false }))
app.use("/", router)

app.listen(port, () => {
    console.log(`listening port ${port}`)
});

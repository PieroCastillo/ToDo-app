import {Router} from "express"
import ToDo from "../models/ToDo.js"

const router = Router();
//Read from db
router.get("/", async (req, res, next) => {
    const tasks = await ToDo.find();
    console.log(tasks)
    res.send(tasks);
});

//Create from db
router.post("/", async (req, res) => {
    console.log(req.body)

    try{
    const task = new ToDo(req.body);
    const taskSaved = await task.save()
    console.log(taskSaved)

    }catch(error){
        console.log(error)
    }

    
    res.send("it's running")
});

//Update from db
router.put("/", (req, res) => {
    res.send("it's running")
});

//Delete from db
router.delete("/", (req, res) => {
    res.send("it's running")
});

export default router;
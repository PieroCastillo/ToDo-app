import {Router} from "express"
import ToDo from "../models/ToDo.js"

const router = Router();
//Read from db
router.get("/", async (req, res, next) => {
    const tasks = await ToDo.find();
    console.log(tasks)
    res.send(tasks);
});

router.get("/:title", async (req, res) =>{
    try{
        const {title} = req.params
        const task = await ToDo.findOne({title : title}).lean()
        console.log(task)
        res.send(task)
    }
    catch(exception){

    }
})

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
router.put("/:title", async (req, res) => {
    try{
        const {title} = req.params;
        const task = await ToDo.findOne({title : title})
        console.log(task)
        const {description, done} = req.body
        task.description = description
        task.done = done
        await task.save()
        console.log(task)
    }
    catch(error){
        console.log(error)
    }
    res.send("it's running")

});

//Delete from db
router.delete("/", (req, res) => {
    res.send("it's running")
});

export default router;
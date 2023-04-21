import {Router} from "express"

const router = Router();
//Read from db
router.get("/", (req, res, next) => {
    res.send("get");
});

//Create from db
router.post("/", (req, res) => {
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
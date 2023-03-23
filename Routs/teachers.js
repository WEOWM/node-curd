const express = require('express')
const teachers = require('../modals/teacher')
const router = express.Router()

// ADD

router.post("/add", async (req, res) => {
    console.log("req", req.body);
    const data = new teachers({
        name: req.body.name,
        age: req.body.age,
        subject: req.body.subject,
        qualification: req.body.qualification
    });

    try {
        const t1 = await data.save()
        res.send(t1)
    } catch (error) {
        console.log(error);
    }
})

// GET
router.get("/list", async (req, res) => {
    try {
        const teacher = await teachers.find();
        res.send(teacher)
    } catch (error) {
        console.log(error);
    }
})

// GET DETAILS

router.get("/details/:id", async (req, res) => {
    try {
        const teacher = await teachers.findById(req.params.id);
        res.send(teacher)
    } catch (error) {
        console.log(error);
    }
})
// PATCH

router.patch("/edit/:id", async (req, res) => {
    try {
        const teacher = await teachers.updateOne(
            { _id: req.params.id },
            { $set: req.body }
        )
        res.send(teacher)
    } catch (error) {
        console.log(error);
    }
})
// DELETE

router.delete("/delete/:id", async (req, res) => {
    try {
        const teacher = await teachers.deleteOne(
            { _id: req.params.id },
            { $set: req.body }
        )
        res.send(teacher)
    } catch (error) {
        console.log(error);
    }
})


module.exports = router
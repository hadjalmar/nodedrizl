const express = require("express");
const { books } = require("../db/schema");
const router = express.Router();
const db = require("../db/db")

router.get("/",async(req,res)=>{
    try {
        const entries = await db.select().from(books);

    } catch (err) {
        return res.status(500).json({
            message:err.message||"unveninev",
        })
    }
})
module.exports = router;
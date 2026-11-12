const express = require("express");
const { books } = require("../db/schema");
const router = express.Router();
const db = require("../db/db");
const { eq } = require("drizzle-orm");
const renderErrorHandler = require("../utilites/renderErrorHandler");

router.get("/",async(req,res)=>{
    try {
        const entries = await db.select().from(books);

    } catch (err) {
        return res.status(500).json({
            message:err.message||"unveninev",
        })
    }
})

router.get("/:id",async(req,res)=>{
    try {
        const [entry] = await db.select()
        .from(books)
        .where(eq(books.id,+req.params.id));
        if(!entry){
            return res.status(404).json({
                message:"book lenni gatya"
            })
        }
        return res.status(200).json(entry);
    } 
    catch (error) {
        renderErrorHandler(res,err)
    }
})
module.exports = router;
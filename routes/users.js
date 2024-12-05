import { Router } from "express";

const router=Router();

router.route('/').get((req,res)=>{
    console.log("hitting the user page");
    res.render("users")});

    export default router;
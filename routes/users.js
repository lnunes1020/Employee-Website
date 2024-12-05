import { Router } from "express";

const router=Router();

router.route('/users').get((req,res)=>{
    console.log("hitting the user page");
    res.render("users")});

    //need post 

    export default router;
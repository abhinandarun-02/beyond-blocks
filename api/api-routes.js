import {Router} from "express";
const router= Router();
let info;
router.get('/',function(req,res){
    res.send("Hello World");
})
router.post('/create',function(req,res){
    const data= req.body;
    info=data.inputMsg;
    res.status(201).json({"Success":info});
    
})
router.get('/read',function(req,res){
    res.json(info);
})
export default router;
const { verifyToken, verifyTokenAndAuthrization, verifyTokenAndAdmin } = require("./verifyToken");
const router = require("express").Router();
const cryptoJS = require("crypto-js");
const Cart = require("../models/Cart");

//CREATE 
router.post("/" ,verifyToken , async(req,res)=>{
    const newCart = new Cart(req.body)

    try{
        const savedCart = await newCart.save( );
        res.status(200).json(savedCart);
    }catch(err){
        res.status(500).json(err);
        console.log(err);
    }
})
//UPDATE
router.put("/:id", verifyTokenAndAuthrization , async (req,res)=>{
    try{
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id , {
            $set: req.body
        },
        {new:true});
        res.status(200).json(updatedCart);
    }catch(err){res.status(500).json(err);
                console.log(err);
    }
});
//DELETE
router.delete("/:userId",verifyTokenAndAuthrization, async (req,res)=>{
    try{
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json(" Cart has been deleted...!")
    }catch(err)
    {
        res.status(500).json(err);
        console.log(err);
    }
})
//GET
router.get("/find/:id", verifyTokenAndAuthrization , async (req,res)=>{
    try{
        const cart = await Cart.findOne({userId :req.params.userId});
        res.status(200).json(cart);
    }catch(err)
    {
        res.status(500).json(err)
        console.log(err);
    }
});
// //GET ALL
router.get("/", verifyTokenAndAdmin ,async (req,res)=>{
    try{
        const carts = await Cart.find();
        res.status(200).json(carts);
    }catch(err){
        res.status(500).json(err);
        console.log(err);
    }
})

module.exports = router;
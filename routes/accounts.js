//---------------- libraries ----------------//

    const express    =   require("express");
    const router     =   express.Router();
    const Account    =   require("../models/account");
    const path       =   require("path");
    const hash       =   require("../hash")

//---------------- libraries ----------------//


//--------------------------- requests ---------------------------//

    //remember to delete this later this is just for dev
    router.get("/", async (req, res) => {
        const accounts = await Account.find();
        res.json(accounts);
    })

    //get a single account
    router.get("/:id", getAccount, (req,res) => {
        res.send(res.account);
    
    })

    router.get("/:email/:password",  async (req,res) => {
        const account = await Account.find({"email": req.params.email});
        const decryptedPassword = hash.decrypt({"encryptedData": account[0].password,
        "iv": account[0].iv})

        if(decryptedPassword == req.params.password)
        {
            res.send("yep")
        }
        else
        {
            res.send("nope")
        }
    })

    //create an account
    router.post("/", async (req,res) => {
        const hashed = hash.encrypt(req.body.password)
        const account = new Account({
            username: req.body.username,
            name: req.body.name,
            email: req.body.email,
            password: hashed.encryptedData,
            isAdmin: req.body.isAdmin,
            creationDate: req.body.creationDate,
            iv: hashed.iv
        })

        try{
            const newAccount = await account.save();
            res.status(201).json({message: "Created Account", account: newAccount});
        }catch(err){
            res.status(400).json({message:err})
        }
    })
    

    //edit an account
    router.patch("/:id", (req,res) => {
        //TODO: complete this
    })

    //delete an account
    router.delete("/:id", getAccount, async (req,res) => {
        try{
            await res.account.remove();
            res.json({message: "Deleted Account", account: res.account})
        }catch(err){
            res.status(500).json({message:err})
        }
    })

    async function getAccount(req, res, next){

        let account;
        try{
            account = await Account.findById(req.params.id);
            if(account == null){
                return res.status(404).json({message: "Cannot find that account"});
            }
        }catch(err){
            return res.status(500).json({message: err.message})
        }
        res.account = account;
        next();
    }


//--------------------------- requests ---------------------------//


//--------- export ---------//
    module.exports = router;
//--------- export ---------//
//---------------- libraries ----------------//

    const express    =   require("express");
    const router     =   express.Router();
    const Ruleset    =   require("../models/ruleset");
    const path       =   require("path");
    const hash       =   require("../hash")

//---------------- libraries ----------------//


//--------------------------- requests ---------------------------//

    //get a single ruleset
    router.get("/:ruleset", getRuleset, (req,res) => {
        res.send(res.ruleset);

    })


    //edit an ruleset
    router.patch("/:ruleset", getRuleset, async (req, res) => {
        patchParameterCheck(req, res);
        try {
            const updatedruleset = await res.ruleset.save();
            res.json(updatedruleset);
        } catch (err) {
            res.status(400).json({ res: err.message });
        }
    });

    //function to check parameters for patch, refactored into a function
    function patchParameterCheck(req, res) {
        if (req.body.ruleset != null) {
            res.ruleset.ruleset = req.body.ruleset;
        }
        if (req.body.reverse != null) {
            res.ruleset.reverse = req.body.reverse;
        }
        if (req.body.gate != null) {
            res.ruleset.gate = req.body.gate;
        }
        if (req.body.roll != null) {
            res.ruleset.roll = req.body.roll;
        }
    }

    //middleware
    async function getRuleset(req, res, next){

        let ruleset;
        try{
            ruleset = await Ruleset.findById(req.params.ruleset);
            if(ruleset == null){
                return res.status(404).json({res: "Cannot find that ruleset"});
            }
        }catch(err){
            return res.status(500).json({res: err.res})
        }
        res.ruleset = ruleset;
        next();
    }


//--------------------------- requests ---------------------------//


//--------- export ---------//

    module.exports = router;

//--------- export ---------//
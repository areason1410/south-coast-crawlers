//--------------------------- requests ---------------------------//

//get all accounts
router.get("/", async (req, res) => {
  const accounts = await Account.find();
  res.json(accounts);
});

//get a single account
router.get("/:id", getAccount, (req, res) => {
  res.send(res.account);
});

//create an account
router.post("/", async (req, res) => {
  const hashed = hash.encrypt(req.body.password);
  const account = new Account({
    username: req.body.username,
    name: req.body.name,
    email: req.body.email,
    password: hashed.encryptedData,
    isAdmin: req.body.isAdmin,
    creationDate: req.body.creationDate,
    iv: hashed.iv,
  });

  try {
    const newAccount = await account.save();
    res.status(201).json({ message: "Created Account", account: newAccount });
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

//edit an account
router.patch("/:id", getAccount, async (req, res) => {
  if (req.body.name != null) {
    res.account.name = req.body = req.body.name;
  }
  if (req.body.name != null) {
    res.account.name = req.body = req.body.name;
  }

  try {
    const updatedAccount = await res.account.save();
    res.json(updatedAccount);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//delete an account
router.delete("/:id", getAccount, async (req, res) => {
  try {
    await res.account.remove();
    res.json({ message: "Deleted Account", account: res.account });
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

async function getAccount(req, res, next) {
  let account;
  try {
    account = await Account.findById(req.params.id);
    if (account == null) {
      return res.status(404).json({ message: "Cannot find that account" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.account = account;
  next();
}

//--------------------------- requests ---------------------------//

//-------- export --------//
module.exports = router;
//-------- export --------//

//remember to delete this later this is just for dev
router.get("/", async (req, res) => {
  const accounts = await Account.find();
  res.json(accounts);
});

//get a single account
router.get("/:id", getAccount, (req, res) => {
  res.send(res.account);
});

router.get("/:email/:password", checkPassword, async (req, res) => {
  res.send({ res: res.passwordCheck });
});

//create an account
router.post("/", async (req, res) => {
  const hashed = hash.encrypt(req.body.password);
  const account = new Account({
    username: req.body.username,
    name: req.body.name,
    email: req.body.email,
    password: hashed.encryptedData,
    isAdmin: req.body.isAdmin,
    creationDate: req.body.creationDate,
    iv: hashed.iv,
  });

  try {
    const newAccount = await account.save();
    res.status(201).json({ res: "Created Account", account: newAccount });
  } catch (err) {
    res.status(400).json({ res: err });
  }
});

//edit an account
router.patch("/:id", (req, res) => {
  //TODO: complete this
});

//delete an account
router.delete("/:id", getAccount, async (req, res) => {
  try {
    await res.account.remove();
    res.json({ res: "Deleted Account", account: res.account });
  } catch (err) {
    res.status(500).json({ res: err });
  }
});

async function getAccount(req, res, next) {
  let account;
  try {
    account = await Account.findById(req.params.id);
    if (account == null) {
      return res.status(404).json({ res: "Cannot find that account" });
    }
  } catch (err) {
    return res.status(500).json({ res: err.message });
  }
  res.account = account;
  next();
}

async function checkPassword(req, res, next) {
  var passwordCheck = false;
  try {
    const account = await Account.findOne({ email: req.params.email });
    if (account == null) {
      return res.status(404).json({ res: "Cannot find that account" });
    }
    const decryptedPassword = hash.decrypt({
      encryptedData: account.password,
      iv: account.iv,
    });

    if (decryptedPassword == req.params.password) {
      passwordCheck = true;
    }
  } catch (err) {
    return res.status(500).json({ res: err.message });
  }
  res.passwordCheck = passwordCheck;
  next();
}

//--------------------------- requests ---------------------------//

//--------- export ---------//
module.exports = router;
//--------- export ---------//

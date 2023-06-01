const user = require("../model/user");

//Create user
exports.create = (req, res) => {
  //If request form is not filled
  if (!req.body) {
    res.status(400).send({
      message: "Message cannot be empty",
    });
  }

  //Create new user
  var new_user = new user({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });

  //Save to Database
  new_user
    .save()
    .then((user) => {
      res.send({ data: user, message: "User created Sucessfully" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.find = (req, res) => {
  //Fetch all Users
  user
    .find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(200).send({ message: err.message });
    });
};
exports.findOne = (req, res) => {
  //User id
  const id = req.param.id;

  //Fetch user by ID
  user
    .findById(id)
    .then((user) => {
      //User not found
      if (!user) {
        res.status(500).send({ message: "User not found" });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error" });
    });
};

exports.update = (req, res) => {
  //User id
  const id = req.param.id;

  //Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Message cannot be empty",
    });
  }

  //Update User Details
  user
    .findByIdAndUpdate(id, req.body, { new: true })
    .then((user) => {
      //User not found
      if (!user) {
        res.status(500).send({ message: "User not found" });
      }

      res.send({
        data: user,
        message: "User Updated Successfully",
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err || "Error occurred" });
    });
};

exports.delete = (req, res) => {
  const id = req.param.id;

  res.send("See id" + id);

  // user.findByIdAndDelete(id).then(user =>{
  //     //User coud not delete
  //     if(!user){
  //         res.status(500).send({message:"Couldn't delete"});
  //     }

  //     res.send("User delleted Successfuly");;
  // }).catch(err =>{
  //     res.status(500).send({message:err || "Error occurred"})
  // });
};

// module.exports

const axios = require("axios");

exports.homeRoutes = (req, res) => {
  axios
    .get("http://localhost:3000/api/users")
    .then((response) => {
      // Handle the response data here
      const data = response.data;
      //   console.log(data);
      res.render("index", { data });
    })
    .catch((error) => {
      // Handle any errors that occur during the request
      console.error(error);
    });

  //   let data = {
  //     name: "David",
  //   };
};
exports.add_user = (req, res) => {
  res.render("add-user");
};
exports.edit_user = (req, res) => {
  res.render("edit-user");
};
exports.update_user = (req, res) => {
  // res.render('add-user');
};
exports.delete_user = (req, res) => {
  res.render("delete-user");
};

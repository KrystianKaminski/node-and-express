exports.store = (req, res) => {
  req.flash("form", req.body.first_name + ", you are a true hero!");
  res.redirect("/");
};

exports.normalizeData = (req, res, next) => {
  const nameArr = req.body.name.split(" ");
  // Imie Nazwisko =? ['Imie', 'Naziwsko']

  req.body.first_name = nameArr.shift();
  req.body.last_name = nameArr.join(" ");

  next();
};

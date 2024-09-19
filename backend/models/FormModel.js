const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
  regform: String,
  regform2: String,
  regform3: String,
  regform4: String,
  selectField: String,
  file: null,
});

module.exports = mongoose.model("Form", FormSchema);

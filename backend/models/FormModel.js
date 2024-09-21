const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
  regform: {
    type: String,
  },
  regform2: {
    type: String,
  },
  selectField: {
    type: String,
  },
  fileUrl: {
    type: String,
  },
  checkbox1: {
    type: Boolean,
  },
  checkbox2: {
    type: Boolean,
  },
  checkbox3: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Form", FormSchema);

import mongoose from "mongoose";
let bookSchema = mongoose.Schema(
  {
    title: {
      type: "String",
      required: true,
      minLength: [2, "The title must at least be 5 letters"],
      maxLength: [40, "The title cannot exceed 40 letters"],
    },
    author: {
      type: "String",
      required: true,
      minLength: [1, "The name must at least be 1 letters"],
      maxLength: [40, "The name cannot exceed 40 letters"],
    },
    publishYear: {
      type: Number,
      required: true,
      validate: {
        validator: function (value) {
          if (value < 1800) {
            return false;
          } else {
            return true;
          }
        },
        message: "Please enter a valid year",
      },
    },
  },
  { timestamps: true }
);
let bookModel = mongoose.model("book", bookSchema);
export default bookModel;

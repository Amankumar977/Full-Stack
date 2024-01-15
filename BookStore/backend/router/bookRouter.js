import express from "express";
import bookModel from "../Models/bookSchema.js";
const router = express.Router();
router.post("/", async (req, res) => {
  try {
    const body = req.body;
    if (!body || !body.title || !body.publishYear || !body.author) {
      return res
        .status(400)
        .json({ success: false, message: "All the fields are required" });
    }
    const book = await bookModel.create(body);
    return res.status(201).json({ success: true, message: book });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "The title must be unique",
      });
    }
    console.log("There is a error in createbook router", error.message);
    res.status(500).json({ success: false, message: "The request was bad" });
  }
  return;
});
router.get("/", async (req, res) => {
  try {
    let allBooks = await bookModel.find();
    if (!allBooks) {
      return res.status(400).json({
        success: false,
        message: "The request failed",
      });
    }
    res
      .status(200)
      .json({ success: true, count: allBooks.length, data: allBooks });
  } catch (error) {
    console.log("There is a error in getAllbooks router", error.message);
    return res
      .status(500)
      .json({ success: false, message: "The request was bad" });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await bookModel.findById(id);
    if (!book) {
      return res
        .status(500)
        .json({ success: false, message: "The book is not found" });
    }
    return res.json({
      success: true,
      data: book,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error Here",
      err: error.message,
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    if (
      !req.body ||
      !req.body.title ||
      !req.body.publishYear ||
      !req.body.author
    ) {
      return res
        .status(400)
        .json({ success: false, message: "All the fields are required" });
    }
    const { id } = req.params;
    const updatedBook = await bookModel.findByIdAndUpdate(id, req.body);
    if (!updatedBook) {
      return res.status(500).json({
        success: false,
        message: "Internal Server Error in updateBook",
      });
    }
    return res.status(200).json({ success: true, data: updatedBook });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Internal Server Error ${error.message}`,
    });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(500).json({
        success: false,
        message: `Internal Server Error in getting the id for delete book ${error.message}`,
      });
    }
    const deleteBook = await bookModel.findByIdAndDelete(id);
    if (!deleteBook) {
      return res.status(500).json({
        success: false,
        message: "interval server error in delete book",
      });
    }

    return res
      .status(200)
      .json({ success: true, message: "The book deletion successful" });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `Internal Server Error in deleting the book ${error.message}`,
    });
  }
});
export default router;

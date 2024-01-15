import React, { useState } from "react";
import axios from "axios";
import { Spinner } from "../Components/index";
import { useNavigate } from "react-router-dom";
import { BackButton } from "../Components/index";
import { useSnackbar } from "notistack";
function CreateBook() {
  let [isLoading, setIsLoading] = useState(false);
  let [title, setTitle] = useState("");
  let [author, setAuthor] = useState("");
  let [publishYear, setPublishYear] = useState("");
  let navigate = useNavigate();
  let { enqueueSnackbar } = useSnackbar();
  let handleSaveBook = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const data = {
      title,
      author,
      publishYear,
    };
    axios
      .post(`${import.meta.env.VITE_BASE_URL}/books`, data)
      .then(() => {
        setIsLoading(false);
        enqueueSnackbar("Book Created Sucessfully", { variant: "success" });
        navigate("/");
      })
      .catch((err) => {
        enqueueSnackbar("Error in book creating", { variant: "error" });
        setIsLoading(false);
      });
  };
  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <BackButton />
      <div className="flex justify-center items-center ">
        <div className="border border-white p-2 lg:p-10 md:text-4xl space-y-4 rounded-lg flex justify-center items-center">
          <form>
            <h3 className="text-center text-green-600 lg:text-6xl md:pb-2">
              Create a new book
            </h3>
            <div className="py-4">
              <label htmlFor="title">Title : </label>
              <input
                type="text"
                className="outline-none lg:py-1 lg:px-2 "
                onChange={(e) => setTitle(e.target.value)}
                required
                placeholder="Please enter title"
                name="title"
                id="title"
              />
            </div>
            <div className="py-4">
              <label htmlFor="title">Author: </label>
              <input
                type="text"
                className="outline-none lg:py-1 lg:px-2 "
                onChange={(e) => setAuthor(e.target.value)}
                required
                placeholder="Please enter Author Name"
              />
            </div>
            <div className="py-4">
              <label htmlFor="title">P.Year: </label>
              <input
                type="number"
                className="outline-none lg:py-1 lg:px-2 "
                onChange={(e) => setPublishYear(e.target.value)}
                required
                placeholder="Publish Year"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                onClick={handleSaveBook}
                className="bg-green-600 text-white w-full py-2 rounded-lg ">
                Save the book
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateBook;

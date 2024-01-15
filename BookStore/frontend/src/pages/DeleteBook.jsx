import React, { useState } from "react";
import Spinner from "../Components/Spinner";
import { BackButton } from "../Components/index";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";
function DeleteBook() {
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  let { enqueueSnackbar } = useSnackbar();
  const handleDeleteBook = () => {
    setIsLoading(true);
    axios
      .delete(`${import.meta.env.VITE_BASE_URL}/books/${id}`)
      .then(() => {
        setIsLoading(false);
        navigate("/");
        enqueueSnackbar("Book deleted Succesfully", { variant: "success" });
      })
      .catch((err) => {
        setIsLoading(false);
        navigate("/");
        enqueueSnackbar("Book deleted unsuccesful", { variant: "error" });
      });
  };
  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <BackButton />
      <div className="flex justify-center items-center">
        <div className="border border-white md:p-8">
          <p className="md:text-4xl">
            Are you sure you want to delete the book
          </p>
          <div className="text-center">
            <button
              type="submit"
              onClick={handleDeleteBook}
              className="bg-red-700 text-white w-full
             rounded-lg py-3 mt-5 text-xl">
              Delete book
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeleteBook;

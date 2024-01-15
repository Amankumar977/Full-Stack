import React, { useState, useEffect } from "react";
import { BackButton } from "../Components/index";
import { useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
function ShowBooks() {
  let { id } = useParams();
  let [book, setBook] = useState([]);
  let [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://localhost:5000/books/${id}`)
      .then((res) => {
        setIsLoading(false);
        setBook(res.data.data);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <BackButton />
          <div className="flex justify-center items-center ">
            <div className="border border-gray-500 w-fit text-green-600 text-6xl p-8 rounded-xl">
              <div>
                <span> Title :</span>
                <span>{book.title}</span>
              </div>
              <h1> Author : {book.author}</h1>
              <h1> Publish Year : {book.publishYear}</h1>
              <h1>
                Online Publish Date :{" "}
                {book?.createdAt?.toString().substring(0, 10)}
              </h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ShowBooks;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../Components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import { BookCard, BookTable } from "../Components/index";
function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [showType, setShowType] = useState("card");
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/books`)
      .then((res) => {
        setIsLoading(false);
        setBooks(res.data.data);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, []);

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-7xl text-white">Welcome to the Book Store</h1>
      <h3 className="text-3xl text-white p-4">
        Here is a list of the available books
      </h3>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="text-2xl m-4">
            Viem the details in:{" "}
            <button
              className="text-white bg-blue-900 px-2 py-1 rounded-lg"
              onClick={() => setShowType("card")}>
              Card Form
            </button>{" "}
            <button
              className="text-white bg-blue-900 px-2 py-1 rounded-lg mr-3"
              onClick={() => setShowType("table")}>
              Table Form
            </button>
          </div>
          <Link
            to={"/books/create"}
            className="flex justify-between w-[88%] text-2xl mb-4">
            <h1>Create a new book to add</h1>
            <MdOutlineAddBox className="text-green-800 text-4xl" />
          </Link>
          {showType === "table" ? (
            <BookTable books={books} />
          ) : (
            <BookCard books={books} />
          )}
        </>
      )}
    </div>
  );
}

export default Home;

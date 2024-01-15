import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import {
  IoInformationCircleOutline,
  IoPersonCircleOutline,
} from "react-icons/io5";
import { LuPencilLine } from "react-icons/lu";
import { Link } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import BookModal from "./BookModal";
function BookCard({ books }) {
  const [showModel, setShowModel] = useState(false);
  return (
    <div className="flex flex-wrap gap-4 px-20 text-2xl text-white mt-4">
      {books &&
        books.map((book) => (
          <div
            key={book._id}
            className="border border-white rounded-lg w-[20rem]">
            <div className="p-3">
              <div className="bg-pink-400 w-fit rounded-lg px-2 align-right ml-56">
                {book.publishYear}
              </div>
              <p className="flex justify-start items-center gap-8">
                <FaBookOpen /> : {book.title}
              </p>
              <p className="flex justify-start items-center gap-8">
                <IoPersonCircleOutline /> : {book.author}
              </p>
            </div>
            <hr className="w-full" />
            <div className="flex justify-evenly items-center gap-2 p-2">
              <IoMdEye
                className="text-2xl text-blue-700"
                onClick={() => setShowModel(true)}
              />
              <Link to={`/books/details/${book._id}`}>
                <IoInformationCircleOutline className="text-2xl text-green-700" />
              </Link>
              <Link to={`/books/update/${book._id}`}>
                <LuPencilLine className="text-2xl text-orange-400" />
              </Link>
              <Link to={`/books/delete/${book._id}`}>
                <MdDeleteOutline className="text-2xl text-red-600" />
              </Link>
            </div>
            {showModel && (
              <BookModal book={book} onClose={() => setShowModel(false)} />
            )}
          </div>
        ))}
    </div>
  );
}

export default BookCard;

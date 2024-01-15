import { AiOutlineClose } from "react-icons/ai";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaBookOpen } from "react-icons/fa";
function BookModal({ book, onClose }) {
  return (
    <div
      className="fixed bg-transparent bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center "
      onClick={onClose}>
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative">
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <div className="p-3 text-black space-y-5">
          <div className="bg-pink-400 w-fit rounded-lg px-2 align-right text-white ">
            {book.publishYear}
          </div>
          <p className="flex justify-start items-center gap-8">
            <FaBookOpen /> : {book.title}
          </p>
          <p className="flex justify-start items-center gap-8">
            <IoPersonCircleOutline /> : {book.author}
          </p>
          <div className="border border-black "></div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
            nulla impedit optio sed quia quas deleniti saepe velit totam
            officiis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BookModal;

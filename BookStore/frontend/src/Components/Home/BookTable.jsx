import { MdDeleteOutline } from "react-icons/md";
import { IoInformationCircleOutline } from "react-icons/io5";
import { LuPencilLine } from "react-icons/lu";
import { Link } from "react-router-dom";
function BookTable({ books }) {
  return (
    <table className="w-[90%] border-separate border-spacing-2 mx-4 text-white text-xl">
      <thead>
        <tr>
          <th className="hover:text-black border border-black rounded-lg">
            No.
          </th>
          <th className="hover:text-black border border-black rounded-lg">
            Title
          </th>
          <th className="hover:text-black border border-black rounded-lg max-md:hidden">
            Author
          </th>
          <th className="hover:text-black border border-black rounded-lg max-md:hidden">
            Publish Year
          </th>
          <th className="hover:text-black border border-black rounded-lg">
            Operations
          </th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id}>
            <td className="border border-black rounded-lg text-center">
              {index + 1}
            </td>
            <td className="border border-black rounded-lg text-center">
              {book.title}
            </td>
            <td className="border border-black rounded-lg text-center max-md:hidden">
              {book.author}
            </td>
            <td className="border border-black rounded-lg text-center max-md:hidden">
              {book.publishYear}
            </td>
            <td className="border border-black rounded-lg text-center flex justify-center gap-x-4 items-center">
              <Link to={`/books/details/${book._id}`}>
                <IoInformationCircleOutline className="text-2xl text-green-700" />
              </Link>
              <Link to={`/books/update/${book._id}`}>
                <LuPencilLine className="text-2xl text-orange-400" />
              </Link>
              <Link to={`/books/delete/${book._id}`}>
                <MdDeleteOutline className="text-2xl text-red-600" />
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BookTable;

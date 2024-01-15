import { Routes, Route } from "react-router-dom";
import {
  Home,
  UpdateBook,
  DeleteBook,
  CreateBook,
  ShowBook,
} from "./pages/index";
function App() {
  return (
    <div className="font-mono">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/create" element={<CreateBook />} />
        <Route path="/books/delete/:id" element={<DeleteBook />} />
        <Route path="/books/update/:id" element={<UpdateBook />} />
        <Route path="/books/details/:id" element={<ShowBook />} />
      </Routes>
    </div>
  );
}

export default App;

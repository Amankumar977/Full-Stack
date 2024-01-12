import React from "react";
import service from "../Appwrite/appConfig";
import { Link } from "react-router-dom";
function PostCard({ $id, title, featuredImage }) {
  return (
    <div>
      <Link to={`/post/${$id}`}>
        <div className="w-full bg-gray-100 rounded-full p-4">
          <div className="w-full justify-center mb-4">
            <img
              src={service.previewFile(featuredImage)}
              alt={title}
              className="rounded-xl"
            />
          </div>
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
      </Link>
    </div>
  );
}

export default PostCard;

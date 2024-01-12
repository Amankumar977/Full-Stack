import React, { useEffect, useState } from "react";
import service from "../Appwrite/appConfig";
import { PostCard, Container } from "../index";
function AllPost() {
  const [post, setPost] = useState([]);
  useEffect(() => {}, []);
  service.listPost([]).then((posts) => {
    if (posts) {
      setPost(posts.documents);
    }
  });
  return (
    <div className="w-full">
      <Container>
        <div className="flex flex-wrap">
          {post.map((post) => (
            <div key={post.$id}>
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPost;

import React, { useEffect, useState } from "react";
import { Container, PostForm } from "../index";
import service from "../Appwrite/appConfig";
import { useNavigate, useParams } from "react-router-dom";
function EditPost() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (slug) {
      service.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        }
      });
    }
  }, [navigate, slug]);
  return post ? (
    <Container>
      <PostForm post={post} />
    </Container>
  ) : null;
}

export default EditPost;

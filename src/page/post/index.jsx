import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../../api";

const Post = () => {
  const [post, setPost] = useState();
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    getPost(id)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div style={{ marginTop: 20 }}>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
    </div>
  );
};

export default Post;

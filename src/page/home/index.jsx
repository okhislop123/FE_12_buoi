import React, { useEffect, useState } from "react";
import { getPosts } from "../../api";
import { Card, Col, Row } from "antd";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getPosts()
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Row gutter={16}>
        {posts.map((post) => {
          return (
            <Col key={post.id} className="gutter-row" span={6}>
              <Card
                onClick={() => navigate(`/post/${post.id}`)}
                style={{ margin: "20px 0" }}
              >
                {post.title}
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Home;

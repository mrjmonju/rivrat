import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SingleComplaints() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/sikayetlerData.json")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div className="mt-10">
      {posts.map((post) => (
        <div className="post-container">
          <div className="flex mb-3">
            <Link to="/user-all-complaints">
              <img src={post.img} className="post-img" alt="" />
            </Link>
            <div>
              <div className="flex">
                <Link to="/user-all-complaints">
                  <h5 className="mr-3 post-owner text-lg font-semibold">
                    {post.name}
                  </h5>
                </Link>
                <div className="flex items-start">
                  <img src="./images/reply.svg" className="pt-2 pr-2" alt="" />
                  <span className="post-from">{post.from}</span>
                </div>
              </div>
              <p className="post-time">{post.time}</p>
            </div>
          </div>
          <h2 className="post-title text-3xl">{post.title}</h2>
          <h5 className="post-description">
            {post.description.slice(0, 260)}
            <span>{post.description.length > 250 ? "..." : ""}</span>
          </h5>
          {post.description.length > 150 ? (
            <a href="#readmore" className="post-read-more">
              <Link to="/complaint-details">Read more</Link>
            </a>
          ) : (
            ""
          )}
          <br /> <br />
          <hr />
          <div className="flex justify-between post-like-comment mt-5">
            <h5>
              <i class="fa-regular fa-thumbs-up"></i>
              support
            </h5>
            <h5>
              <i class="fa-regular fa-comment"></i>
              Comment
            </h5>
            <h5>
              <i class="fa-regular fa-bookmark"></i>
              Save
            </h5>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SingleComplaints;

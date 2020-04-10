import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import spinner from "../spinner.gif";

const Articles = ({ posts }) => {
  return (
    <MainContainer>
      {!posts.length ? (
        <img src={spinner} alt="loading" />
      ) : (
        posts.map((article, key) => (
          <div className="container" key={key}>
            <Link
              to={{
                pathname: `/article/${article._id}`,
              }}
            >
              <h2>{article.title}</h2>
            </Link>
            <p>{article.article}</p>
            <span className="badge badge-secondary p-2">
              {article.authorname}
            </span>
            <div className="row my-4">
              <div className="col-sm-2">
                <Link
                  to={{
                    pathname: `/update/${article._id}`,
                  }}
                  className="btn btn-outline-success"
                >
                  Edit Article
                </Link>
              </div>
              <div className="col-sm-2">
                <button className="btn btn-outline-danger" to="#">
                  Delete Article
                </button>
              </div>
            </div>
            <hr />
          </div>
        ))
      )}
    </MainContainer>
  );
};

export default Articles;

//MAIN CONTAINER
const MainContainer = styled.div`
  margin: 7rem 0;
  img {
    width: 5rem;
    display: block;
    margin: auto;
  }
`;

import React from "react";
import styled from "styled-components";

const AddArticle = () => {
  return (
    <AddArticleContainer>
      <div className="container">
        <h1>Add New Article</h1>
        <form>
          <div className="form-group">
            <label htmlFor="authorname">Author Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Author Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" placeholder="Title" />
          </div>
          <div class="form-group">
            <label htmlFor="article">Article</label>
            <textarea class="form-control" rows="4"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Post Article
          </button>
        </form>
      </div>
    </AddArticleContainer>
  );
};

export default AddArticle;

// MAIN CONTAINER
const AddArticleContainer = styled.div`
  margin: 3rem auto;
  padding: 4rem;
  width: 31.25rem;

  h1 {
    font-weight: 900;
    color: var(--dark-green);
  }

  .btn-primary {
    margin-top: 2rem;
    background: var(--dark-green);
    border: none;
    &:hover {
      background: var(--light-green);
    }
  }
`;

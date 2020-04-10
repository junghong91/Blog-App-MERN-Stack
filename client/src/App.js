import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/layouts/Header";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Articles from "./components/Articles";
import Article from "./components/Article";
import AddArticle from "./components/layouts/AddArticle";
import EditArticle from "./components/layouts/EditArticle";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("/articles")
      .then((res) => setPosts(res.data))
      .catch((error) => console.log(error));
  });
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Route exact path="/" render={() => <Articles posts={posts} />} />
      <Route path="/add-article" component={AddArticle} />
      <Route path="/article/:id" render={(props) => <Article {...props} />} />
      <Route
        path="/update/:id"
        render={(props) => <EditArticle {...props} />}
      />
      <Footer />
    </div>
  );
}

export default App;

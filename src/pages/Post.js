import React from "react";
import { motion } from "framer-motion"

import '../ghost-blog.css';
import Page from "../components/Page"
import ReactMarkdown from "react-markdown";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.1,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

class Post extends React.Component {
  constructor(props) {
    super(props);

    const id = this.props.id;

    this.state = {
      id,
      error: null,
      isLoaded: false,
      post: {}
    };
  }

  
  componentDidMount() {
    const id = this.props.id;
    fetch("https://api.github.com/repos/worksofliam/blog/issues/" + id)
      .then(res => res.json())
      .then(
        (response) => {
          this.setState({
            isLoaded: true,
            post: response
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { isLoaded, post, id } = this.state;

    return (
      <motion.div
        className="whitebg"
        variants={container}
        initial="hidden"
        animate={isLoaded === true ? "visible" : "hidden"}
        >
        <Page>
          <div className="hero-body">
            <div className="container has-text-centered">
              <a  href={"/?post=" + id}>
                <h1 className="title">
                  {post.title}
                </h1>
              </a>
              <h2 className="subtitle">
                Posted on {new Date(post.created_at).toLocaleDateString()}
              </h2>
            </div>
          </div>
        </Page>
        <div id="blogentry" className="container">
          <div class="columns">
            <div class="column"></div>
            <div class="column is-three-quarters">
              <ReactMarkdown source={post.body}></ReactMarkdown>
            </div>
            <div class="column"></div>
          </div>
        </div>
      </motion.div>
    );
  }
}

export default Post;
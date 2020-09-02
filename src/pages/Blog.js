import React from "react";
import { motion } from "framer-motion"

import '../ghost-blog.css';
import Page from "../components/Page"
import Entry from "../components/Entry";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      blogs: []
    };
  }

  
  componentDidMount() {
    fetch("https://api.github.com/repos/worksofliam/blog/issues")
      .then(res => res.json())
      .then(
        (response) => {
          this.setState({
            isLoaded: true,
            blogs: response
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
    const { error, isLoaded, blogs } = this.state;

    return (
      <Page>
        <div className="blog-posts">
          <div className="container">
            {isLoaded ?
              <motion.div
                  className="columns is-multiline"
                  variants={container}
                  initial="hidden"
                  animate={isLoaded ? "visible" : "hidden"}>

                {blogs.map((entry, i) => (
                  <motion.div className="column post is-6" key={i} variants={item}>
                    <Entry onPostClick={this.props.onPostClick} id={entry.number} title={entry.title} excerpt={entry.body.substr(0, 120) + '...'} />
                  </motion.div>
                ))}
              </motion.div>
            :
              null
            }
            
          </div>
        </div>
      </Page>
    );
    
  }
}
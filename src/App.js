import React from "react";
import { motion, AnimatePresence } from "framer-motion"

import './ghost-blog.css';

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Post from "./pages/Post";
import Work from "./pages/Work";

function setBlogURL(id) {
  var params = new URLSearchParams(window.location.search);
  params.set('post', id);
  var newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + params.toString();
  window.history.pushState({path:newUrl},'',newUrl);
}

function resetURL() {
  var newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
  window.history.pushState({path:newUrl},'',newUrl);
}

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      page: 'home',
      entryID: 0
    };

    const entryID = new URLSearchParams(window.location.search).get("post");

    if (entryID) {
      this.state = {
        page: 'post',
        entryID
      }
    }
  }

  render() {
    console.log('props:', this.props);
    const {page, entryID} = this.state;

    return (
      <div>
        <section class="blackbg is-medium">
          <div class="blackbg-head">
            <div class="container">
              <nav class="navbar" role="navigation" aria-label="main navigation">

                <div id="navbarBasicExample" class="navbar-menu">
                  <div class="navbar-start">
                    <a onClick={() => {
                      resetURL();
                      this.setState({
                        page: 'home'
                      });
                    }} className="navbar-item">Works Of Barry</a>

                    <a onClick={() => {
                      resetURL();
                      this.setState({
                        page: 'blog'
                      });
                    }} className="navbar-item">Blog</a>

                    <a onClick={() => {
                      resetURL();
                      this.setState({
                        page: 'work'
                      });
                    }} className="navbar-item">Work</a>
                  </div>

                  <div class="navbar-end">
                    <div class="navbar-item">
                      <a href="https://twitter.com/notesofbarry">
                        <i class="fab fa-twitter"></i>
                      </a>
                      <a href="https://github.com/worksofliam">
                        <i class="fab fa-github"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </section>
        
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <AnimatePresence initial={false} exitBeforeEnter>
          {page === "home" ? (
            <motion.div
              key="home"
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}>
              <Home />
            </motion.div>
          ) : null}

          {page === "work" ? (
            <motion.div
              key="work"
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}>
              <Work />
            </motion.div>
          ) : null}

          {page === "blog" ? (
            <motion.div
              key="blog"
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}>
              <Blog onPostClick={(postID) => {
                setBlogURL(postID);
                this.setState({
                  page: 'post',
                  entryID: postID
                })
              }}/>
            </motion.div>
          ) : null}

          {page === "post" ? (
            <motion.div
              key={entryID}
              initial={{ opacity: 0, y: 300 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -300 }}>
              <Post id={entryID} />
            </motion.div>
          ) : null}
          
        </AnimatePresence>
      </div>
    );
  }
}
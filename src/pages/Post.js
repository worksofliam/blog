import React from "react";

import '../ghost-blog.css';
import Page from "../components/Page"
import ReactMarkdown from "react-markdown";

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

    if (window.history.pushState) {
      var params = new URLSearchParams(window.location.search);
      params.set('post', id);
      var newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + params.toString();
      window.history.pushState({path:newUrl},'',newUrl);
    }
  }

  render() {
    const { error, isLoaded, post, id } = this.state;

    if (isLoaded) {
      return (
        <div className="whitebg">
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
        </div>
      );
    } else {
      return (
        <Page>
        <div className="blog-posts">
          <div className="container has-text-centered">
            Loading blog.
          </div>
        </div>
      </Page>
      )
    }
  }
}

export default Post;
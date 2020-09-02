import React from "react";

export default class Entry extends React.Component {
  render() {
    const {
      id,
      title,
      excerpt
    } = this.props;

    return (
      <article className="columns is-multiline">
        {/* <div class="column is-12 post-img">
          <img src="https://cdn.emk.dev/templates/post-img.png" alt="Featured Image" />
        </div> */}
        <div className="column is-12 featured-content ">
          <h1 className="title post-title">{title}</h1>
          <p className="post-excerpt">{excerpt}</p>
          <br />
          <a href="#" onClick={() => {
            this.props.onPostClick(this.props.id);
          }} className="button is-light">Read More</a>
        </div>
      </article>
    );
  }
}
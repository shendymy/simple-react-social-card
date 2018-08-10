import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class SocialCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      date: "",
      message: "",
      url: "",
      likes: 0,
      hasLiked: false
    };
    this.incrementLike = this.incrementLike.bind(this);
  }
  componentDidMount() {
    this.setState({
      username: this.props.card.username,
      date: this.props.card.date,
      message: this.props.card.message,
      url: this.props.card.url,
      likes: this.props.card.likes
    });
  }
  incrementLike() {
    this.setState({
      likes: this.state.likes + 1,
      hasLiked: true
    });
  }
  render() {
    const buttonOne = (
      <button
        className="like btn btn-block btn-primary"
        onClick={this.incrementLike}
      >
        <i class="fa fa-thumbs-up"> Like {this.state.likes}</i>
      </button>
    );
    const buttonTwo = (
      <button className="like btn btn-block btn-primary">
        <i class="fa fa-thumbs-up"> Like {this.state.likes}</i>
      </button>
    );
    return (
      <div className="card">
        <div className="row">
          <p className="userName col-xs-8">{this.state.username}</p>
          <p className="date col-xs-4">{this.state.date}</p>
        </div>
        <p>{this.state.message}</p>
        <Embedded url={this.state.url} />
        <br />
        <div className="row">
          <p className="col-xs-4">
            {this.state.hasLiked ? buttonTwo : buttonOne}
          </p>
        </div>
      </div>
    );
  }
}

class Embedded extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.url) {
      return (
        <div className="embedded">
          <p>
            <a href={this.props.url}>{this.props.url}</a>
          </p>
        </div>
      );
    } else {
      return null;
    }
  }
}

const testCards = [
  {
    username: "ReactDev",
    date: "Aug 10",
    message: "This is a simple Social Card implemented in React.",
    url: "www.example.com",
    likes: 98
  },
  {
    username: "AnotherDev",
    date: "Jan 17",
    message: "This one has no link.",
    url: "",
    likes: 34
  }
];
const rootElement = document.getElementById("root");
ReactDOM.render(<SocialCard card={testCards[0]} />, rootElement);

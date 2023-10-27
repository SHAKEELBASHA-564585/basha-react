import React from "react";
import { Component } from "react";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        location: "",
        avatar_url: "",
        bio: "",
      },
    };
    //console.log("constructor");
  }

  async componentDidMount() {
    console.log("componentDidMount");
    // best place for API calling
    const data = await fetch(
      "https://api.github.com/users/SHAKEELBASHA-564585"
    );
    const json = await data.json();
    // console.log(json);
    this.setState({
      userInfo: json,
    });
    // this.timerId = setInterval(() => {
    //   console.log("Basha1");
    // }, 1000);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    // clearInterval(this.timerId);
    console.log("ComponentWillUnmount");
  }

  render() {
    //console.log("render");
    const { name, bio, location, avatar_url } = this.state.userInfo;
    return (
      <div>
        <img src={avatar_url} />
        <h1>Name: {name}</h1>
        <h2>Bio: {bio}</h2>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}
export default Profile;

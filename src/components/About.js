import Profile from "./Profile";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    //console.log("Parent-Constructor");
  }
  componentDidMount() {
    //console.log("Parent-ComponentDidMount");
  }

  render() {
    //console.log("Parent-render");
    return (
      <div>
        <Profile name={"Basha"} />
      </div>
    );
  }
}
export default About;

/**
 * parent-constructor
 * parent-render
 * child-constructor
 * child-render
 * child-componentDidmount
 * parent-componentDidmount
 *
 *
 *
 *
 */

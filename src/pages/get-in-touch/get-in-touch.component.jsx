import React from "react";

import "./get-in-touch.styles.scss";

import FormInput from "../../components/form-input/form-input.component";
import MessageBox from "../../components/message-box/message-box.component";
import { CustomButtonFilled } from "../../components/custom-button/custom-button.component";

class GetInTouch extends React.Component {
  state = {
    name: "",
    email: "",
    company: "",
    address: "",
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(name, value);
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="getintouch">
        <div className="clientdetails">
          <FormInput handleChange={this.handleChange} label="name" />
          <FormInput handleChange={this.handleChange} label="email" />
          <FormInput handleChange={this.handleChange} label="company" />
        </div>
        <div className="message">
          {/* <FormInput handleChange={this.handleChange} label="message" /> */}
          <MessageBox rows="9" label="messagebox" />
          <CustomButtonFilled />
        </div>
      </div>
    );
  }
}

export default GetInTouch;
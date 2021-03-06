import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Styles/Auth.css";

// custom tools
import APIHandler from "../api/ApiHandler";
// import { gunzipSync } from "zlib";

export default class Signup extends Component {
  state = {
    firstName: "firstName",
    lastName: "lastName",
    email: "email@travelUp.com",
    password: "12345",
    avatar: ""
  };

  handleSubmit = async e => {
    e.preventDefault();

    const fd = new FormData();
    // create a form data (programatic form, to send the file as binary)
    fd.append("email", this.state.email);
    fd.append("password", this.state.password);
    fd.append("firstName", this.state.firstName);
    fd.append("lastName", this.state.lastName);
    fd.append("avatar", this.state.avatar);

    try {
      await APIHandler.post("/signup", fd);
      this.props.history.push("/itineraryplanner");
    } catch (err) {
      console.error(err);
    }
  };

  handleChange = e => {
    if (e.target.type !== "file")
      this.setState({ [e.target.name]: e.target.value });
  };

  handleImage = e => {
    // return;
    console.log(e.target.files[0]);

    this.setState({ avatar: e.target.files[0] }, () => {
      const reader = new FileReader();
      reader.onloadend = () => {
        // when the fileREader ends  ...
        const baseString = reader.result; // get the image as a base64 encoded string
        this.setState({ tmpAvatar: baseString }); // set the tmp avatar as an image source before upload
      };
      console.log(this.state.avatar);
      //reader.readAsDataURL(this.state.avatar); // read the file from the local disk
    });
  };

  render() {
    console.log(this.props);
    const { email, password, firstName, lastName } = this.state;
    return (
      <div className="sign-up">
        <form
          className="form"
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        >
          <h1 className="auth-title">Signup</h1>
          <label className="firstName" htmlFor="firstName">
            FirstName
          </label>
          <input
            className="input"
            id="firstName"
            type="text"
            name="firstName"
            defaultValue={firstName}
          />
          <label className="label" htmlFor="lastName">
            LastName
          </label>
          <input
            className="input"
            id="lastName"
            type="text"
            name="lastName"
            defaultValue={lastName}
          />
          <label className="label" htmlFor="email">
            email
          </label>
          <input
            className="input"
            id="email"
            type="email"
            name="email"
            defaultValue={email}
          />
          <label className="label" htmlFor="password">
            password
          </label>
          <input
            className="input"
            id="password"
            type="password"
            name="password"
            defaultValue={password}
          />
          <label className="label" htmlFor="avatar">
            avatar
          </label>
          <input
            className="input"
            id="avatar"
            type="file"
            name="avatar"
            onChange={this.handleImage}
          />

          <button className="submit">ok</button>
        </form>
        <p className="parag">
          Already a member ? please{" "}
          <Link to="/signin" className="link">
            signin
          </Link>
        </p>
      </div>
    );
  }
}

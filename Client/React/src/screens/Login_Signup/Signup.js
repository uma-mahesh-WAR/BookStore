import React from "react";
import { Field, reduxForm } from "redux-form";
import loginImg from "./login.svg";
import axios from "axios";
import "./style.scss";

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <div>
    {touched &&
      ((error && <span className="text-danger">{error}</span>) ||
        (warning && <span>{warning}</span>))}
    <input
      {...input}
      placeholder={label}
      type={type}
      className="form-control"
    />
  </div>
);

export class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      name: "",
      emailId: "",
      password: "",
      session: false,
      message: "",
    };
  }
  render() {
    const { pristine, submitting, invalid } = this.props;
    const submitSignup = async (e) => {
      e.preventDefault();
      let a = {
        userId: this.state.userId,
        name: this.state.name,
        emailId: this.state.emailId,
        password: this.state.password,
      };
      await axios
        .post("http://localhost:8081/signup", a)
        .then((res) => {
          this.setState({ session: res.data.status });
          this.setState({ message: res.data.message });
        })
        .catch((e) => {
          this.setState({ message: e.message });
        });
    };
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">SignUp</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="IMG" />
          </div>
          <form className="form" onSubmit={submitSignup}>
            <div className="form-group">
              <Field
                name="userId"
                component={renderField}
                label="User Id"
                onChange={(e) => {
                  this.setState({ userId: e.target.value });
                }}
              />
            </div>
            <div className="form-group">
              <Field
                name="name"
                component={renderField}
                label="Name"
                onChange={(e) => {
                  this.setState({ name: e.target.value });
                }}
              />
            </div>
            <div className="form-group">
              <Field
                name="emailId"
                component={renderField}
                label="Email Id"
                onChange={(e) => {
                  this.setState({ emailId: e.target.value });
                }}
              />
            </div>
            <div className="form-group">
              <Field
                name="password"
                type="password"
                component={renderField}
                label="Password"
                onChange={(e) => {
                  this.setState({ password: e.target.value });
                }}
              />
            </div>
            <div className="form-group">
              <button
                type="submit"
                style={{ margin: "10px 10px 0 0" }}
                className="btn btn-secondary"
                disabled={pristine || submitting || invalid}
              >
                SignUp
              </button>
            </div>
            <br />
            <p style={{ fontWeight: "999" }}>{this.state.message}</p>
          </form>
        </div>
      </div>
    );
  }
}

const validate = (values) => {
  const errors = {};
  if (!values.userId) {
    errors.userId = "Please enter the UserId.";
  } else if (!/^[A-Za-z0-9_-]{3,16}$/i.test(values.userId)) {
    errors.userId = "Accepts Alphabets, _, - & Min 3 to Max 16 Char.";
  }
  if (!values.name) {
    errors.name = "Please enter the Name.";
  }
  if (!values.emailId) {
    errors.emailId = "Please enter the Email Id.";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailId)
  ) {
    errors.emailId = "Enter correct Email Id(with @ and domain.)";
  }
  if (!values.password) {
    errors.password = "Please enter the Password.";
    // }else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d#?!@$%^&*-]{8,}$/i.test(values.password)) {
    //   errors.password = "Pasword must contain minimum eight characters, at least one letter and one number.";
  }
  return errors;
};

Signup = reduxForm({
  form: "umaMAHESH",
  validate,
})(Signup);

export default Signup;

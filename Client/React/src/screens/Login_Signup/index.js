import React from "react";
import "./index.scss";
import Login from "./Login";
import Signup from "./Signup";
import Layout from "../../components/Layout";

class LISU extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true,
    };
  }

  componentDidMount() {
    //Add .right by default
    this.rightSide.classList.add("right");
  }

  changeState() {
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState((prevState) => ({
      isLogginActive: !prevState.isLogginActive,
    }));
  }

  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "SignUp" : "LogIn";
    const currentActive = isLogginActive ? "login" : "signup";
    return (
      <Layout link="http://localhost:3000/login" methd="Login">
        <div style={{ height: "86.5vh", margin: "auto" }}>
          <div className="cont">
            <div className="LISU">
              <div className="login">
                <div
                  className="container"
                  ref={(ref) => (this.container = ref)}
                >
                  {isLogginActive && (
                    <Login containerRef={(ref) => (this.current = ref)} />
                  )}
                  {!isLogginActive && (
                    <Signup containerRef={(ref) => (this.current = ref)} />
                  )}
                </div>
                <RightSide
                  current={current}
                  currentActive={currentActive}
                  containerRef={(ref) => (this.rightSide = ref)}
                  onClick={this.changeState.bind(this)}
                />
              </div>
            </div>
            <Button current={current} onClick={this.changeState.bind(this)} />
          </div>
        </div>
      </Layout>
    );
  }
}

const RightSide = (props) => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

const Button = (props) => {
  if (props.current === "SignUp") {
    return (
      <div className="butt" style={{ marginTop: "20px" }}>
        <button
          onClick={props.onClick}
          style={{
            cursor: "pointer",
            backgroundColor: "white",
            border: "transparent",
          }}
        >
          Not already a user? SignUp
        </button>
      </div>
    );
  } else {
    return (
      <div className="butt" style={{ marginTop: "20px" }}>
        <button
          onClick={props.onClick}
          style={{
            cursor: "pointer",
            backgroundColor: "white",
            border: "transparent",
          }}
        >
          Already have an account? LogIn
        </button>
      </div>
    );
  }
};

export default LISU;

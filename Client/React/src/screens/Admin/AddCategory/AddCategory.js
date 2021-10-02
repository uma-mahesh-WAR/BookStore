import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class AddCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      status: false,
      message: "",
    };
  }
  render() {
    const submitBook = async (e) => {
      e.preventDefault();
      await axios
        .post("http://localhost:8081/category", this.state, {
          withCredentials: true,
        })
        .then((res) => {
          this.setState({ status: res.data.status });
          this.setState({ message: res.data.message });
        })
        .catch((e) => {
          this.setState({ status: false });
          this.setState({ message: e.message });
          console.log(e);
        });
      if (this.state.status) {
        this.props.history.push("/addCategorySuccess");
      }
    };
    return (
      <div>
        <form className="form" onSubmit={submitBook}>
          <div className="form-group">
            <input
              type="text"
              name="category"
              placeholder="Category"
              required
              onChange={(e) => {
                this.setState({ category: e.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <button
              type="submit"
              style={{ margin: "10px 10px 0 0" }}
              className="btn btn-secondary"
            >
              ADD
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(AddCategory);

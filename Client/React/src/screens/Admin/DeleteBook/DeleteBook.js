import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class DeleteBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isbn: "",
      status: false,
      message: "",
    };
  }
  render() {
    const deleteBook = async (e) => {
      e.preventDefault();
      await axios
        .delete("http://localhost:8081/books", {
          withCredentials: true,
          params: {
            isbn: this.state.isbn,
          },
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
        this.props.history.push("/deleteBookSuccess");
      }
    };
    return (
      <div>
        <form
          className="form"
          onSubmit={(e) => {
            deleteBook(e);
          }}
        >
          <div className="form-group">
            <input
              type="text"
              name="isbn"
              placeholder="ISBN of Book"
              required
              onChange={(e) => {
                this.setState({ isbn: e.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <button
              type="submit"
              style={{ margin: "10px 10px 0 0" }}
              className="btn btn-secondary"
            >
              Delete
            </button>
          </div>
          <p>{this.state.message}</p>
        </form>
      </div>
    );
  }
}

export default withRouter(DeleteBook);

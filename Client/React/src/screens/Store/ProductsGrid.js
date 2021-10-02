import React from "react";
import ProductItem from "./ProductItem";
import styles from "./ProductsGrid.module.scss";
import axios from "axios";

class ProductsGrid extends React.Component {
  state = {
    books: {
      data: [],
    },
    author: "",
    category: "",
    search: "",
    authors: [],
    categories: [],
  };
  async componentDidMount() {
    const a = await axios.get("http://localhost:8081/books", {
      withCredentials: true,
      params: {
        author: this.state.author,
        category: this.state.category,
        search: this.state.search,
      },
    });
    this.setState({ books: a });
    await axios
      .get("http://localhost:8081/author", {
        withCredentials: true,
      })
      .then((res) => {
        this.setState({ authors: res.data });
      })
      .catch((e) => {
        this.setState({ message: e.message });
        console.log(e);
      });
    await axios
      .get("http://localhost:8081/category", {
        withCredentials: true,
      })
      .then((res) => {
        this.setState({ categories: res.data });
      })
      .catch((e) => {
        this.setState({ message: e.message });
        console.log(e);
      });
  }
  async componentDidUpdate(prevProps, prevState) {
    // console.log(this.state);
    if (
      prevState.author !== this.state.author ||
      prevState.category !== this.state.category ||
      prevState.search !== this.state.search
    ) {
      const a = await axios.get("http://localhost:8081/books", {
        withCredentials: true,
        params: {
          author: this.state.author,
          category: this.state.category,
          search: this.state.search,
        },
      });
      this.setState({ books: a });
    }
  }
  render() {
    return (
      <div className={styles.p__container}>
        <div className="row">
          <div
            className="col-sm-9"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            <div className="py-3" style={{}}>
              <p style={{ marginBottom: "0" }}>Filter:</p>
            </div>
            <div className="form-group">
              <select
                required
                value={this.state.author}
                onChange={(e) => {
                  this.setState({ search: "", author: e.target.value });
                }}
                className="form-control"
                style={{
                  marginTop: "6px",
                  padding: "2px",
                  height: "37px",
                  width: "288px",
                  backgroundColor: "#f3f3f3",
                  borderRadius: "4px",
                  transition: "all 250ms ease-in-out",
                }}
              >
                <option
                  style={{ backgroundColor: "#b1b6bb" }}
                  value=""
                  disabled
                >
                  Select Author
                </option>
                {this.state.authors.map((author,index) => (
                  <option key={index} value={author}>
                    {author}
                  </option>
                ))}
                {/* <option
                  style={{ backgroundColor: "#b1b6bb" }}
                  value=""
                >
                  Clear
                </option> */}
              </select>
            </div>
            <div className="form-group" style={{ marginLeft: "45px" }}>
              <select
                required
                value={this.state.category}
                onChange={(e) => {
                  this.setState({ search: "", category: e.target.value });
                }}
                className="form-control"
                style={{
                  marginTop: "6px",
                  padding: "2px",
                  height: "37px",
                  width: "288px",
                  backgroundColor: "#f3f3f3",
                  borderRadius: "4px",
                }}
              >
                <option
                  style={{ backgroundColor: "#b1b6bb" }}
                  value=""
                  disabled
                >
                  Select Category
                </option>
                {this.state.categories.map((category,index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
                {/* <option
                  style={{ backgroundColor: "#b1b6bb" }}
                  value="noCategory"
                  disabled
                >
                  Others? Add Category from Header...
                </option> */}
              </select>
            </div>
            <div className="form-group py-2">
              <button
                className="btn btn-outline-primary btn-sm"
                style={{ padding: "5px 10px 8px", marginLeft: "40px" }}
                onClick={(e) => {
                  this.setState({ author: "", category: "" });
                }}
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>
        <div
          className="row"
          style={{
            display: "flex",
            margin: "0 5px",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div className="py-3">{this.state.books.data.length} Books</div>
          </div>
          <form
            style={{ display: "flex", justifyContent: "flex-end" }}
            onSubmit={(e) => {}}
          >
            <input
              value={this.state.search}
              type="text"
              name="search"
              placeholder="Search book"
              className="form-control my-1"
              onChange={(e) => {
                e.preventDefault();
                this.setState({
                  category: "",
                  author: "",
                  search: e.target.value,
                });
              }}
            />
            {/* <button
              type="submit"
              className="ml-2 btn btn-outline-primary btn-sm"
              style={{ alignSelf: "center" }}
              onClick={(e) => {
                e.preventDefault();
                this.setState({ search: searchText });
              }}
            >
              Search
            </button>
            <button
              type="submit"
              className="ml-2 btn btn-outline-primary btn-sm"
              style={{ alignSelf: "center" }}
              onClick={(e) => {
                e.preventDefault();
                this.setState({ search: "" });
              }}
            >
              Clear
            </button> */}
          </form>
        </div>
        <div className={styles.p__grid}>
          {this.state.books.data.map((product) => (
            <ProductItem key={product._id} product={product} page="store" />
          ))}
        </div>
      </div>
    );
  }
}

export default ProductsGrid;

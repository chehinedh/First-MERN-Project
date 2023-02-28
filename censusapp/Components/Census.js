import React, { Component } from "react";

class Census extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      censuses: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:8081/api/census")
      .then((res) => res.json())
      .then(
        (data) => {
          this.setState({
            isLoaded: true,
            error: null,
            censuses: data,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, censuses } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h1>Census</h1>
          <ul>
            {censuses.map((c) => (
              <li>
                {c.city}::{c.census}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default Census;

import React from "react";
import Takeaways from "../takeaways/Takeaways";

class SearchBar extends React.Component {
  state = { term: "Hello" };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.searchPhoto(this.state.term);
  };

  render() {
    return (
      <div className="w-full pt-16 pl-10 pr-10 pb-16 rounded border">
        <h1 className="text-2xl font-bold ">Search for Images</h1>
        <form className="w-full" onSubmit={this.onFormSubmit}>
          <input
            type="text"
            className="w-full mt-3 p-1 rounded border"
            onChange={(e) => this.setState({ term: e.target.value })}
          ></input>
        </form>
        <p>Start by typing anything then press "enter key"</p>
      </div>
    );
  }
}

export default SearchBar;

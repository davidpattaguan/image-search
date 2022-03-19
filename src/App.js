import React from "react";
import "./App.css";
import ImageList from "./components/imagelist/ImageList";
import SearchBar from "./components/searchbar/SearchBar";
import unsplash from "./api/unsplash";
import Navbar from "./components/navbar/Navbar";
import Takeaways from "./components/takeaways/Takeaways";

class App extends React.Component {
  state = { photos: [] };

  searchPhoto = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term, per_page: 30 },
    });
    console.log(response);
    this.setState({ photos: response.data.results });
  };

  render() {
    return (
      <>
        <Navbar />
        <div className="container mx-auto  px-4 mt-5 mb-5">
          <Takeaways />
          <SearchBar searchPhoto={this.searchPhoto} />

          <ImageList images={this.state.photos} />
        </div>
      </>
    );
  }
}

export default App;

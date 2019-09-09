import React from "react";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import VideoList from "./Components/VideoList";
import VideoDetail from "./Components/VideoDetail";
import "./App.css";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: {},
      selectedVideo: undefined,
    }
  }
  handleSelectedVideo = (selected) => {
    this.setState({
      selectedVideo: selected,
    })
  }

  youtubeSearch = (term) =>{
    console.log("app search",term);
    const ApiKEY = "AIzaSyA98OQR_2AN-jgZX7fKWEmFjEpX5XikxRM";
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${term}&type=video&key=${ApiKEY}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          videos: data
        })
      })
 }

  render() {
    return (
      <div>
        <Header />
        <SearchBar search={this.youtubeSearch}/>
        <div className="wrapper">
          <VideoDetail info={this.state.selectedVideo} />
          <VideoList videos={this.state.videos} selVid={this.handleSelectedVideo} />
        </div>
      </div>
    );
  }
}

export default App;

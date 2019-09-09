import React from "react";
import Search from "./search.png";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ""
        };
    }

    handleChange = (e) => {
        this.setState({
            term: e.target.value
        });
    }
    videoSearch = () => {
        this.props.search(this.state.term);
        console.log(this.state.term);
    }

    render() {
        return (
            <div className="search">
                <input type="text" className="search-input"  placeholder="Search..." value={this.state.term} onChange={this.handleChange}/>
                <button onClick={this.videoSearch} ><img src={Search} className="search-btn" alt="search"  /></button>
            </div>
        )
    }
}

export default SearchBar;

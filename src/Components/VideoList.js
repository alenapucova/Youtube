import React from "react";
import VideoItem from "./VideoItem";

class VideoList extends React.Component {

    render() {
        const videos = this.props.videos.items || [];
        var videoItems = [];
        for (var i = 0; i < videos.length; i++) {
            videoItems.push(
                <div >
                    <VideoItem key={i} item={videos[i]} selectVideo={this.props.selVid} />
                </div>
            )
        }
        return (
            <div className="video-List">
                {videoItems}
            </div>
        )
    }
}
export default VideoList
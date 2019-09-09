import React from "react";

class VideoDetail extends React.Component {
    render() {
        if (this.props.info) {
            return (
                <div className="single-video">
                    <h2>Selected video: </h2>
                    <div className="video-media">
                        <div className="video-body">
                            <div className="media-heading"><h3>{this.props.info.snippet.channelTitle}</h3></div>
                            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${this.props.info.id.videoId}`} title="Youtube Video" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                            <div><h6 className="description">Description: </h6>{this.props.info.snippet.description}</div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return <div>

            </div>;
        }

    }
}
export default VideoDetail
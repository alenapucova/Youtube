import React from "react";

const VideoItem = (props) => {


    const video = props.item;

    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li className="list-group-item" onClick={() => props.selectVideo(video)}>
            <div className="video-list-media">
                <div className="media-body">
                    <div className="media-heading"><h6>{video.snippet.channelTitle}</h6></div>
                    <div className="detail-wrapper">
                        <img src={imageUrl} alt="thumbnail" />
                        <div className="video-description"><h6>Description: </h6>{video.snippet.description}</div>
                    </div>
                </div>
            </div>
        </li>
    )

}
export default VideoItem
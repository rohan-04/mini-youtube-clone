import React from "react";

import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";


class App extends React.Component {
    state = { videos: [], selectedVideo: null }

    componentDidMount() {
        // default search
        this.onTermSubmit("Best of the Year 2020 | People Are Awesome")
    }

    onTermSubmit = async (term) => {
        const response = await youtube.get("/search", {
            params: {
                q: term
            }
        });

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <br />
                <div className="ui stackable grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList
                                onVideoSelect={this.onVideoSelect}
                                videos={this.state.videos}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default App;
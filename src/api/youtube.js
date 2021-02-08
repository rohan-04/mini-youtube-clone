import axios from "axios";

const KEY = "AIzaSyB80jzM07TlEvAYZHxc_p3BQhwF3k26Qxw";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});

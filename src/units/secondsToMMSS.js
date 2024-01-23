import moment from "moment";


export default function s (seconds) {
    moment.utc(seconds * 1000).format("mm:ss");
}

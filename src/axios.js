import axios from "axios";

const instance = axios.create({
    baseURL: 'https://reminders-task.hiring.durbin.live'
});

export default instance;
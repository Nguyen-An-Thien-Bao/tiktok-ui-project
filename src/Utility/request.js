import axios from 'axios';

const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

const get = async (path, config = {}) => {
    const response = await request.get(path, config);
    return response.data;
};

export { get };
export default request;

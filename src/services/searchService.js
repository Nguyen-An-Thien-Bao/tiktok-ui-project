import request from '../Utility/request';

async function search(q, type = 'less') {
    const res = await request.get('users/search', {
        params: {
            q,
            type,
        },
    });
    return res.data;
}
export default search;

import axios from 'axios';

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

type GetPostsResponse = {
    data: Post[];
};

export async function getPosts() {
    const {data} = await axios.get<GetPostsResponse>(
        'https://jsonplaceholder.typicode.com/posts',
        {
            params: {
                _limit: 10
            },
            headers: {
                Accept: 'application/json',
            },
        },
    );
    return data;
}
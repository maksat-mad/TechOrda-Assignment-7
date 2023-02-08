import axios from 'axios';

type Comment = {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
};

type GetCommentsResponse = {
    data: Comment[];
};

export async function getComments(postId:string) {
    const {data} = await axios.get<GetCommentsResponse>(
        'https://jsonplaceholder.typicode.com/comments?postId=' + postId,
        {
            headers: {
                Accept: 'application/json',
            },
        },
    );
    return data;
}
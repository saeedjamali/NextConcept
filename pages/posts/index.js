import Link from 'next/link';
import React from 'react'

function Post({ data }) {
    console.log(data)
    return (
        <div>
            <ul>{
                data.map((post) =>
                    <li>
                        <Link href={`/posts/${post.id}?userid=${post.userId}`} >{post.id} : {post.title}</Link>

                        <hr />
                    </li>)
            }
            </ul>
        </div >
    )
}

export default Post



export async function getServerSideProps(context) {
    const { params, req: request, res: response } = context;
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return {
        props: { data }
    }
}
import React from 'react'

function SinglePost({ post }) {
  console.log(post)
  return (
    <div>
      <span>User {post.userId} whit Id {post.id}-- {post.title}</span>
    </div>
  )
}

export default SinglePost


export async function getServerSideProps(context) {
  const { params, query } = context;

  console.log("Params : ", params);
  // Params :  { id: '3' }

  console.log("Query : ", query);
  // Query :  { id: '3', userid: '1' }
  const id = params.id;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  //? NotFound Page
  // if (res.status != 200)
  //   return {
  //     notFound: true
  //   }

  //? Redirect Page
  if (!Object.keys(data).length) {
    return {
      redirect: { destination: "/" }
    }
  }


  return {
    props: { post: data },

  }
}
import { useRouter } from 'next/router'
import React from 'react'


//* SSG Page

function User({ user }) {
    const router = useRouter();

    if (router.isFallback) return <div>Please wait... </div>
    //? تا زمانی که فچ دیتا کامل بشه این صفحه رو نشون میده 


    return (
        <div>Id is : {user.id}   / Title : {user.name}   / City is : {user.address.city}</div>
    )
}

export default User


export async function getStaticPaths() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await res.json();
    const paths = data.slice(0, 4).map((d) => { return { params: { id: String(d.id) } } })

    return {
        paths,
        fallback: true
    }
}



export async function getStaticProps(context) {
    const id = context.params.id;

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    // console.log(res)

    if (res.status != 200) {
        return {
            // notFound: true,
            //? ارجاع به صفحه خطا در صورت عدم شناسایی در سرور

            redirect: { destination: "/" }
            //? ارجاع به صفحه دلخواه در صورت بروز خطا
        }
    }
    const data = await res.json();
    return {
        props: {
            user: data || []
        },
        revalidate: 10  //? ISR PAGE

    }
}
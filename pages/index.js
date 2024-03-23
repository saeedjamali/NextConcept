import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ users }) {
  return (
    <>{
      users.map((u) =>
        <Link href={`/users/${u.id}`}> <h1> {u.id} : {u.name}</h1></Link>
      )
    }

    </>
  );
}


export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return {
    props: {
      users: data
    }
  }
}

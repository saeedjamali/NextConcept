import { useParams, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

function Todo() {
    const router = useSearchParams(); 
    console.log(router.get("id"));
    return (
        <div>hi</div>
    )
}

export default Todo
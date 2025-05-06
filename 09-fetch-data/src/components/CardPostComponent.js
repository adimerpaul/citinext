'use client'
export default function CardPostComponent({ post }) {
    return (
        <li key={post.id}>
            <h2>{post.id}.-{post.title}</h2>
            <p>{post.body}</p>
            <p>
                <button onClick={() => alert(post.title)}>
                    click me
                </button>
            </p>
        </li>
    )
}
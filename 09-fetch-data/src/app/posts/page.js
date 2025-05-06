import CardPostComponent from "@/components/CardPostComponent";

async function getPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return data;
}
export default async function Posts() {
    const posts = await getPosts();
    console.log(posts);
    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <CardPostComponent key={post.id} post={post} />
                ))}
            </ul>
        </div>
    )
}
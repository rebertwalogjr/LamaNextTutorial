import PostCard from "@/componets/postCard/postCard"
import styles from "./blog.module.css"
import {getBlogs} from "@/lib/blogs"

const getData = async () => {
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts") // cache the data
  //const res = await fetch("https://jsonplaceholder.typicode.com/posts", {cache:"no-store"}) // not cache the data
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {next:{revalidate:3600}}) // refresh data every 1 hour / 3600 seconds

  if(!res.ok) {
    throw new Error("Something went wrong")
  }

  return res.json()
}

interface Post {
  id: number,
  image : string,
  title: string,
  body: string,
  userId: number,
  publishedDate: string
}

const BlogPage = async () => {

  // const posts : Post[] = await getData()
  const posts : Post[] = await getBlogs();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
        <PostCard post={post}/>
      </div>
      ))}
    </div>
  )
}

export default BlogPage
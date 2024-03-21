"use client"

import Image from "next/image"
import styles from "./post.module.css"
import PostUser from "@/componets/postUser/postUser"
import { useEffect, useState } from "react"
import { getBlog } from "@/lib/blogs" 

// const getData = async (slug : number) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, {cache: "no-store"}) // cache the dataconst res = await fetch("https://jsonplaceholder.typicode.com/posts", {next:{revalidate:3600}}) // refresh data every 1 hour / 3600 seconds

//   if(!res.ok) {
//     throw new Error("Something went wrong")
//   }

//   return res.json()
// }

// interface Post {
//   id : number,
//   userId: number,
//   title: string,
//   body: string
// }

interface Blog {
  id: number,
  image : string,
  title: string,
  body: string,
  userId: number,
  publishedDate: string
}

const SinglePostPage = ({params} : {params : { slug: string }}) => {

  const {slug} = params;

  //const post : Post = await getData(parseInt(slug))

  const [blog, setBlog] = useState<Blog | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try{
        const blog = await getBlog(parseInt(slug))
        setBlog(blog)
      } catch (error){
        console.error('Error fetching blog: ', error)
      }
    }
    fetchData()
  }, [params])

  console.log(blog)

  return (
    <div className={styles.container}>
     <div className={styles.imgContainer}>
      {blog && blog.image &&
        <Image className={styles.img} src={`/${blog?.image}`} alt="" fill />
      }
     </div>
     <div className={styles.textContainer}>
      <h1 className={styles.title}>{blog?.title}</h1>
      <div className={styles.detail}>
        <PostUser userId={blog?.userId} />
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Published</span>
          <span className={styles.detailValue}>{blog?.publishedDate}</span>
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.desc}>{blog?.body}</p>
      </div>
     </div>
    </div>
  )
}

export default SinglePostPage
"use client"

import Image from 'next/image'
import { Suspense, useEffect, useState } from "react"
import styles from "./postUser.module.css"
import {getUser} from '@/lib/users'

// const getData = async (slug : number) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${slug}`) // cache the dataconst res = await fetch("https://jsonplaceholder.typicode.com/posts", {next:{revalidate:3600}}) // refresh data every 1 hour / 3600 seconds

//   if(!res.ok) {
//     throw new Error("Something went wrong")
//   }

//   return res.json()
// }

interface User {
  id : number,
  name: string,
  avatar: string | null
}

const PostUser = ({userId} : {userId? : number}) => {

  //const post : Post = await getData(userId);

  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userId !== undefined) {
          const fetchedUser = await getUser(userId)
          setUser(fetchedUser)
        }
      } catch (error) {
        console.error('Error fetching user: ', error)
      }
    }
    fetchData()
  },[userId])

  console.log(user)

  return (
    <div className={styles.container}>
      {user && user.avatar &&
        <Image className={styles.avatar} src={`/${user?.avatar}`} alt="" width={50} height={50}/>
      }
      <Suspense fallback={<div>Loading...</div>}>
        <div className={styles.detail}>
          <span className={styles.detailTitle}>Author</span>
          <span className={styles.detailValue}>{user?.name}</span>
        </div>
      </Suspense>
    </div>
  )
}

export default PostUser
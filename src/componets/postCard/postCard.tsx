import Image from 'next/image'
import styles from './postCard.module.css'
import Link from 'next/link'

interface Post {
  id: number,
  image : string,
  title: string,
  body: string,
  userId: number,
  publishedDate: string
}

const PostCard = ({post} : {post : Post}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
        <Image className={styles.img} src={`/${post.image}`} alt='' fill/>
        </div>
        <span className={styles.date}>{post.publishedDate}</span>
      </div>
      <div className={styles.buttom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link className={styles.link} href={`/blog/${post.id}`} >Read More</Link>
      </div>
    </div>
  )
}

export default PostCard
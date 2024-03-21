import Image from 'next/image'
import styles from './contact.module.css'

const ContactPage = () => {
  return (
  <div className={styles.container}>
    <div className={styles.imgContainer}>
      <Image className={styles.img} src="/contact.png" alt='' fill/>
    </div>
    <div className={styles.formContainer}>
      <form action="" className={styles.form}>
        <input type="text" placeholder='Name and Surname' name="" id="" />
        <input type="text" placeholder='Email Address' name="" id="" />
        <input type="text" placeholder='Phone Number (optional)' name="" id="" />
        <textarea name="" placeholder='Message' id="" cols={30} rows={10}></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  </div>
  )
}

export default ContactPage
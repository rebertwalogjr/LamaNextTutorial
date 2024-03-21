"use client"

import { usePathname } from "next/navigation"
import styles from "./navLink.module.css"
import Link from "next/link"

interface iItem {
  title: string,
  path: string
}

const NavLink = ({item} : {item : iItem}) => {

  const pathName = usePathname()
  
  return (
    <Link href={item.path}
          className={`${styles.container} ${pathName === item.path && styles.active}`}>
      {item.title}
    </Link>
  )
}

export default NavLink
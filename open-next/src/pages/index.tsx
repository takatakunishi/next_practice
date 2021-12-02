import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/Home.module.css'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      la+ darkness
      <br />
      <Link href="second-page"><a>ここ押すとページ遷移</a></Link>
    </div>
  )
}

export default Home

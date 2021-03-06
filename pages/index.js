import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [ratio, setRatio] = useState(0)
  const [innerWidth, setInnerWidth] = useState(0)
  const [innerHeight, setInnerHeight] = useState(0)

  useEffect(() => {
    setRatio(window.devicePixelRatio)
    setInnerWidth(window.innerWidth)
    setInnerHeight(window.innerHeight)
  }, [ratio, innerWidth, innerHeight])

  return (
    <div className={styles.container}>
      <Head>
        <title>DeviceChecker</title>
        <meta name='description' content='What is my devices' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Device Checker</h1>

        <p className={styles.description}>
          window.devicePixelRatio:
          <code className={styles.code}> {ratio}</code>
          <br />
          window.innerHeight:
          <code className={styles.code}> {innerHeight} px</code>
          <br />
          window.innerWidth:
          <code className={styles.code}> {innerWidth} px</code>
        </p>
      </main>
    </div>
  )
}

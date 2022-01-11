import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Chief Accountability Orchestrator</title>
        <meta property="og:title" content="Chief Accountability Orchestrator" />
      </Helmet>
    </div>
  )
}

export default Home

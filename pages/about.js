import * as React from 'react'
import {useRouter} from 'next/router'

const About = () => {
  // const router = useRouter();
  // const { pid } = router.query

  return (
    <>
      <h3>about : {pid}</h3>
    </>
  )
}

export default About;

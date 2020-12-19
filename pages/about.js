import * as React from 'react'
import {useRouter} from 'next/router'

const About = () => {
  const router = useRouter();
  console.log(router)

  const didi = () => {
    router.push('/home',undefined, {shallow:true})
  }

  return (
    <>
      <h3>about :</h3>
      <button onClick={didi}>click</button>
    </>
  )
}

export default About;

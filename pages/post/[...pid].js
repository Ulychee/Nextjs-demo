import * as React from 'react'
import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const {pid} = router.query

  return(
    <>
      <h3>Post : {pid}</h3>
      <button onClick={()=>console.log(router.query)}>click</button>
    </>
  )
}

export default Post
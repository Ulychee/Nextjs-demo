import Link from 'next/link'

const Home = () => {
  const dd= {
    pathname:'/about',
    query:{
      name:'abc'
    }
  }

  return(
    <ul>
      <li><Link href="/home"><a>Home</a></Link></li>
      <li><Link href={{pathname:'/about',query:{name:'abc'}}}><a>about</a></Link></li>
      <li><Link href={dd} scroll={true} ><a>about</a></Link></li>
      <li><Link href="/detail" as="/aoteman"><a>detail__index</a></Link></li>
      <li><Link href="/detail/detail"><a>detail__detail</a></Link></li>
      <li><Link href="/post/aa"><a>Pid</a></Link></li>
      <li><Link href="/post/aa/ddd" as="/post/haha/comment"><a>comment</a></Link></li>
    </ul>
  )
}

export default Home
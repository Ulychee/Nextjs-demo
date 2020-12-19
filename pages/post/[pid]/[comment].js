import {useRouter} from 'next/router'

const Commet = () => {
  const router = useRouter()

  return(
    <div>

      <button onClick={()=>console.log(router.query)}>Click</button>
    </div>
  )
}

export default Commet
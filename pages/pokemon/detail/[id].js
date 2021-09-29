import axios from 'axios'
import { useRouter } from 'next/router'

const Pokemon = ({ pokemon }) => {
  const { query } = useRouter()
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw' }}>
      <div>
        <div>Ini Pokemon Detail Server Side Props {query.id}</div>
        <div>{pokemon?.name}</div>
      </div>
    </div>
  )
}

export default Pokemon

export const getServerSideProps = async ({ params }) => {
  const response = await axios.get(`http://localhost:8080/${params.id}`)
  const pokemon = response.data.data
  if (!pokemon) {
    return {
      redirect: {
        destination: '/404',
        permanent: true,
      },
    }
  }
  return {
    props: { pokemon },
  }
}

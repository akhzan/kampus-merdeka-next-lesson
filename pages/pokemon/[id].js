import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Head from 'next/head'
import styles from '../../styles/pokemon-detail.module.css'

const Pokemon = ({ pokemon }) => {
  const { query, isFallback } = useRouter()
  useEffect(() => {
    axios
      .get(`http://localhost:8080/${query.id}`)
      .then((res) => console.log('response api from client: ', res.data.data))
  }, [])
  return (
    <div>
      <Head>
        <title>{pokemon?.name} - Pokemon Detail</title>
      </Head>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw' }}>
        <div>
          <div className={styles.pokemonListItem}>Ini Pokemon Detail {query.id}</div>
          <div>{pokemon?.name}</div>
        </div>
      </div>
    </div>
  )
}

export default Pokemon

export const getStaticPaths = async () => {
  const response = await axios.get('http://localhost:8080/')
  const pokemonList = response.data.data

  const paths = pokemonList.map((pokemon) => ({ params: { id: pokemon.id.toString() } }))
  return { paths, fallback: true }
}

export const getStaticProps = async ({ params }) => {
  const response = await axios.get(`http://localhost:8080/${params.id}`)
  const pokemon = response.data.data
  return { props: { pokemon } }
}

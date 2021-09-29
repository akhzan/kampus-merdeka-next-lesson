import axios from 'axios'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../../styles/pokemon.module.css'

const Pokemon = ({ pokemonList }) => {
  return (
    <div>
      <Head>
        <title>Pokemon List</title>
      </Head>
      <div style={{ padding: '2rem 5rem' }}>
        <h2>List of Pokemon</h2>
        {pokemonList.map((pokemon) => (
          // eslint-disable-next-line @next/next/link-passhref
          <Link key={pokemon.id} href={`/pokemon/${pokemon.id}`}>
            <div
              className={styles.pokemonListItem}
              style={{ padding: '0.25rem 0', cursor: 'pointer' }}
              key={pokemon.id}
            >
              {pokemon.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Pokemon

export const getStaticProps = async () => {
  const response = await axios.get('http://localhost:8080/')
  const pokemonList = response.data.data
  return {
    props: {
      pokemonList,
    },
  }
}

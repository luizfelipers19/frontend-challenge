import React from 'react'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'

import styles from './Home.module.css'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  state = {}

  client = new SomosClient()

  render() {
    return (
      <React.Fragment>
        <SubHeader
          breadcrumb={[{ text: 'Home' }]}
          heading="Somos Front-end Challange"
        />
       
        <div className={styles.centered}>
        <div className='header'>
              <h1>
              Pesquise um artista!
              </h1>
            </div>
            <div className={styles.botao}>
              <Link to='/search'>
                <button>Buscar já!</button>
              </Link>
              
            </div>
            
            

        </div>
      </React.Fragment>
    )
  }
}

export default Home

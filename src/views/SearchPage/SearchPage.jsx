import React from 'react'

import { Layout, SubHeader } from 'components'
import { SomosClient } from 'utils'

import styles from './SearchPage.module.css'

 class SearchPage extends React.Component {
  state = {}

  client = new SomosClient()

  render() {
    return (
      /* Reaplicando o layout definido pela empresa */
      <Layout>
      <React.Fragment>
        <SubHeader
          breadcrumb={[{ text: 'Busca' }]}
          heading="Somos Front-end Challange"
        />
       

        <div className={styles.centered}>
          {/*Mantendo o layout proposto originalmente*/}
            <div className="header">
              <h2>Busque por um artista ou grupo</h2>
              
            </div>
            

        <div className={styles.searchBar}>
          <input></input>
        </div>
            
            

        </div>
      </React.Fragment>
      </Layout>
    )
  }
}

export default SearchPage


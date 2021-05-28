import React from 'react';

class Search extends React.Component{

    constructor(props){
        super(props);

        this.state ={
            query: '',
            results: {},
            loading:false,
            message:''
        }
    }

    handleOnInputChange = (event) => {
        
        this.setState( {query: event.target.value}  );
        
    };

    render(){
        const {query} = this.state;
        return(
        <div className='container'>
            <h2>Search Bar Here</h2>
            {/*Search Input*/}
            <label className='search-label' htmlFor='search-input'>
                <input type='text'
                name='query'
                 value={query}
                 id='search-input'
                 placeholder='Pesquise um artista mermão...'
                 onChange={this.handleOnInputChange}
                 >

                 </input>
            </label>
        </div>)

    }

}

export default Search
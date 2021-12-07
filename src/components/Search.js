import React, {useState, useEffect} from 'react';
import axios from 'axios'

const Search = () =>  {
    const [term, setTerm] = useState('Programming');
    const [results, setResults] = useState([])

    useEffect(() => {
       const search = async () => {
           const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
            params: {
                action: 'query',
                list: 'search',
                origin: '*',
                format: 'json',
                srsearch: term,
            },
        });
        setResults(data.query.search)
           };
           if (term) {
            search();    
           }
            
    },[term]);

    const renderResults = results.map((results) => {
        return (
        <div key={results.pageid} className ="item">
            <div className="right floated content">
                <a 
                className="ui button"
                href={`https://en.wikipedia.org?curid=${results.pageid}`}
                >Go
                </a>
            </div>
            <div className ="content">
                <div className="header">
                   {results.title}
                </div>
                <span dangerouslySetInnerHTML={{ __html: results.snippet}}></span>
            </div>
        </div>
        );
    })
    return (
        <div> 
            <div className='ui form'>
                <div className='field'>
                    <label>Enter Search Term</label>
                    <input className='input'
                    value={term}
                    onChange={e => setTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className='ui celled list'>
                {renderResults}
           </div>
        </div>
    )
}
export default Search

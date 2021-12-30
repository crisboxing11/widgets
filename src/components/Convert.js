import React , { useState, useEffect }from 'react';
import axios from 'axios'

const Convert = ({text,language}) => {
    useEffect(() => {
        axios.post('https://translation.googleapis.com/language/translate/v2')
    },[text,language])

    return (
        <div>
            
        </div>
    )
}

export default Convert





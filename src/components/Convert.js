import React , { useState, useEffect }from 'react';
import axios from 'axios'
import Translate from './Translate';

const Convert = ({text,language}) => {
    const [translated,setTranslated]= useState('')
    useEffect(() => {
        axios.post("https://translation.googleapis.com/language/translate/v2",
          {},
          {
            params: {
              q: text,
              target: language.value,
              key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
            },
          }
        );
    },[text,language])

    return (
        <div>
            
        </div>
    )
}

export default Convert





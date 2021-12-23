import React,{useState,useEffect} from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'

const items = [
    {title:'What is React?',
    content:'React is a front end javascript library'
},
{title:'Why use React?',
content: 'React is a favorite JS library among engineers'
},
{title:'How do you use React?',
content:'You use React by creating components'}
]

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: "Arabic",
        value: 'ar'
    },
    {
        label: "Hindi",
        value: 'hi'
    }
];
export default () => {
    const [selected,setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true)
    return (
        <div>
            <button onClick={() => setShowDropdown(!showDropdown)}>TOGGLE DROPDOWN</button>
         {showDropdown ? 
          <Dropdown 
            selected={selected} 
            onSelectedChange={setSelected}
            options={options} 
            /> : null
            }
        </div>
    )
}

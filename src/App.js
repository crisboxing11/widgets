import React,{useState,useEffect} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

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

const showAccordion = () => {
    if (window.location.pathname === '/') {
        return <Accordion items={items} />
    }
};

const showList = () => {
    if (window.location.pathname === '/list') {
        return <Search />
    }
};

const showDropdown = () => {
    if (window.location.pathname === '/dropdown') {
        return <Dropdown />
    }
}

const showTranslate = () => {
    if(window.location.pathname === '/translate') {
        return <Translate />
    }
}
export default () => {
   
    
    return (
        <div>
            {showAccordion()}
            {showList()}
            {showDropdown()}
            {showTranslate()}
        </div>
    )
}

// Need To add navigation feature to bring it all together and display
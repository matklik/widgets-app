import React, { useState } from 'react';
import Header from './components/Header';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';

const headerMenuOptions = [
    {
        name: 'Accordion',
        link: '/'
    },
    {
        name: 'List',
        link: '/list'
    },
    {
        name: 'Dropdown',
        link: '/dropdown'
    }, 
    {
        name: 'Translate',
        link: '/translate'
    },
]

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end Javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favourite JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    },
]

const options = [
    {
        label: 'The Colour Red',
        value: 'red',
    },
    {
        label: 'The Colour Green',
        value: 'green'
    },
    {
        label: 'A Shade of Blue',
        value: 'blue'
    },
]

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [selected, setSelected] = useState(options[0]);

    return (
        <div className="ui container">
            <Header items={headerMenuOptions} />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown label="Select Colour" selected={selected} onSelectedChange={setSelected} options={options} />
                <div className="dropdown-active-colour" style={{color: selected.value}}>This colour is {selected.value}!</div>
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
};

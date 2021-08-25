import React, { useState } from 'react';
import Dropdown from './Dropdown';
import LanguageConvert from './LanguageConvert';

const options = [
    {
        label: 'Afrikaans',
        value: 'af',
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'French',
        value: 'fr'
    },
]

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div className="ui form">
            <div className="field">
                <label>Enter Text</label>
                <input type="text" value={text} onChange={(e)  => setText(e.target.value)} />
            </div>
            <div>
                <Dropdown label="Select Language" selected={language} onSelectedChange={setLanguage} options={options} />
            </div>
            <hr />
            <h3>Output:</h3>
            <LanguageConvert text={text} language={language} />
        </div>
    );
};

export default Translate;
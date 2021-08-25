import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LanguageConvert = ({ text, language}) => {
    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() =>{
        const timeoutId = setTimeout(() => {
            setDebouncedText(text);
        }, 1000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [text]);

    useEffect(() => {
        const translate = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
              params: {
                  q: debouncedText,
                  target: language.value,
                  format: 'text',
                  key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
              }  
            });
            setTranslated(data.data.translations[0].translatedText);
        };

        translate();
    }, [language, debouncedText]);

    return (
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
    );
};

export default LanguageConvert;
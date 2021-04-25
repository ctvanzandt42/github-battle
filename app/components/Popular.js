import React, { useState } from "react";

const Popular = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('All');
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']

    const updateLanguage = (selectedLanguage) => {
        setSelectedLanguage(selectedLanguage);
    }

    return (
        <ul className="flex-center">
            {languages.map(( language, index ) => (
                <li key={index}>
                    <button
                        className="btn-clear nav-link"
                        style={language === selectedLanguage ? { color: 'rgb(187, 46, 31' } : null }
                        onClick={() => updateLanguage(language)}>
                        {language}
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default Popular;
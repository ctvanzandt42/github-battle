import React, { useState } from "react";
import LanguagesNav from "./LanguagesNav";

const Popular = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('All');

    const updateLanguage = (selectedLanguage) => {
        setSelectedLanguage(selectedLanguage);
    }

    return (
        <LanguagesNav
            onUpdateLanguage={updateLanguage}
            selected={selectedLanguage} />
    )
}

export default Popular;
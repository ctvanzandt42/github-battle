import React from "react";

const Popular = () => {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']

    return (
        <ul className="flex-center">
            {languages.map(( language, index ) => (
                <li key={index}>
                    <button className="btn-clear nav-link">
                        {language}
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default Popular;
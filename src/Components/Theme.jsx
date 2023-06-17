import { useEffect, useState } from "react";
import { FiSun, FiMoon } from 'react-icons/fi';


const Theme = () => {

    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };
    // initially set the theme and "listen" for changes to apply them to the HTML tag
    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <label className="swap swap-rotate">
            <input onClick={toggleTheme} type="checkbox" />
            <div className="swap-on"><FiMoon/></div>
            <div className="swap-off"><FiSun/></div>
        </label>
    );
};

export default Theme;
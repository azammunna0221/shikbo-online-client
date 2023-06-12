import { useEffect, useState } from "react";


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
            <div className="swap-on">DARK</div>
            <div className="swap-off">LIGHT</div>
        </label>
    );
};

export default Theme;
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { LanguageContext } from '../context';

const Header = ({setMode, mode}) => {

    const changeTheme = () => {
        setMode(!mode)
        localStorage.setItem('mode', JSON.stringify(!mode))
    }
    const {language,setLanguage} = useContext(LanguageContext)
    return (
        <div id='header'>
            <div className='container'>
                <div className='header'>
                    <h2><span>MOVI</span>E</h2>
                    <div className='header-right'>
                    <nav className='nav'>
                        <NavLink to={'/'}>Home</NavLink>
                        <NavLink to={'/popular'}>Popular</NavLink>
                        <NavLink to={'/toprated'}>Top Rated</NavLink>
                    </nav>
                    <select onChange={(e)=> setLanguage(e.target.value)}>
                        <option value="en-US">English</option>
                        <option value="ru-RU">Russian</option>
                        <option value="tr-TR">Turkce</option>
                        <option value="fr-FR">France</option>
                    </select>
                    <button onClick={ changeTheme} className='mode'>{mode ? 'white' : 'mode'}</button>
                    <div className='btns'>
                        <button>sign in</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
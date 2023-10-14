import React, {useState} from 'react'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

function Header() {
    const [menuIsOpen, setMenuIsOpenMenu] = useState(false)
    const onBurgerClick = () => {
        setMenuIsOpenMenu(!menuIsOpen)
        console.log(menuIsOpen)
    }

    return (
            <div>
                {/*// add NavLinks*/}
                <nav className={menuIsOpen ? `${s.nav} ${s.unShow}` : s.nav}>
                    <div className={s.item}>
                        <NavLink to="/pre-junior"
                                 className={navData => navData.isActive ? s.active : s.item}>Pre-Junior</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to="/junior"
                                 className={navData => navData.isActive ? s.active : s.item}>Junior</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to="/junior+"
                                 className={navData => navData.isActive ? s.active : s.item}>Junior+</NavLink>
                    </div>
                </nav>
                <div onClick={onBurgerClick} className={s.burgerBtn}>
                </div>
            </div>
    )
}

export default Header

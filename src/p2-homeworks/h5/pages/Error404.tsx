import React from 'react'
import style from './Error404.module.scss'
import PreJunior from "./PreJunior";

function Error404() { // взял с сайта https://codepen.io/juliepark/pen/erOoeZ
    return (
        // <div>
        //     <div>404</div>
        //     <div>Page not found!</div>
        //     <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        // </div>
        <div>
            <div id="background"></div>
            <div className={style.top}>
                <h1>404</h1>
                <h3>page not found</h3>
            </div>
            <div className="bottom">
                <p>Boo, looks like a ghost stole this page!</p>
            </div>
        </div>
    )
}

export default Error404

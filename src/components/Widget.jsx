/** Компонент отвечает за отображение виджета*/
import React from 'react';



export default function Widget(props) {
    return (
        <li className={props.className} key={props.id}>
            <h5>{props.title}</h5>
            {props.children}
        </li>
    )
}




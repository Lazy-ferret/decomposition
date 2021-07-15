/** Компонент отвечает за отображение виджетов*/
import React from 'react'

export default function WidgetsList(props) {
    return (
        <ul className='WidgetsList'>
            {props.children}
        </ul>
    )
}

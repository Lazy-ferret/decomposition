/** Компонент отвечает за список новостей в хэдере*/
import React from 'react'

export default function NewsList(props) {
    return (
        <ul className='News-List'>
            {props.children(props.items)}
        </ul>
    )
}

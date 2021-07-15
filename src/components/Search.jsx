/** Компонент отвечает за форму поиска */
import React from 'react';
import { Form, Input, Button } from 'reactstrap';

export default function Search(props) {
    return (
        <Form className='Search-Form'>
            <img className='Search-Logo' src="https://image.flaticon.com/icons/png/512/5019/5019685.png" alt="App_logo" />
            <Input className='Search-Input' />
            <Button className='Search-Button'>Найти</Button>
        </Form>
    )
}



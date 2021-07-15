/** Компонент отвечает за отображение навигации над формой поиска*/
import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { searchCategory } from './App.const';

export default function NavMain(props) {
    return (
        <div>
            <Nav className='Nav-Main'>
                {searchCategory.map(item =>
                    <NavItem>
                        <NavLink disabled={item.active ? '' : 'disabled'} href="#">
                            {item.title}
                        </NavLink>
                    </NavItem>)}
            </Nav>
        </div>
    )
}

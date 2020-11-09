import React from 'react'
import {Container} from './SidebarElements'
import Profile from './Profile'
import Menu from './Menu/Menu'

const Sidebar = () => {
    return (
        <Container>
            <Profile />
            <Menu />
        </Container>
    )
}

export default Sidebar

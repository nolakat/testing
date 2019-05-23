import React from 'react';
import NavLink from './NavLink';
import styled from "@emotion/styled";

const MainNav = styled.div`
    border: 1px solid #999;
    padding: 1rem 0;
    display: flex;
    justify-content: center;
`;

class Header extends React.Component{

        render(){
    return(
        <MainNav>
            <NavLink toggleFunc={this.props.toggleFunc} url="/page1/">Page One</NavLink>
            <NavLink toggleFunc={this.props.toggleFunc} url="/page2/">Page Two</NavLink>
            <NavLink toggleFunc={this.props.toggleFunc} url="/page3/">Page Three</NavLink>
        </MainNav>
    )
}
}

export default Header;
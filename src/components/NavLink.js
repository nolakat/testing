import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const NavLinkBody = styled(Link)`
    font-size: 1.25rem;
    margin-right: 1rem;
    padding: 1rem;
    text-decoration: none;
    color: #666;
    transition: 1s color ease;
    border: 1px solid #888;

    &:hover{
        color: #333;
        transition: 1s color ease;
    }

    &:last-of-type{
        margin-right: 0;
    }

    &.current-page{
        text-decoration: underline;
    }
`;


class NavLink extends React.Component{


    render(){


        return(
            <>
                <NavLinkBody to={this.props.url} activeClassName="current-page"
                onMouseEnter= {() => this.props.toggleFunc()}
                onMouseLeave= {() => this.props.toggleFunc()}
                >{this.props.children}</NavLinkBody>
            </>
        )
    }
}

export default NavLink;
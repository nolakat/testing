import React from 'react';
import styled from "@emotion/styled";
import TransitionLink from 'gatsby-plugin-transition-link';
import { Link } from 'gatsby';
import { TweenLite } from 'gsap';
import Logo from './Logo';


const Nav = styled.nav`
    border: 1px solid purple;
    display: flex;
`;

const Header = (props) => {

    const interestingExitAnimation =(exit, node) => {
        TweenLite.fromTo(node, .5, {opacity: 1}, {opacity: 0});
      }


    return(

        <>
            <header>
                <Logo/>
                <Nav>
                    <TransitionLink
                    to="/page1"
                    exit={{
                        trigger: ({ exit, node }) => interestingExitAnimation(exit, node),
                        length: 1,
                        delay: 1,
                        zIndex: 2
                    }}
                    entry={{
                        delay: 1,
                    }}
                    > Page One </TransitionLink>

                    <TransitionLink to="/page2"
                    entry={{
                        delay: 1,
                    }}> Page Two </TransitionLink>
                </Nav>
            </header>

        </>

    )
}

export default Header;
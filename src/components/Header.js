import React from 'react';
import styled from "@emotion/styled";
import TransitionLink from 'gatsby-plugin-transition-link';
import { TweenLite } from 'gsap';


const header = styled.div`
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    border: 1px solid red;

    a{
        margin: 0px 20px;
    }
`;

const Header = (props) => {

    const interestingExitAnimation =(exit, node) => {
        TweenLite.fromTo(node, .5, {opacity: 1}, {opacity: 0});
      }


    return(

        <>
            <header>
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
            </header>

        </>

    )
}

export default Header;
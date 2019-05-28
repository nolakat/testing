import React from 'react';
import styled from "@emotion/styled";
import TransitionLink from 'gatsby-plugin-transition-link'
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

const Header = () => {

    const interestingExitAnimation =(exit, node) => {
       
        TweenLite.fromTo(node, 2, {opacity: 1}, {opacity: 0});
      }

    return(
        <>
            <header>
                <TransitionLink
                 to="/page1"
                 exit={{
                    trigger: ({ exit, node }) => interestingExitAnimation(exit, node),
                    length: 2
                  }}
                  entry={{
                    delay: 2
                  }}
                 > Page One </TransitionLink>

                <TransitionLink to="/page2" > Page Two </TransitionLink>
            </header>

        </>

    )
}

export default Header;
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
        console.log('triggered interestingExitAnimation()');
        console.log({exit});
        console.log({node});
        TweenLite.to(".tl-wrapper-status--exiting", 1, {opacity: .5});

      }
    
    return(
        <>

            <header>
                <TransitionLink
                 to="/page1"
                 exit={{
                    trigger: ({ exit, node }) => interestingExitAnimation(exit, node),
                    length: 1,
                    delay: 1.5
                  }}
                  entry={{
              
                  }}
                 > Page One </TransitionLink>

                <TransitionLink to="/page2" > Page Two </TransitionLink>
            </header>

        </>

    )
}

export default Header;
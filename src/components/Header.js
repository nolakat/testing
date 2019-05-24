import React from 'react';
import styled from "@emotion/styled";
import TransitionLink from 'gatsby-plugin-transition-link'


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
      }
    

    return(
        <>

            <header>
                <TransitionLink
                 to="/page1"
                 exit={{
                    trigger: ({ exit, node }) => interestingExitAnimation(exit, node),
                    length: 1
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
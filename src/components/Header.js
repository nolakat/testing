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
<<<<<<< HEAD
       
        
        TweenLite.fromTo(node, 3, {opacity: 1}, {opacity: 0});

=======
        var main = node.getElementsByClassName("main")[0];
        // console.log('triggered interestingExitAnimation()');
        // console.log('exit', {exit});
        console.log('node', {node});
        console.log('main', main);
        TweenLite.to(main, 4, {opacity: .5});
>>>>>>> 758200b9c2c29060ab87f4530e898bfcae108ce1
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
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

const NewHeader = () => {


    return(
        <>

            <header>
                <TransitionLink to="/page1" > Page One </TransitionLink>
                <TransitionLink to="/page2" > Page Two </TransitionLink>
            </header>

        </>

    )
}

export default NewHeader;
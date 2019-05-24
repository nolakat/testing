import React from 'react';
import styled from "@emotion/styled";
import { Link } from 'gatsby';

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
                <Link to="/page1" > HeaderLink 1 </Link>
                <Link to="/page2" > HeaderLink 2 </Link>
            </header>

        </>

    )
}

export default NewHeader;
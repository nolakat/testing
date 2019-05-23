import React from 'react';
import styled from "@emotion/styled";
import { Link } from 'gatsby';

const MainNav = styled.div`

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

            <MainNav>
                <Link to="/page1" > Page 1 </Link>
                <Link to="/page2" > Page 2 </Link>
            </MainNav>

        </>

    )
}

export default NewHeader;
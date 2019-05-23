import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import onMouseOver from '../hooks/onMouseOver';


const NewLink = styled(Link)`
    border-bottom: 3px solid hotpink;
    text-decoration: none;
    margin: 0 auto;
    text-transform: uppercase;
    color: #444;
    font-weight: bold;
    letter-spacing: .05em;
    padding-bottom: 2px;
    transition: .25s all linear;

    &:hover{
        color: #777;
        padding-bottom: 5px;
        transition: .25s all linear;
    }
`;

const TestLink = (props) =>{

    const mouseStatus = onMouseOver();


    return(
        <>
        <NewLink to={props.to}>{props.label}</NewLink>
        <br/>
        <h5>Link Hover Status: {mouseStatus}</h5>
        </>
    )

}

export default TestLink;


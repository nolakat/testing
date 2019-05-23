import React from 'react';
import styled from '@emotion/styled';


    const CursorBody = styled.div`
        width: 20px;
        height: 20px;
        margin: 0 auto;
        border-radius: 20px;
        background: ${props => props.hoverState ? '#333' : 'red' };
        transform: ${props => props.hoverState? 'scale(2)': 'scale(1)'};
        transform-origin: center;
        transition: 1s all ease;
    `

    const CursorRing = styled.div`
        width: 40px;
        height: 40px;
        border-radius: 40px;
        border: 2px solid #333;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
    `



const Cursor = (props, data) => {

    
        return(
            <>

                <CursorRing>
                    <CursorBody hoverState={props.hoverState} />
                </CursorRing>

            </>

        )
        
    
}

export default Cursor;
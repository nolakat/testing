import React from 'react';
import {Global, css} from '@emotion/core';
import TestCursor from '../components/TestCursor';
import NewHeader from '../components/NewHeader';

const MainLayout = ({children}) =>{

    return(
        <>
            <Global styles={css`

                body{
                    margin: 0px;
                    padding: 0px;
                    height: 100vh;
                    width: 100vw;
                    cursor: none;
                }

                main{
                    height: 100vh;
                }

                a{
                    cursor: none;
                }

                a:hover, a:active, a:focus{
                    cursor: none;
                }
            `} />

              
                <TestCursor />
                <NewHeader/ >
                {children}

        </>
    )

}

export default MainLayout
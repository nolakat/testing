import React from 'react';
import {Global, css} from '@emotion/core';
import TestCursor from '../components/TestCursor';
import Header from '../components/Header';

const MainLayout = ({ children }) =>{


    return(
        <>
            <Global styles={css`

                body{
                    margin: 0px;
                    padding: 0px;
                    height: 100vh;
                    width: 100vw;
                    // cursor: none;
                }

                main{
                    height: 100vh;
                }

                a{
                    // cursor: none;
                    border: 1px solid orange;
                }

                a:hover, a:active, a:focus{
                    // cursor: none;
                }

                header{

                    padding: 1rem 0;
                    display: flex;
                    justify-content: center;
                    border: 1px solid red;

                    a{
                        margin: 0px 20px;
                        border: 2px solid pink;
                        padding: 15px;
                    }
                }
            `} />

                <TestCursor location={window.location.href} />
                <Header / >
                <main id="main-container">

                {children}

                </main>
        </>
    )

}

export default MainLayout
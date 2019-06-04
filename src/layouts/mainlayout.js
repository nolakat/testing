import React from 'react';
import {Global, css} from '@emotion/core';
import TestCursor from '../components/TestCursor';
import Header from '../components/Header';
import { Helmet } from 'react-helmet'


const MainLayout = ({ children }) =>{


    return(
        <>
            <Global styles={css`

                body{
                    margin: 0px;
                    padding: 0px;
                    min-height: 100vh;
                    width: 100%;
                    overflow-x: hidden;
                    cursor: none;
                }

                main{
                    height: 100vh;
                }

                a{
                    // cursor: none;
                    border: 1px solid orange;
                }

                a:hover, a:active, a:focus{
                    cursor: none;
                }

                header{

                    padding: 1rem 0;
                    display: flex;
                    justify-content: space-between;
                    border: 1px solid red;

                    a{
                        margin: 0px 20px;
                        border: 2px solid pink;
                    }
                }
            `} />
                <Helmet>
                    <title> Hello There </title>

                </Helmet>
                <TestCursor location={window.location.href} />
                <Header / >
                <main id="main-container">

                {children}

                </main>
        </>
    )

}

export default MainLayout
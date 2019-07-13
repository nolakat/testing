import React from 'react'
import { Illustration } from 'react-zdog'
import { css } from '@emotion/core';
import Plant from '../components/Plant';



export default () => {

    return(
  <div className="test" css={css` width: 100vw; height: 100vh; background: #fff;`}>
        <h1>Test Animation</h1>
        <Illustration>
            <Plant />
        </Illustration>
    </div>
    )
}
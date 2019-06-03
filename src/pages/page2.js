import React from "react"
import Link from 'gatsby-plugin-transition-link'
import { css } from '@emotion/core'

export default () => {

    return(

            <div className="main"
            css={css`
            padding: 40px 60px;
            border: 2px solid green;
            background: #fff;
            `}>

                <h2>Page Two</h2>
                <Link to="/page1/" >Go To Page One</Link><br />
            </div>

    )
}
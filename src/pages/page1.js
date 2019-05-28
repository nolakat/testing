import React from "react"
import TransitionLink from 'gatsby-plugin-transition-link'
import Link from 'gatsby-plugin-transition-link'
import { css } from '@emotion/core'

export default ({ children, transitionStatus, entry, exit}) => {

    return(

            <div className="main"
                css={css`
                    padding: 20px 60px;
                    border: 1px solid red;
                    backgound: #fff;
                `}>
                <h2>Page One</h2>
                <Link to="/page2/">Go To Page Two</Link>
            </div>

    )
}

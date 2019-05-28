import React from "react"
import Link from 'gatsby-plugin-transition-link'

export default () => {
    return(

            <div className="main">
                <h2>Page Two</h2>
                <Link to="/page1/" >Go To Page One</Link><br />
            </div>

    )
}
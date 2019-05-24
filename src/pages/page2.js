import React from "react"
import { Link } from 'gatsby';

export default () => {
    return(

            <>
            <h2>Page Two</h2>
            <Link to="/page1/" >PageLink One</Link><br />
            <Link to="/page2/" >PageLink Two</Link>
            </>

    )
}
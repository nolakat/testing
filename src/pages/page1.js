import React from "react"
// import Link from 'gatsby-plugin-transition-link'
import TransitionLink from 'gatsby-plugin-transition-link'
import Link from 'gatsby-plugin-transition-link'

export default ({ children, transitionStatus, entry, exit}) => {
        // console.log('\n', 'transitionStatus: ', transitionStatus, '\n',
        //             'children: ', children , '\n',
        //             'entry', entry, '\n',
        //             'exit', exit);

    return(

            <div className="main">
                <h2>Page One</h2>
                <Link to="/page2/">Go To Page Two</Link>
                <h3>Testing</h3>
            </div>

    )
}

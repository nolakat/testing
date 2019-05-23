import React from "react"
import MainLayout from '../layouts/mainlayout';
import NewLink from '../components/NewLink';


export default () => {
    return(
  
            <>
            <h2>Page One</h2>
            <NewLink to="/page2/" label="Page Two" />
            </>

  
    )
}

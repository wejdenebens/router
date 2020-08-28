import React from 'react'
import {Link} from 'react-router-dom'
const Nav = () => {

    return(
            <>
                    <Link to='/'>Home</Link>
                    <Link to='/category'>Catagory</Link>
                    <Link to='/products'>Products</Link>
                    <Link to='/Adminarea'>Admin area</Link>
            </>

    )
}

export default Nav;
import React from 'react'

const Navbar = () => {
    return (
        <div>
            <Link to='/'>Media Serach</Link>
            <div>
                <Link to='/'>Search</Link>
                <Link to='/collection'>Collection</Link>
            </div>
        </div>

    )
}

export default Navbar
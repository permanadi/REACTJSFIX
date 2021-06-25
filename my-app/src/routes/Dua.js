import React from 'react'
import { Link } from 'react-router-dom'


const Dua = () => {
    return (
        <div>
            <h1>ini halaman dua</h1>
            <Link to="/">home</Link><br />
            <Link to="/satu">Satu</Link>
        </div>
    )
}

export default Dua

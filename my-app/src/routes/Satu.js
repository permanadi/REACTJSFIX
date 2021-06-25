import React from 'react'
import { Link } from 'react-router-dom'

const Satu = () => {
    return (
        <div>
            <h1>ini halaman satu</h1>
            <Link to="/">Home</Link><br />
            <Link to="/dua">Dua</Link>
        </div>
    )
}

export default Satu

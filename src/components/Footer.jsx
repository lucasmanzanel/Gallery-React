import React from 'react'

const Footer = () => {
    return (
    <nav className="navbar navbar-dark bg-primary text-center">
        <div className='container-fluid'>
        <p className='text-center fw-bold text-white text-center'>Manzanel Lucas - &copy; {new Date().getFullYear()}</p>{' '}
        </div>
    </nav>
    )
}

export default Footer

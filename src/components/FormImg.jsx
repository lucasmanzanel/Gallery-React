import React from 'react'
import PropTypes from 'prop-types'

const FormImg = ({handleSubmit}) => {
    return (
    <>
    <form onSubmit={handleSubmit} className='d-flex mt-2' >
    <input className="form-control me-2" type="search" placeholder="Ingrese nombre de imagen" aria-label="Search"/>
    <button className="btn btn-outline-success" type="submit">Buscar</button>
    </form>
    </>
    )
}

FormImg.propTypes = {
    handleSubmit: PropTypes.func

}

export default FormImg


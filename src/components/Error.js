import React from 'react'
import PropTypes from 'prop-types'

const Error = ({ mensaje }) => {
  return (
    <>
      <div class="alert alert-primary text-center">
        <strong>{mensaje}</strong>
      </div>
    </>
  )
}

Error.propTypes = {
  mensaje: PropTypes.string.isRequired,
}

export default Error

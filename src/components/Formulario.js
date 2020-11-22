import React, { useState } from 'react'
import Error from './Error'
import PropTypes from 'prop-types'

const Formulario = ({ setBusqueda, setPaginaActual }) => {
  const [termino, setTermino] = useState('')
  const [error, setError] = useState(false)

  const buscarImagenes = (e) => {
    e.preventDefault()

    // Validar
    if (termino.trim() === '') {
      setError(true)
      return
    } else {
      setError(false)
      // Enviar el termino de busqueda hacia el componente principal
      setBusqueda(termino)
      setPaginaActual(1)
    }
  }

  return (
    <>
      <form onSubmit={buscarImagenes}>
        <div className="row">
          <div className="form-group col-md-8">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Busca una imágen, ejemplo: futbol o café"
              onChange={(e) => setTermino(e.target.value)}
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="submit"
              className="btn btn-lg btn-danger btn-block"
              value="buscar"
            />
          </div>
        </div>
        {error ? <Error mensaje="Agrega un término de búsqueda" /> : null}
      </form>
    </>
  )
}

Formulario.propTypes = {
  setBusqueda: PropTypes.func.isRequired,
  setPaginaActual: PropTypes.func.isRequired,
}

export default Formulario

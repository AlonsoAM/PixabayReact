import React from 'react'
import PropTypes from 'prop-types'

const Imagen = ({ imagen }) => {
  // Extraer variables
  const { largeImageURL, likes, views, previewURL, tags } = imagen

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card border-light mb-3">
        <img src={previewURL} alt={tags} className="card-img-top" />
        <div className="card-body">
          <p className="card-text">{likes} Me gusta</p>
          <p className="card-text">{views} Vistas</p>
        </div>
        <div className="card-footer">
          <a
            href={largeImageURL}
            target="_blank"
            rel="noopenner noreferrer"
            className="btn btn-primary"
          >
            Ver Imágen
          </a>
        </div>
      </div>
    </div>
  )
}

Imagen.propTypes = {
  imagen: PropTypes.object.isRequired,
}

export default Imagen
import React from 'react'
import PropTypes from 'prop-types'
import Imagen from './Imagen'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: 'center',
    alignContent: 'center',
    margin: '1rem 1rem 1rem 1rem',
  },
}))

const ListadoImagenes = ({ imagenes }) => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          {imagenes.map((imagen) => (
            <Grid item lg={3} md={6} xs={12}>
              <Imagen key={imagen.id} imagen={imagen} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  )
}

ListadoImagenes.propTypes = {
  imagenes: PropTypes.array.isRequired,
}

export default ListadoImagenes

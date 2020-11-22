import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import VisibilityIcon from '@material-ui/icons/Visibility'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    boxShadow: `outset 0 -3em 3em rgba(0,0,0,0.1), 
    0 0  0 2px rgb(255,255,255),
    0.3em 0.3em 1em rgba(0,0,0,0.3);`,
  },
  boton: {
    width: '100%',
  },
  imagen: {
    objectFit: 'cover',
    transition: 'all .3s ease',
    '&:hover': {
      transform: 'scale(1.2)',
    },
  },
}))

const Imagen = ({ imagen }) => {
  const classes = useStyles()
  // Extraer variables
  const { largeImageURL, likes, views, previewURL, tags } = imagen

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.imagen}
          component="img"
          alt="Contemplative Reptile"
          height="140px"
          image={previewURL}
          title={tags}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h4">
            <ThumbUpAltIcon color="primary"></ThumbUpAltIcon> {likes}
          </Typography>
          <Typography gutterBottom variant="h6" component="h4">
            <VisibilityIcon color="primary"></VisibilityIcon> {views}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          className={classes.boton}
          href={largeImageURL}
          target="_blank"
          rel="noopenner noreferrer"
          color="primary"
          variant="outlined"
        >
          Ver Imagen
        </Button>
      </CardActions>
    </Card>
  )
}

Imagen.propTypes = {
  imagen: PropTypes.object.isRequired,
}

export default Imagen

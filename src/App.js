import { useEffect, useState } from 'react'
import Formulario from './components/Formulario'
import axios from 'axios'
import ListadoImagenes from './components/ListadoImagenes'

function App() {
  const [busqueda, setBusqueda] = useState('')
  const [imagenes, setImagenes] = useState([])

  // State para el paginador
  const [paginaActual, setPaginaActual] = useState(1)
  const [totalPaginas, setTotalPaginas] = useState(1)
  // ------------------------------------
  useEffect(() => {
    const consultarAPI = async () => {
      if (busqueda === '') return

      const imagenesPorPagina = 30
      const key = '18590655-b0e258e56dc13107578228088'
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaActual}`

      const respuesta = await axios.get(url)
      setImagenes(respuesta.data.hits)

      // Calcular el total de paginas
      const calcularTotalPaginas = Math.ceil(
        respuesta.data.totalHits / imagenesPorPagina,
      )
      setTotalPaginas(calcularTotalPaginas)

      // Mover la pantalla hacia arriba
      const jumbotron = document.querySelector('.jumbotron')
      jumbotron.scrollIntoView({ behavior: 'smooth' })
    }
    consultarAPI()
  }, [busqueda, paginaActual])

  // Definir página anterior
  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaActual - 1
    if (nuevaPaginaActual === 0) return
    setPaginaActual(nuevaPaginaActual)
  }

  // DEfinir pagina siguiente
  const paginaSiguiente = () => {
    const nuevaPaginaActual = paginaActual + 1
    if (nuevaPaginaActual === totalPaginas + 1) return
    setPaginaActual(nuevaPaginaActual)
  }

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="text-center mb-4">Buscador de Imágenes</h1>
        <Formulario
          setBusqueda={setBusqueda}
          setPaginaActual={setPaginaActual}
        />
      </div>
      <div className="row justify-content-center">
        <ListadoImagenes imagenes={imagenes} />

        {paginaActual === 1 ? null : (
          <button
            type="button"
            className="btn btn-info mr-1"
            onClick={paginaAnterior}
          >
            &laquo; Anterior
          </button>
        )}

        {paginaActual === totalPaginas ? null : (
          <button
            type="button"
            className="btn btn-info"
            onClick={paginaSiguiente}
          >
            Siguiente &raquo;
          </button>
        )}
      </div>
    </div>
  )
}

export default App

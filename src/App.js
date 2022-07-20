import React from 'react';
class Bookings extends React.Component {
  state = {
    list: [],
    distancia: '',
    tiempo: '',
    resultado: ''
  };

  // Función que captura el valor de los inputs
  // para setearlo en su respectivo estado
  // Para este caso: tour, pax y price
  handleInputChange = event => {
    const { target } = event;
    const { name, value } = target;

    this.setState({
      [name]: value
    });
  };

  // Esta función se ejecutará al momento de darle click al botón de "Agregar"
  handleSubmit = event => {
    const { distancia, tiempo, list } = this.state;

    // Simple validación para que tour, pax y price sean campos requeridos
    if ( distancia && tiempo) {
      const id = list.length + 1;
      var arreglo = this.state.data;
      const resultado =  distancia/tiempo;
      // En los states se agrega un nuevo objeto a "list"
      // y se reinicia el estado de tour, pax y price
      this.setState({
        list: [...list, { id, distancia, tiempo, resultado }],
        
        pax: '',
        price: ''

      });
    } else {
      // Si alguno de los inputs se encuentra vacio
      // se mostrará el siguiente mensaje en la consola del navegador
      console.log('Please complete all fields');
    }

    // Para que no se refresque la página por el onSubmit del formulario
    event.preventDefault();
  };
  eliminar = () => {
    var opcion = true;
    //var opcion = window.confirm("Estás seguro que deseas eliminar los elementos de la lista ");
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state;
          arreglo.splice(contador, 1);
        
        contador++;
      
      this.setState({ state: false });
    }
  };
  render() {
    const { distancia, tiempo, list, resultado } = this.state;
    return (
      <>
      <div class="container">
    <div class="primary_header">
        <h1 class="title"> Calculadora de ejercicios de ejerccios de MRUV</h1>
      </div>
        <div className="inputs_tours">
          <form onSubmit={this.handleSubmit} className="form_tours">
            <div className="form-group">
              <label htmlFor="distancia">
                <h5>Ingrese el valor de la distancia:</h5>
                <input
                  type="number"
                  className="form-control"
                  id="distancia"
                  placeholder="Ingrese la distancia"
                  name="distancia"
                  value={distancia}
                  onChange={this.handleInputChange}
                />
              </label>
            </div>
            <br></br>
            <div className="form-group room">
              <label htmlFor="tiempo">
              <h5>Ingrese el valor del tiempo:</h5>
                <input
                  type="number"
                  className="form-control"
                  id="tiempo"
                  placeholder="Ingrese el tiempo"
                  name="tiempo"
                  value={tiempo}
                  onChange={this.handleInputChange}
                />
              </label>
            </div>
            <br></br>
            <div className="pax_btn">
              <button className="btn btn-primary">
                Calcular
              </button>
              
            </div>
          </form>
        </div>
        <br></br>
        <div className="form-group room">
              <label htmlFor="tiempo">
              <h3>Tabla de Resultados:</h3>
              </label>
            </div>
        <br></br>
        <div className="table_tours">
          <table className="table table-dark">
            <thead>
              <tr>
                
                <th scope="col">Distancia</th>
                <th scope="col">Tiempo</th>
                <th scope="col">Velocidad</th>
                
              </tr>
            </thead>
            <tbody>
              {list.map(item => (
                <tr key={item.id}>
                  <td>{item.distancia}</td>
                  <td>{item.tiempo}</td>
                  <td>{item.resultado}</td>
                  
                </tr>
              ))}
              
            </tbody>
            
          </table>  
        </div>
        <button className='btn btn-danger' onClick={()=> window.location.reload()}>Eliminar</button>
        </div>
      </>
    );
  }
}

export default Bookings;
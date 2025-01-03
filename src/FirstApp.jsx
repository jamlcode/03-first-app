// variables que no tengan dependencias dentro del componente dejarlas fuera
// const newMessage = {
//   title: 'hola',
//   body: 'mundo',
//   uuid: '123'
// }
import PropTypes from 'prop-types';  

export default function FirstApp({
  title,
  state = {
    value: 'inactive',
    label: 'Inactivo'
  },
  name,
}) {
  return (
    <>
      <h1>FirstApp</h1>
      <h2>{title}</h2>
      <span style={{ backgroundColor: state.value === 'active' ? 'green' : 'red' }} >{state.label}</span>
      <p>{name}</p>
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem id debitis ad consequuntur, nulla voluptates deserunt voluptatibus consequatur rerum incidunt voluptatum soluta accusantium. Itaque, ipsum nostrum enim voluptate porro doloribus.
      </p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  state: PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  }).isRequired,
  name: PropTypes.string,
}

/**
 * Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead
 */
// FirstApp.defaultProps = {
//   title: 'No hay título',
//   state: {
//     value: 'inactive',
//     label: 'Inactivo'
//   },
//   name: 'Goku'
// }
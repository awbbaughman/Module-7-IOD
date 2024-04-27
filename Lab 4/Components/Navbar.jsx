import { NavLink } from 'react-router-dom';

function NavBar() {

return (

<nav>

  <ul>

    <li><NavLink to="/">Home</NavLink></li>

    <li><NavLink to="/dash">Dashboard</NavLink></li>

    <li><NavLink to="/about">About</NavLink></li>

  </ul>

</nav>
);

}

export default NavBar;
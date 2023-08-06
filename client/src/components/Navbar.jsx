import { Link } from 'react-router-dom';
import '../assets/styles/layout.css';

const Navbar = () => {
  // const navigate = useNavigate();

  return (
    <div className='navbar-container'>
      <div className='container'>
        <div className='navbar'>
          <div className='logo'>
            <Link to='/' className='logo-name'>
              E-Commerce
            </Link>
          </div>
          <nav>
            <ul id='MenuItems'>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <>
                <li className='logout-ico'>
                  <i className='fa-solid fa-arrow-right-from-bracket' />
                </li>
              </>
              <>
                <li>
                  <Link to='signup'>SignUp</Link>
                </li>
                <li>
                  <Link to='signin'>SignIn</Link>
                </li>
              </>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

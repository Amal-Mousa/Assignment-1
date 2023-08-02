/* eslint-disable consistent-return */
import '../assets/styles/layout.css';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='container'>
        <div className='navbar'>
          <div className='logo'>
            <a href='#' className='logo-name'>
              E-Commerce
            </a>
          </div>
          <nav>
            <ul id='MenuItems'>
              <li>
                <a href='#'>Home</a>
              </li>
              <>
                <li className='logout-ico'>
                  <i className='fa-solid fa-arrow-right-from-bracket' />
                </li>
              </>
              <>
                <li>
                  <a href='#'>SignUp</a>
                </li>
                <li>
                  <a href='#'>SignIn</a>
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

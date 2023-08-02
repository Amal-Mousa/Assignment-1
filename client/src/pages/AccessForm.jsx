import '../assets/styles/login.css';

const AccessForm = (endpoint = 'SignIn') => {
  return (
    <div className='main-section'>
      <div className='sidebar-image' />

      <div className='form-section'>
        <h4>{endpoint === 'SignIn' ? 'Sign in' : 'Sign up'}</h4>

        <p>
          By continuing, you agree to our
          <a href='/'>User Agreementand</a>
          and
          <a href='/'>Privacy Policy</a>
        </p>

        <div className='form'>
          {endpoint !== 'SignIn' ? (
            <input
              type='text'
              name='username'
              id='name'
              placeholder='CHOOSE A USERNAME'
            />
          ) : null}
          <input type='text' name='Email' placeholder='EMAIL' id='email' />
          <input
            type='text'
            name='password'
            placeholder='PASSWORD'
            id='password'
          />
          <button id='register' type='button'>
            {endpoint === 'SignIn' ? 'Sign in' : 'Sign Up'}
          </button>
          <p>
            Forgot your
            <a href='/'>username</a>
            <a href='/'>password?</a>
          </p>
          <p>
            {endpoint === 'SignIn' ? (
              <>
                <span> dont have account </span>
                <a href='#' className='link'>
                  SignUp
                </a>
              </>
            ) : (
              <>
                <span>already have account </span>
                <a href='#' className='link'>
                  Signin
                </a>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccessForm;

import { Link } from 'react-router-dom'

function Login() {
  return (
    <form>
      <div className="flex mx-auto justify-center m-4 pb-3">
        <div className="border p-4">
          <div className="flex items-center justify-center">
            <img
              src="https://res.cloudinary.com/dsko6ntfj/image/upload/v1642399114/portal/web%20development%20beginners/05%20Project%20Airbnb/assets/logo-airbnb.png
"
              alt="airbnb logo"
              className="h-6 self-center"
            />
          </div>
          <div className="m-3 pb-3">
            <div>Email</div>
            <div>
              <input type="email" className="border" />
            </div>
          </div>
          <div className="m-3 pb-3">
            <div>
              <div>Password</div>

              <input type="password" className="border" />
            </div>
          </div>
          <div className="m-3 pb-3">
            <div className="flex items-center justify-center text-white bg bg-red-400 rounded-md p-4">
              <button>Login</button>
            </div>
          </div>
          <div className="flex justify-start m-3 pb-3 text-xs">
            <div>New to Airbnb?</div>
            <div>
              <Link
                to="/signup"
                className="text-red-500  text-xs  underline
              md:underline-offset-2 "
              >
                {' '}
                Create an Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Login

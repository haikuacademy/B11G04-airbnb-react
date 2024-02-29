import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="flex mx-auto justify-center m-20 rounded-lg">
      <div className="border rounder p-4">
        <div className="flex items-center justify-center text-red-500">
          <strong>airbnb</strong>
        </div>
        <div className="m-3 pb-3">
          <div>Email</div>
          <div>
            <form>
              <input type="email" className="border" />
            </form>
          </div>
        </div>
        <div className="m-3 pb-3">
          <div>
            <div>Password</div>
            <form>
              <input type="password" className="border" />
            </form>
          </div>
        </div>
        <div className="m-3 pb-3">
          <div className="flex items-center justify-center text-white bg bg-red-400 ">
            <form>
              <button>Login</button>
            </form>
          </div>
        </div>
        <div className="flex justify-start m-3 pb-3 text-xs">
          <div>New to Airbnb?</div>
          <div>
            <Link
              to="/Signup"
              className="text-red-500 ; text-xs ; underline
              md:underline-offset-2 "
            >
              {' '}
              Creat an Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

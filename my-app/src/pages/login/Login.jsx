import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "../login/login.scss"

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

    return (
        <div className="login">
      <div className="card">
        <div className="left">
          <h1>GET A SHIFT!</h1>
          <p>
          Social Media design to help construciton workers get a shift, share your workplace experecie, make network connection and employers to find workers.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
           </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};


export default Login;
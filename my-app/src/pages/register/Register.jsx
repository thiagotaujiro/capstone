import { Link } from "react-router-dom";
import "../register/register.scss"

const Register = () => {
    return (
        <div className="register">
      <div className="card">
        <div className="left">
          <h1>GET A SHIFT!</h1>
          <p>
          Social Media design to help construciton workers get a shift, share your workplace experecie, make network connection and employers to find workers.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
            </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};


export default Register;
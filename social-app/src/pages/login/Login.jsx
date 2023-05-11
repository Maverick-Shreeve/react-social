import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>hello world</h1>
          <p>
            gfiksdjgisghisghishgiushgiursdhgisuhgisughisughiursfhgisuhgisuhgisuhg
            uhsgbujhwsgbgujshbggsujhgs
          </p>
          <span>no account?</span>
          <button>Register</button>
        </div>
        <div className="right"></div>
        <h1>Login</h1>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

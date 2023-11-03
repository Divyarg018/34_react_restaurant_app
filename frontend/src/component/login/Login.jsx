import './Login.css';

function Login(props){

    function handleSubmit(e){
        e.preventDefault();
        console.log(e.target);
        console.log(e.target.username);
        console.log(e.target.username.value);
        console.log(e.target.password);
        console.log(e.target.password.value);
    }
    return(
        <div>
          <h1>Login Form</h1>
          <form onSubmit={handleSubmit}>
            Username: <input type='text' name='username' id='username' /><br />
            Password: <input type='password' name='password' id='password' />
            <input type='submit' value="login" />
          </form>
        </div>
    );
}

export default Login;
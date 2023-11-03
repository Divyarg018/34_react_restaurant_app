import './Login.css';

function Login(props) {

    function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target);
        console.log(e.target.username);
        console.log(e.target.username.value);
        console.log(e.target.password);
        console.log(e.target.password.value);
    }
    return (
        <div className='pri'>
            <div className='wrapper'>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className='container'>
                        <label htmlFor='username'><b>Username</b></label>
                        <input type='text' name='username' id='username' /><br />


                        <label htmlFor='password'><b>Password</b></label>
                        <input type='password' name='password' id='password' />

                        <button type='submit'>Login</button>
                    </div>
                </form>
            </div>
           
        </div>
    );
}

export default Login;
import './Login.css';
import {useNavigate} from 'react-router-dom'

function Login(props) {
    const navigate = useNavigate();
    async function handleSubmit(e) {
        e.preventDefault();
        let user = {
            username: e.target.username.value,
            password: e.target.password.value,

        }

        let background_url = 'http://localhost:3200/login';
        let options = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        }

        let response = await fetch(background_url, options);
        let responseData = await response.json();
        if (responseData.flag === true) {
            navigate('/restaurant');
        }
        else {
            alert(responseData.msg);
        }


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
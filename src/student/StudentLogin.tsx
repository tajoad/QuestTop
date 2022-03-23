import { useState } from 'react';
import './mystyles.css';

const StudentLogin: React.FC = () => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const user = {
            name: name,
            password: password
        }
        console.log(user);
    }
    return <div className="form">
        <div className="container">
            <div className="login">
                <h1>Login to Your Account</h1>
            </div>
            <form onSubmit={onSubmit}>
                <div>
                    <input className="input" value={name} type="text" placeholder="Username" onChange={event => setName(event.target.value)} />
                    <input className="input" value={password} type="password" placeholder="Password" name='password' onChange={event => setPassword(event.target.value)} />
                    <button className="btn">Login</button>
                </div>
            </form>
        </div>
    </div>;
}

export default StudentLogin;
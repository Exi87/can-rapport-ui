import React, {useContext, useState, useEffect} from 'react'
import AuthContext from '../../context/auth/authContext'

 const Register = (props) => {

const authContext = useContext(AuthContext);

const { register, isAuthenticated} = authContext

useEffect(()=>{
    if(isAuthenticated){
        props.history.push('/')
    }
    // eslint-disable-next-line
}, [isAuthenticated, props.history])


const [user, setUser]= useState({
    name:'',
    email:'',
    password:'',
    password1:''
})

const {name, email, password,password1} = user


const onChange = e =>
    setUser({
        ...user,
        [e.target.name]:e.target.value
    })



const onSubmit = e =>{
    e.preventDefault()
   
    register({
        name,
        email,
        password
    })
    
}
    return (
        <div className='form-container'>
        <h1>Account <span className='text-primary'> Register</span></h1>
        <form className='' onSubmit={onSubmit}>
            <div className='form-group'>
                <label htmlFor='name'>Name</label>

                <input type='text' name='name' value={name} onChange={onChange}  />
            </div>
            <div className='form-group'>
                <label htmlFor='email'>Email</label>

                <input type='email' name='email' value={email} onChange={onChange}  />
            </div>

            <div className='form-group'>
                <label htmlFor='password'>Password</label>

                <input type='password' name='password' value={password} onChange={onChange} minLength='6' />
            </div>


            <div className='form-group'>
                <label htmlFor='password2'>Confirm Password</label>

                <input type='password' name='password1' value={password1} onChange={onChange} minLength='6' />
            </div>
            <input type='submit' value='Register' className='btn btn-primary btn-block' />

        </form>
    </div>
    )
}

export default Register
import React from 'react';
import { GoogleLogin } from 'react-google-login'

/* =============================================
Login Page Function Component
This is the login page to be rendered as Login page
============================================== */

const clientId = 'YOUR_CLIENT_ID.apps.googleusercontent.com'

const Login = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault();

        let email = e.target.elements.email?.value;
        let password = e.target.elements.password?.value;

        console.log(email, password);
    };
    return (
        <div className='h-screen flex bg-gray-bg1 '>
        <div className='w-full max-w-lg m-auto bg-white rounded-xl border border-primaryBorder py-10 px-16 drop-shadow-2xl'>
            <h1 className='text-4xl font-medium text-primary mt-3 mb-8 text-center'>
                Login
            </h1>

            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                        id='email'
                        placeholder='email@example.com'
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                        id='password'
                        placeholder='..............'
                    />
                </div>

                <div className='flex justify-center items-center mt-2'>
                    <button
                        className={`w-full bg-black py-2 px-4 text-sm text-white rounded border border-black focus:outline-none focus:border-green-dark`}
                    >
                        Login
                    </button>
                </div>

                <p className='mt-4 flex justify-center'>Or</p>
                
                <GoogleLogin className='mt-4 flex justify-center  border border-black w-[100%] pr-[10px]  vsm: text-xs w-42 h-10 ml-1 bsm:w-50'
                    clientId={clientId}
                    buttonText = 'Login with Google Account'    
                />
               <p className='mt-4 ml-10 text-sm'>New to Phantom?   <a
                href="#!"
                className="text-blue-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                >Signup</a
              > Forgot password    <a
                href="#!"
                className="text-blue-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                >reset</a
              ></p>   
                </form>
        </div>
    </div>
    );
};

export default Login;
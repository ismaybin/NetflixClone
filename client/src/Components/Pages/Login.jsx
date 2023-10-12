import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext';

const Login = () => {

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [Error, setError] = useState('');
    const {user, login} = UserAuth();
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try{
            await login(email, password);
            navigate('/')
        }catch(error){
            console.log(error);
            setError(error.message)
        }
    };

  return (
    <>
        <div className=' w-full h-screen'>
            <img className=' hidden sm:block absolute w-full h-full object-cover'
             src="https://assets.nflxext.com/ffe/siteui/vlv3/530fc327-2ddb-4038-a3f0-2da2d9ccede1/1e655120-56b8-48d2-be9e-56d08cdacf0f/BD-en-20230619-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="/" />

             <div className=' bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
             <div className=' fixed w-full px-4 py-24 z-50'>
                <div className=' max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                    <div className=' max-w-[320px] mx-auto py-16'>
                        <h1 className=' text-3xl font-bold'>Sign In</h1>
                        {Error ? <p className='p-3 bg-red-600 my-3'>{Error}</p> : null}
                        <form onSubmit={handleSubmit} className=' w-full flex flex-col py-4'>
                            <input onChange={(e) => setemail(e.target.value)} className=' p-3 my-2 bg-gray-700 rounded' type="email" placeholder='email' autoComplete='email' />
                            <input onChange={(e) => setpassword(e.target.value)} className=' p-3 my-2 bg-gray-700 rounded' type="password" placeholder='password' autoComplete='current-password' />

                            <button className=' bg-red-600 py-3 my-6 rounded font-bold'>Sugn In</button>

                            <div className=' flex justify-between items-center text-sm text-gray-600'>
                                <p>
                                    <input className=' mr-2' type="checkbox" />
                                    Remember me
                                </p>

                                <p>Need Help?</p>
                            </div>

                            <p className=' py-8'>
                                    <span className=' text-gray-600 mr-2'>
                                       New to Netflix?
                                    </span>{""}
                                    <Link to ='/signUp'>Sign Up</Link>
                            </p>
                        </form>
                    </div>
                </div>
             </div>
        </div>


    </>
  )
}




export default Login

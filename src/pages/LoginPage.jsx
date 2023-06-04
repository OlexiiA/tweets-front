import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkIsAuth, loginUser } from '../redux/auth/authSlice';
import { toast } from 'react-toastify';

const LoginPage = () => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const { status } = useSelector((state) => state.auth);
  const isAuth = useSelector(checkIsAuth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (status) {
      toast(status)
    }
    if (isAuth) {
      navigate('/')
    }
  }, [status, isAuth, navigate]);

  const handleSubmit = () => {
    try {
      dispatch(loginUser({ email, password }))
      setemail('')
      setPassword('')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={(e) => e.preventDefault()} className='w-1/4 h-60 mx-auto mt-40'>
      <h1 className="text-lg text-white text-center">Login</h1>
      <label className="text-xs text-white">
        email:
        <input
          type="text"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder="email"
          className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700"
        />
      </label>
      <label className="text-xs text-white">
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700"
        />
      </label>
      <Link to='/register' className='flex justify-center items-center text-xs text-white mt-4 hover:text-blue-700 whitespace-nowrap'>
        Don`t have an account? Register <span className='text-blue-700 ml-1'>here</span>
      </Link>
      <div className="flex gap-8 justify-center mt-4">
        <button type="submit" className="flex justify-center items-center bg-blue-700 text-xs text-white rounded-sm py-2 px-4" onClick={handleSubmit}>
          Login
        </button>
      </div>
    </form>
  );
}

export default LoginPage;


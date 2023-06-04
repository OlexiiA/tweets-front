import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { checkIsAuth, logout, getUserEmail } from '../redux/auth/authSlice.js'
import { toast } from 'react-toastify'


export const NavBar = () => {

  const isAuth = useSelector(checkIsAuth);
  const userEmail = useSelector(getUserEmail);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logoutHandler = () => {
    dispatch(logout())
    window.localStorage.removeItem('token')
    navigate('/login')
    toast('You are logged out')
  }

  return (
    <div className="flex p-4 justify-between items-center shadow-lg">
      {isAuth && (<div className="flex justify-center items-center text-sm text-white ">
        Welcome, {userEmail}
      </div>)}

      {isAuth && (<ul className=" flex gap-8">
        <li>
          <NavLink to='/' className={'hover:bg-green-600 focus:text-white active:bg-blue-600 focus:outline-none focus:ring focus:ring-violet-300 rounded-md p-1'}>
            Main page
          </NavLink>
        </li>
        <li>
          <NavLink to='/tweets' className={' hover:bg-green-600 focus:text-white active:bg-blue-600 focus:outline-none focus:ring focus:ring-violet-300 rounded-md p-1'}>
            My tweets
          </NavLink>
        </li>
        <li>
          <NavLink to='/new' className={' hover:bg-green-600 focus:text-white active:bg-blue-600 focus:outline-none focus:ring focus:ring-violet-300 rounded-md p-1'}>
            Add tweet
          </NavLink>
        </li>
      </ul>)}

      <div className={`flex justify-center items-center bg-blue-600 text-white rounded-md px-4 ${isAuth ? 'hover:bg-red-700' : 'hover:bg-green-700'}`}>
        <button onClick={logoutHandler}> {isAuth ? 'LogOut' : 'LogIn'}</button>
      </div>
    </div>
  );
}



import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, lazy, Suspense } from "react";
import { useDispatch } from 'react-redux';
import { MagnifyingGlass } from 'react-loader-spinner';
import { Layout } from './components/Layout';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { getMe } from './redux/auth/authSlice';

const MainPage = lazy(() => import('./pages/MainPage'))
const AllTweetsPage = lazy(() => import('./pages/AllTweetsPage'))
const TweetPage = lazy(() => import('./pages/TweetPage'))
const EditTweetPage = lazy(() => import('./pages/EditTweetPage'))
const AddTweetPage = lazy(() => import('./pages/AddTweetPage'))

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe())
  }, [dispatch]);

  return (
    <Suspense fallback={<MagnifyingGlass
      visible={true}
      height="80"
      width="80"
      ariaLabel="MagnifyingGlass-loading"
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
      wrapperClass="MagnifyingGlass-wrapper"
      glassColor='#c0efff'
      color='#e15b64'
    />}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path='tweets' element={<AllTweetsPage />} />
          <Route path=':id' element={<TweetPage />} />
          <Route path=':id/edit' element={<EditTweetPage />} />
          <Route path='new' element={<AddTweetPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<RegisterPage />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Route>
      </Routes>
    </Suspense>
  )

}

export default App

import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUserWithStoredToken } from './store/user/thunks';
import { Routes, Route } from 'react-router-dom';
import { Navigation, MessageBox } from './components';
import {
  Login,
  SignUp,
  Citypage,
  Experiencepage,
  Profilepage,
  Homepage,
} from './pages';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div>
      <Navigation />
      <MessageBox />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/city/:id" element={<Citypage />} />
        <Route path="/experience/:id" element={<Experiencepage />} />
        <Route path="/user/:id" element={<Profilepage />} />
      </Routes>
    </div>
  );
}

export default App;

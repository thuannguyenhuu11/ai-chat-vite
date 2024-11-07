import { Outlet } from 'react-router-dom';
import SideBar from './components/SideBar';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addChat } from './store/chatSlide';

function App() {
  const dispatch = useDispatch();
  const { data } = useSelector(state => state.chat);

  useEffect(() => {
    dispatch(addChat());
  }, []);

  useEffect(() => {
    console.log('data', data);
  }, [data]);

  return (
    <>
      <div className="flex h-screen bg-primaryBg-default">
        <div className="hidden xl:block">
          <SideBar />
        </div>

        <Outlet />
      </div>
    </>
  );
}

export default App;

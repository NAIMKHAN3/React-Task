import logo from './logo.svg';
import './App.css';
import Progressbar from './components/Progressbar';
import Activity from './components/Activity';
import OrderInfo from './components/OrderInfo';
import OverviewChart from './components/OverviewChart';
import Overview from './components/Overview';
import UserActivity from './components/UserActivity';
import OrderStatus from './components/OrderStatus';
import TopOrder from './components/TopOrder';
import { FaAlignJustify } from 'react-icons/fa';


function App() {
  return (
    <div className=''>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content p-4">

          <label htmlFor="my-drawer-2" className=" drawer-button lg:hidden"><FaAlignJustify className='text-2xl my-3'></FaAlignJustify></label>
          <div className='lg:grid grid-cols-1 lg:grid-cols-3 flex flex-col-reverse'>
            <div className='lg:h-[300px] w-full col-span-1 lg:col-span-2'>
              <OrderInfo></OrderInfo>

              <div className='grid grid-cols-1 lg:grid-cols-3 m-3 shadow-xl rounded-lg'>
                <div className=''>
                  <Overview></Overview>
                </div>
                <div className='col-span-2'>
                  <OverviewChart></OverviewChart>
                </div>

              </div>
              <div className='grid grid-cols-1 lg:grid-cols-3 m-3'>
                <UserActivity></UserActivity>
                <OrderStatus></OrderStatus>
                <TopOrder></TopOrder>

              </div>


            </div>
            <div className=' rounded-lg shadow-lg'>
              <img className='w-full' src="https://i.pinimg.com/originals/3a/77/24/3a772460c22160b4f62d14bed618b123.jpg" alt="" />
              <div className="avatar flex justify-center mt-[-50px]">
                <div className="w-24 lg:w-24 rounded-full">
                  <img src="https://i.pinimg.com/originals/d4/52/2e/d4522ed81dc636e091f9a452f881e327.jpg" />
                </div>

              </div>
              <div className='flex flex-col my-5 justify-center items-center'>
                <h1 className='font-bold text-xl'>Kajal Agarwal</h1>
                <p>Product Designer</p>
              </div>
              <div className='grid grid-cols-1 lg:grid-cols-2 my-3 border-b-2'>
                <div className='flex flex-col justify-center items-center border-r-2'>
                  <h1 className='font-bold text-xl'>1,269</h1>
                  <p>Products</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <h1 className='font-bold text-xl'>5.2k</h1>
                  <p>Followers</p>
                </div>
              </div>
              <Progressbar></Progressbar>
              <Activity></Activity>
            </div>
          </div>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-slate-900 text-white">
            <p>Menu</p>
            <li><a>Deshboard</a></li>
            <li><a>Ecommerce</a></li>
            <li><a>Sass</a></li>
            <li><a>Crypto</a></li>
            <h1>Applications</h1>
            <li><a>Celender</a></li>
            <li><a>Chat</a></li>
            <li><a>File Manager</a></li>
            <li><a>Ecommerce</a></li>
            <li><a>Email</a></li>
            <li><a>invoices</a></li>
            <li><a>Projects</a></li>
            <p>Layout</p>
            <p>Pages</p>
            <li><a>Contacts</a></li>
            <li><a>Authentication</a></li>
          </ul>

        </div>
      </div>

    </div>
  );
}

export default App;

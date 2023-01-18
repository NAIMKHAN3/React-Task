import logo from './logo.svg';
import './App.css';
import Progressbar from './components/Progressbar';
import Activity from './components/Activity';
import OrderInfo from './components/OrderInfo';
import OverviewChart from './components/OverviewChart';
import Overview from './components/Overview';


function App() {
  return (
    <div className=''>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content p-4">

          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
          <div className='grid grid-cols-3'>
            <div className='border h-[300px] w-full col-span-2'>
              <OrderInfo></OrderInfo>

              <div className='grid grid-cols-3 m-3'>
                <div className='border border-sky-700'>
                  <Overview></Overview>
                </div>
                <div className='col-span-2 border border-green-600'>
                  <OverviewChart></OverviewChart>
                </div>

              </div>
              <div className='grid grid-cols-3 m-3'>


              </div>
              <h1>This is kamrul</h1>


            </div>
            <div className='border border-blue-500 h-full w-full'>
              <img src="https://i.pinimg.com/originals/3a/77/24/3a772460c22160b4f62d14bed618b123.jpg" alt="" />
              <div className="avatar flex justify-center mt-[-50px]">
                <div className="w-12 lg:w-24 rounded-full">
                  <img src="https://i.pinimg.com/originals/d4/52/2e/d4522ed81dc636e091f9a452f881e327.jpg" />
                </div>

              </div>
              <div className='flex flex-col justify-center items-center'>
                <h1 className='font-bold text-xl'>Kajal Agarwal</h1>
                <p>Product Designer</p>
              </div>
              <div className='grid grid-cols-2 my-3 border-b-2'>
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

            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
          </ul>

        </div>
      </div>

    </div>
  );
}

export default App;

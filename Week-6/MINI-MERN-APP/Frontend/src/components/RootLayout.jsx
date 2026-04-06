import Header from './Header'
import {Outlet} from 'react-router'

function RootLayout() {
  return (
    <div>
      <Header />
      <div className='min-h-screen mx-20  mt-2 p-20 bg-gray-300'>
        <Outlet />
      </div>
    </div>
  )
}

export default RootLayout
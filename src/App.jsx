import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'

function App() {

  return (
    <div>
      <Header></Header>
      <div className='min-h-[calc(100vh-136px)]'>
        <Outlet></Outlet>
      </div>
      {/* {footer} */}
    </div>
  )
}

export default App

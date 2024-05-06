import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'

function App() {

  return (
    <div>
      <Header></Header>
      <div>
        <Outlet></Outlet>
      </div>
      {/* {footer} */}
    </div>
  )
}

export default App

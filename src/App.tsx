import './App.css'
import Nav from './component/Nav'
import Toolbar from './component/Toolbar'
import Footer from './component/Footer'
import Mainsheet from './component/Mainsheet'


function App() {

  return (
    <>
      <div className='w-[1440px] h-[1024px]'>
        <Nav />
        <Toolbar />
        <Mainsheet />
        <Footer />
      </div>

    </>
  )
}

export default App

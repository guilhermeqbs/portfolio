import './App.css'
import Header from './components/header/'
import Avatar from './components/avatar/index.jsx'

function App() {
  

  return (
    <div className="container bg-gray-700 min-h-screen flex flex-col items-center">
      <div className='mb-8'>
        <Header/>
      </div>
      
      <Avatar  />
    </div>
  )
}

export default App

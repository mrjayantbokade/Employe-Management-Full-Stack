import './App.css'
import Login from "./components/Login.jsx"
import Header from "./components/Header.jsx"
import Dashboard from "./components/Dashboard.jsx";


function App() {

  return (

      <>

          <div className={`bg-gray-700 h-screen w-screen`}>
              <Login />
              {/*<Header />*/}
              {/*<Dashboard />*/}

          </div>

      </>
  )
}

export default App
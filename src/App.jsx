import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { InputTest } from './pages/InputTest'
import { Home } from './pages/Home'
import { InputTest1 } from './components/InputTest/InputTest1'
import { InputTest2 } from './components/InputTest/InputTest2'
import Layout from './pages/Layout'


function App() {



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="inputtest" element={<InputTest />}>
              <Route path="test1" element={<InputTest1 />} />
              <Route path="test2" element={<InputTest2 />} />
            </ Route>
          </ Route >
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

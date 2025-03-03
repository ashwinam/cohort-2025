import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <>
    <BrowserRouter>
        <Link to={'/'}>home</Link>
        <Link to={'/about'}>about</Link>
        <Link to={'/services'}>services</Link>
        <br />
      <Routes>
        <Route index element={<Index />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
      </Routes>
    </BrowserRouter>
    </>
  )
};

function Index() {
  return(
    <>
      From Home Page
    </>
  )
}

function About() {
  return(
    <>
      Its an about page
    </>
  )
}

function Services() {
  return (
    <>
      This is a services
    </>
  )
}

export default App;
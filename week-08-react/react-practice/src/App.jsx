import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

const App = () => {

  return (
    <>
      <BrowserRouter>
        
        <br />
        <Routes>
          <Route path="/" element={<Index />}>
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

function Index() {
  return <>
  <Link to={"/"}>home</Link> | 
  <Link to={"/about"}>about</Link> | 
  <Link to={"/services"}>services</Link>

  <br />

  <Outlet />

  <h2>Footer here</h2>
  
  </>;
}

function About() {
  return <>Its an about page</>;
}

function Services() {
  return <>This is a services</>;
}

function Error() {
  const navigate = useNavigate();

  
  return <>
  Page Not Found
  <button onClick={() => navigate('/')}>Go back</button>
  </>;
}

export default App;

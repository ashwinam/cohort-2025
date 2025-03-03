import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Link to={"/"}>home</Link>
        <Link to={"/about"}>about</Link>
        <Link to={"/services"}>services</Link>
        <br />
        <Routes>
          <Route index element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

function Index() {
  return <>From Home Page</>;
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

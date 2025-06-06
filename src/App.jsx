import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ThemeSwitcher from "./components/ThemeSwitcher.jsx";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {

  return (
      <Router>
          <ThemeSwitcher />
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
      </Router>

  )
}

export default App







// const [count, setCount] = useState(0)
//
// <>
// <div>
// <a href="https://vite.dev" target="_blank">
//     <img src={viteLogo} className="logo" alt="Vite logo" />
//     </a>
// <a href="https://react.dev" target="_blank">
//     <img src={reactLogo} className="logo react" alt="React logo" />
// </a>
// </div>
// {/*<h1>Vite + React</h1>*/}
// <h1>LPSU Kavindu Senarathna</h1>
// <div className="card">
//     <button onClick={() => setCount((count) => count + 1)}>
//         count is {count}
//     </button>
//     <p>
//         Edit <code>src/App.jsx</code> and save to test HMR
//     </p>
// </div>
// <p className="read-the-docs">
//     Click on the Vite and React logos to learn more
// </p>
// </>
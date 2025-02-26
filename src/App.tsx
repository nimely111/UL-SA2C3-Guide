import ulLogo from './assets/logo.png'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div>
        <Header />
        <a href="#" target="_blank">
          <img src={ulLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>STUDENT ACADEMIC ADVISEMENT AND CAREER COUNCELING CENTER</h1>
      <p>Welcome to the University of Liberia Student Academic Advisory and Career Counseling Center (UL-SA <sup>2</sup>C<sup>3</sup>)</p>
      <Footer />

    </>
  )
}

export default App;

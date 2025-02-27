import ulLogo from './assets/logo.png'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div>
        <Header />
          <img className="bg-center" src={ulLogo} alt="ul logo" />
      </div>
      <h1>STUDENT ACADEMIC ADVISEMENT AND CAREER COUNCELING CENTER</h1>
      <p>Welcome to the University of Liberia Student Academic Advisory and Career Counseling Center (UL-SA <sup>2</sup>C<sup>3</sup>)</p>
      <Footer />

    </>
  )
}

export default App;

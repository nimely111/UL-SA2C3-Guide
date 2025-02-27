import ulLogo from './assets/logo.png'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div >
        <Header />
          <div className="h-36 flex items-center justify-center mt-36">
          <img src={ulLogo} alt="ul logo" />
          </div>
      </div>
      <h1>STUDENT ACADEMIC ADVISEMENT AND CAREER COUNCELING CENTER</h1>
      <p>Welcome to the University of Liberia Student Academic Advisory and Career Counseling Center (UL-SA <sup>2</sup>C<sup>3</sup>)</p>
      <Footer />

    </>
  )
}

export default App;

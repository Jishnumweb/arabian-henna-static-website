import Contact from "./components/Contact"
import Entry from "./components/Entry"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Productcard from "./components/Productcard"
import Review from "./components/Review"
import Services from "./components/Services"
import Visit from "./components/Visit"


function App() {

  return (
    <>
      <div className="homepage-view">

        <div className="header-view container">
          <Header />
        </div>

        <div className="entry-view container mt-2" id="home">
          <Entry />
        </div>

        

        <div className="service-view container mt-4" id="services">
          <div className="service-view-heading ">
            <h2 className="m-0 whychoose">WHY CHOOSE US</h2>
            <p>At Your Brand Name, we believe in the artistry and tradition of henna. Our carefully curated selection of high-quality henna powders, cones, and accessories ensures you get the best results every time. Whether you’re a professional artist or a first-time user, we’re dedicated to providing top-tier products that enhance your experience. Here’s why you’ll love us</p>

          </div>
          <Services />

        </div>
        <div className="product-view container mt-4" id="products">
          <div className="product-view-heading text-center">
            <h2 className="m-0">ESSENTIAL HENNA SUPPLIES</h2>
            <p>EVERYTHING YOU NEED IN ONE PLACE</p>
          </div>
          <Productcard />
        </div>

        <div className="visit-view container " id="work">
          <Visit />

        </div>

        <div className="review-view container mt-4" id="reviews">
          <h2 className="mb-3">WHAT OUR CLIENTS SAY ABOUT US</h2>
          <Review />

          <div className="contact-view container" id="contact">
            <h2>HAVE QUESTIONS? REACH OUT!</h2>
            <p>I’d love to hear from you! Whether you’re looking to book a henna appointment, have any questions about my designs, or simply want to chat, feel free to drop me a message below. I’ll get back to you as soon as possible.</p>
            <Contact />
          </div>


        </div>

        <div className="footer-view  mt-3">
          <Footer/>

        </div>





      </div>

    </>
  )
}

export default App

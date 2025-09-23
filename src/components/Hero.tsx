import Bg from "./BgImg";

const Hero = () => (
  <section id="hero" className="hero-gradient text-white container p-0  mb-5 rounded text-center d-flex justify-content-center align-items-center " style={{...Bg("https://aurorasystems.sirv.com/2147626521.jpg"), height:"80vh"}}>
    <div className="opacity-bg h-100  d-flex justify-content-center align-items-center p-0 m-0  rounded">
        <div className="p-5">

        <h1 className="display-1 fw-bold">Champions Accounting Services</h1>
        <h3>Professional Accounting
 Services for Zimbabwe's
 Growing Businesses</h3>
 <p>Champions Accounting Services provides comprehensive outsourced accounting solutions to
 small and medium-sized companies, helping you focus on growing your business.</p>
 <a href="#contact"><button className="rounded p-btn btn ">Get Started</button></a>
         </div>

    </div>
  </section>
);

export default Hero;
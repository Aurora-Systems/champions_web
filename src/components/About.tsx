import Bg from "./BgImg";

const About = () => {
    return (
        <section id="about" className="mb-5 text-center container">
            <div className=''>
                <h1 className="fw-bold display-2">About CAS</h1>
                <p> Your trusted partner for comprehensive accounting solutions in
                    Zimbabwe</p>
                <div className="row mb-3">
                    <div className="col-sm rounded" style={{ ...Bg("https://aurorasystems.sirv.com/2147626425.jpg") }}>

                    </div>
                    <div className="col-sm text-start">
                        <h3>
                            Who We Are
                        </h3>
                        <p >Champions Accounting Services is a Zimbabwean registered company that
                            provides outsourced accounting services to small and medium-sized
                            companies. We serve as an entire accounting department for clients who do
                            not have the time, need, or expertise to maintain their own accounting staff.</p>
                        <p>
                            Our company helps clients overcome business setbacks that arise when their
                            accounting issues are not in order. If you are an entrepreneur looking for
                            accounting that helps you manage and grow your business, Champions
                            Accounting Services has the right solutions for you.
                        </p>
                    </div>
                </div>
                <div className="row ">
                    <div className=" p_bg rounded p-5 mb-3 text-white">

                        <h3>Our Vision & Mission</h3>
                        <p>Champions Accounting Services
                            seeks to provide a full suite of
                            accounting services to small
                            businesses in Zimbabwe,
                            allowing business owners to
                            concentrate on business
                            operations while we handle their
                            financial management needs</p>
                    </div>

                </div>
                <div className="row gap-3 mb-3 text-center">
                    <div className="col-sm p-5 p_bg text-white rounded">
                        <h5>Control Costs</h5>
                        <p>Optimize your financial operations and
                            reduce unnecessary expenses</p>
                    </div>
                    <div className="col-sm p-5 p_bg text-white rounded">
                        <h5>Increase Cash Flow</h5>
                        <p>Improve your working capital
                            management and financial planning</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

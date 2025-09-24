import { useState } from 'react';


export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    // const router = useNavigate();

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const closeNavbar = () => {
        setIsOpen(false);
    };

    // const handleNavigation = (url:string) => {
    //     // router(url);
    //     closeNavbar();
    // };

    return (
        <nav className="rounded mt-3 z-1  navbar navbar-expand-lg  position-sticky top-0 pt-3 w-100 ">
            <div className="container nav-design p-3 rounded">
                <a href="/" onClick={closeNavbar}>
                <img  src="https://aurorasystems.sirv.com/champions_logo.png" className="mt-1 me-3 rounded  img-fluid" width="55"/>
                </a>
                <button className="navbar-toggler bg-white border-0" type="button" onClick={toggleNavbar}>
                    <i className="bi bi-list p-txt"></i>
                </button>
                
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href={"#hero"} onClick={closeNavbar}>Home</a> 
                        </li>
                      
                        <li className="nav-item">
                            <a className="nav-link" href={"#about"} onClick={closeNavbar}>About</a> 
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={"#services"} onClick={closeNavbar}>Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={"#values"} onClick={closeNavbar}>Values</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={"#team"} onClick={closeNavbar}>Team</a>
                        </li>
                       
                    </ul>
                    <a href={"#contact"} onClick={closeNavbar}><button className="btn p-btn rounded w-sm-100">Contact Us</button></a>
                </div>
            </div>
        </nav>
    );
};


// export const Footer=()=>{
//     return(
//         <div>

//         <div className='row bg-white gap-2 text-dark p-2 vw-100'>
//               <div className='col-sm  col col-sm'>
//                 <div>
//                     <h6 className='mb-3'>Contact Details</h6>
//                 </div>
//                 <p><i className="bi bi-envelope me-2 "></i><a href="mailto:support@aurorasystems.co.zw:">support@aurorasystems.co.zw</a></p>
//                 <p><i className="bi bi-telephone me-2"></i><a href="tel:+263780040000">+263 78 004 0000</a></p>
//                 <p><i className="bi bi-telephone me-2"></i><a href="tel:+1 (629) 276-5611">+1 (629) 276-5611</a></p>
//                 <div className='d-flex f flex-row gap-3'>
//                 <p><a href="https://www.linkedin.com/company/aurorazw" target="_blank" ><i className="bi bi-linkedin me-2" ></i></a></p>
//                 <p><a href="https://www.facebook.com/AuroraSystemsAfrica/" target="_blank" ><i className="bi bi-facebook me-2" ></i></a></p>
//                 <p><a href="https://www.instagram.com/aurorasystems_/" target="_blank" ><i className="bi bi-instagram me-2" ></i></a></p>
//                 <p><a href="https://x.com/AuroraSystemsZW" target="_blank" ><i className="bi bi-twitter-x me-2" ></i></a></p>
//                 <p><a href="https://wa.me/263780040000" target="_blank" ><i className="bi bi-whatsapp me-2" ></i></a></p>
//                 <p><a href="https://aurorasystems.substack.com" target="_blank" ><i className="bi bi-substack me-2" ></i></a></p>


//                 </div>
                

//             </div>
//              <div className='col-sm  col col-sm'>
//                 <div>
//                     <h6 className='mb-3'>Location</h6>
//                 </div>
//                 <p><i className="bi bi-geo-alt me-2"></i>1111B S Governors Ave <br/><span className='ms-4'> STE 37386, Dover</span><br/><span className='ms-4'>Delaware</span><br/><span className='ms-4'>United States of America</span></p>
//                 <p><i className="bi bi-geo-alt me-2"></i>258 Smuts Rd<br/><span className='ms-4'>Waterfalls</span><br/><span className='ms-4'>Harare</span><br/><span className='ms-4'>Zimbabwe</span></p>
//             </div>
          
//             <div className="col-sm">
//                 <div className='mb-3'>
//                     <h6 >Services</h6>
//                 </div>
//                 {/* <p><a href={page_links.services.ai}>AI and Automation</a></p>
//                 <p><a href={page_links.services.web_dev}>Web Development</a></p>
//                 <p><a href={page_links.services.ux}>User Interface design | UI/UX</a></p>
//                 <p><a href={page_links.services.mobile_dev}>Mobile App Development</a></p>
//                 <p><a href={page_links.services.custom_dev}>Custom Software Development</a></p> */}
//             </div>
//             <div className="col-sm col-md-1" >
//                 <div className='mb-3'>
//                     <h6>Pages</h6>
//                 </div>
//                 <p><a href={page_links.roadmap}>Roadmap</a></p>
//                 <p><a href={page_links.portfolio}>Porfolio</a></p>
//                 <p><a href={page_links.careers}>Careers</a></p>
//                 <p><a href={page_links.blog}>Blog</a></p>
//                 <p><a href={page_links.contact}>Contact us</a></p>
//             </div>
//             <div className="col-sm text-center">
               
//                     <Image src="https://ngratesc.sirv.com/website/aurora_logo.png" width={30} height={25} className='img-fluid' alt="Aurora logo"/>
//                     <h6>Aurora</h6>
                
//                 <iframe src="https://aurorasystems.substack.com/embed"  ></iframe>
//             </div>
//         </div>
//         <div className='text-center bg-black text-white p-2'>
//             <span>Aurora Systems is a subsidiary of <a href="https://attributeai.xyz">Attribute Ai, LLC</a></span>
//         </div>
//                 </div>
//     )
// }
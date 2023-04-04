import ResidentialPhotoTest from '../images/ResidentialPhotoTest.jpg';
import ResidentialPhotoTest2 from '../images/ResidentialPhotoTest2.jpg';
import Carousel from 'react-bootstrap/Carousel';
import { CarouselItem } from 'react-bootstrap';

function Projects() {
    return (
          <div className="container-fluid ProjectsMainContainer">
            <div className="row">
            <div className="ProjectsMainInfo col-sm">
                <div>
                    <h1 className="ProjectsHeader">
                        Residential Projects
                    </h1>
                    <div className="ColorBarProjects"></div>
                </div>
                <div>
                    <h3 className="ResidentialProjectSlogan">
                        For all your Design, Build, <br/> and Remodel projects <br/> under one roof.
                    </h3>
                </div>
                
                <div className="ResidentialProjectDesc">
                    <p>
                        The foundation of our company began <br/> with designing and building custom, <br/> semi custom, and track homes. From <br/> mountainside to ocean side, from <br/> exclusive gated communities to <br/> beautiful in-law-setups, building homes <br/> has remained a strong presence <br/> throughout our years in business.  Our <br/> experience ranges from elegant 13,000 <br/> square foot custom homes on down to <br/> beautiful 3 bedroom 2 bath homes. <br/> From new construction to minor and <br/> extensive remodels, we are your one- <br/> stop design and build firm. 
                    </p>
                </div>
            </div>
            <div className="CarouselProject col-lg">               
          <Carousel>
                <CarouselItem>
                <div className="ResidentialPhoto">
                    <img
                        className="d-block w-100"
                        id="ResidentialPhoto"
                        src={ResidentialPhotoTest}
                        alt="First slide"
                    />
                </div>
                </CarouselItem>
                <CarouselItem className="CarouselProject">
                <div className="ResidentialPhoto">
                    <img
                        className="d-block w-100"
                        id="ResidentialPhoto"
                        src={ResidentialPhotoTest2}
                        alt="First slide"
                    />
                </div>
                </CarouselItem> 
            </Carousel>
          </div>
            </div>
            

           
          </div>
          
          
     
    );
  }
  
  export default Projects;
import HomePageCarousel from './HomePageCarousel';
import { Link } from 'react-router-dom';


function HomePage() {
    return (
      <div className="HomePage">
        <div>
            <HomePageCarousel />
        </div>
          <div className="HomeSlogan">
              
          </div>
          <div className="HomePageBoxes">
            <div className="HomePageBox1">
                <h4 className="HomePageBox1Header text-light">               
                    DESIGN & PLANNING
                </h4>
                <p className="HomePageBox1Desc text-light">
                    Construction is the <br/> implementation of a <br/> design envisioned by you <br/> the client, contractor, <br/> architects and engineers.
                    <Link to="clientservices">                   
                        <a class="nav-link text-light" href="#">Read more</a>                   
                    </Link>
                </p>
            </div>
            <div className="HomePageBox2">
                <h4 className="HomePageBox2Header text-light">               
                    PRE - CONSTRUCTION
                </h4>
                <p className="HomePageBox2Desc text-light">
                    This pre-construction <br/> planning stage involves the <br/> definition of the project, <br/> the identification of potential issues, <br/> planning and scheduling, <br/> the scope, cost estimation, <br/> and analysis of needs for the job.
                </p>
            </div>
            <div className="HomePageBox3">
                <h4 className="HomePageBox3Header text-light">               
                    CONSTRUCTION
                </h4>
                <p className="HomePageBox3Desc text-light">
                    Construction is more than just knowing <br/> how to build a quality and sustainable <br/> building. But also developing a solid <br/> relationship with our clients built on trust, <br/> communication, and outstanding quality. <br/> 
                </p>
            </div>
          </div>
      </div>
    );
  }
  
  export default HomePage;
  
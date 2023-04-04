import designplanningimage from "../images/designplanningimage.jpg";
import preconstructionimage from "../images/preconstructionimage.jpg";
import constructionmanagementimage from "../images/constructionmanagementimage.png";
import constructionimage from "../images/constructionimage.jpg";




function ClientServices() {
    return (
        <div>
           <div>
                <div className="MainHeaderContent">
                    <h1 className="MainHeaderClient">
                        Client Services
                    </h1>
                    <div className="ColorBarClientServices"></div>
                </div>
                <div>
                    <h4 className="MainHeaderSlogan">
                        Innovation, Collaboration, and Commitment to Excellence, through our Meticulous <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;efforts and Critical Thinking we set the bar in Customer Satisfaction
                    </h4>
                </div>
           </div>
           <div class="container">
                <div class="row">
                    <div class="col-sm DesignCol">
                        <div>
                            <img
                                className="d-block w-100 DesignImage"
                                src={designplanningimage}
                            />
                        </div>
                        <div className="DesignHeader">
                            <h3>Design and Planning</h3>
                        </div>
                        <div className="DesignDesc">
                            In the planning of your project, it is <br/> important to recognize the close <br/> relationship between design and <br/> construction. These processes can <br/> best be viewed as an integrated <br/> system. Broadly speaking, design is <br/> a process of creating the description <br/> of a new facility, usually represented <br/> by detailed plans and specifications; <br/> construction planning is a process <br/> of identifying activities and <br/> resources required to make the <br/> design a physical reality. Hence, <br/> construction is the implementation of <br/> a design envisioned by you, the <br/> client, as well as architects and <br/> engineers. In both design and <br/> construction, this collaboration is <br/> essential in creating and delivering a <br/> finished product that meets <br/> expectations.
                        </div>
                    </div>
                    <div class="col-sm PreconstructionCol">
                        <div>
                            <img
                                className="d-block w-100 PreconstructionImage"
                                src={preconstructionimage}
                            />
                        </div>
                        <div className="PreconstructionHeader">
                            <h3>Preconstruction Meeting</h3>
                        </div>
                        <div className="PreconstructionDesc">
                            This pre-construction planning <br/> stage involves the definition of the <br/> project, the identification of potential <br/> issues, planning and scheduling, <br/> the scope, cost estimation, and analysis <br/> of needs for the job.
                            <br/>
                            <br/>
                            <strong>
                                Here are some of the items we discuss during the pre construction phase:
                            </strong>                           
                            <br/>
                            <br/>
                            <ul>
                                <li>Initial meeting to discuss the project</li>
                                <li>Planning the design</li>
                                <li>Estimating costs and offering cost-saving options</li>
                                <li>Managing project scope</li>
                                <li>Identifying potential issues & outlining solutions</li>
                                <li>Evaluating soil condition on site</li>
                                <li>Checking existing utilities</li>
                                <li>Determining equipment required</li>
                                <li>Check for green building options and viability</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm ConstructionManagementCol">
                        <div>
                            <img
                                className="d-block w-100 ConstructionManagementImage"
                                src={constructionmanagementimage}
                            />
                        </div>
                        <div className="ConstructionManagementHeader">
                            <h3>Construction Management</h3>
                        </div>
                        <div className="ConstructionManagementDesc">
                            At MetaCrit Construction we provide <br/> critical Construction Management <br/> for your project. Whether we are <br/> your prime contractor or hired by <br/> you to manage your existing project, <br/> we bring in the skills to ensure your <br/> project meets and exceeds your <br/> expectations. We provide critical <br/> guidance in Problem Solving, Cost <br/> Management, Time Management, <br/> Quality Management, Contract <br/> Administration, and Safety <br/> Management. Our proven <br/> techniques to oversee the planning, <br/> design, and construction of your <br/> project gives you, the client, a total <br/> piece of mind. We understand that <br/> our success is not based on volume <br/> but rather the satisfaction of our <br/> client. Your satisfaction is our <br/> success story!
                        </div>
                    </div>
                    <div class="col-sm ConstructionCol">
                        <div>
                            <img
                                className="d-block w-100 ConstructionImage"
                                src={constructionimage}
                            />
                        </div>
                        <div className="ConstructionHeader">
                            <h3>Construction</h3>
                        </div>
                        <div className="ConstructionDesc">
                            Construction

                            Construction is more than just knowing <br/> how to build a quality and sustainable <br/> building. But also developing a solid <br/> relationship with our clients built on trust, communication, and outstanding quality. <br/>
                            <br/>
                            Seeing our client's vision, and turning it into reality is a humbling process as we have been entrusted with caring for this  great responsibility.  This continues to drive us to excel, and to explore new ways and new products that enable us to provide you with excellence. <br/>
                            <br/>
                            Our goal is that our client enjoys the <br/> process from start to finish. 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default ClientServices;
  
import homewebsitephoto1 from "../images/homewebsitephoto1.jpg";
import homewebsitephoto2 from "../images/homewebsitephoto2.jpg";
import homewebsitephoto3 from "../images/homewebsitephoto3.jpg";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn
} from 'mdb-react-ui-kit';
import ContactForm from "./ContactForm.js";


function HomePageCarousel() {
  return (
    <Carousel>
      
      <Carousel.Item>
        <img
          className="d-block w-100 homephotos"
          src={homewebsitephoto1}
          alt="First slide"
        />
        <div>
        <Carousel.Caption className="CarouselCaption">
          <container>
          <div className="Child1">
           <div className="CarouselBox">
              <h1>BUILDING TODAY FOR A SUSTAINABLE FUTURE</h1>
          </div>
          <div>
              <h4 className="CarouselSubCaption">
                Innovation, Collaboration, and Commitment to Excellence
              </h4>
          </div>
          <div className="CarouselBtn">
          <button type="button" class="btn btn-success">Success</button>
          </div>
          </div>
          
          <div className="ContactForm">
            <ContactForm />
          </div>
          </container>
          
          
        {/* <MDBCard alignment='center' id="card1">
      <MDBCardHeader>Featured</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>Special title treatment</MDBCardTitle>
        <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
      
    </MDBCard> */}
    </Carousel.Caption>
        </div>
        
          
        {/* <MDBCard alignment='center' id="card1">
      <MDBCardHeader>Featured</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>Special title treatment</MDBCardTitle>
        <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
      
    </MDBCard> */}
    
    
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-100 homephotos"
          src={homewebsitephoto2}
          alt="First slide"
        />
        <Carousel.Caption>
         <MDBCard alignment='center' id="card1">
      <MDBCardHeader>Featured</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>Special title treatment</MDBCardTitle>
        <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
      
    </MDBCard> 
    </Carousel.Caption>
    
      </Carousel.Item> */}
      {/* <Carousel.Item>
        <img
          className="d-block w-100 homephotos"
          src={homewebsitephoto3}
          alt="First slide"
        />
        <Carousel.Caption>
         <MDBCard alignment='center' id="card1">
      <MDBCardHeader>Featured</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>Special title treatment</MDBCardTitle>
        <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
      
    </MDBCard> 
    </Carousel.Caption>
    
      </Carousel.Item> */}
    </Carousel>
  );
}

export default HomePageCarousel;
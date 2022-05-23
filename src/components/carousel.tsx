import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Icons from '../components/icons'
export default class NextJsCarousel extends Component {
  render() {
    return (
      <div className="jkdsf0-3les">
        <Carousel showIndicators={false} showStatus={false} showThumbs={false}>
          <div>
            <img src="/Group 85.png" alt="image1" />
          </div>
          <div>
            <img src="/Group 85.png" alt="image2" />
          </div>
          <div>
            <img src="/Group 85.png" alt="image3" />
          </div>
        </Carousel>

        <div className="lkdsmvaos0erl">
          <div className="asdcks-e3ms">
              <div className="mdsoa-e3l3e  kjsdad-dsfrerfes">
                  <Icons name="i1"/>
              </div>
        
              <div className="mdsoa-e3l3e kjsdad-dsfrerfes">
                  <Icons name="i1"/>
              </div>
        
              <div className="mdsoa-e3l3e kjsdad-dsfrerfes">
                  <Icons name="i1"/>
              </div>
        
          </div>
          <div className="dsafimkds-rekm">
            <h5>Boat Yacht Services</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="jnaskdf-sjmerer">
            <img src="/image 7.png"/>
            </div>
            <div className="nckdsma-serma"><a className=" lgn-btn">Explore More</a></div>
            
          </div>
        </div>
      </div>
    );
  }
}

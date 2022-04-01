import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { Styles } from "./styles";
class TestCarosu extends React.Component {
  state = {
    galleryItems: [1, 2, 3, 4, 5, 6].map((i) =>  <div><img src="assets/images/home_anna.png" role="presentation" width="90%"></img><div className="d-flex test-card"><div><img  src="assets/images/Jared.png" role="presentation" width="100%"/></div><div><p className="general">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p><p className='title'>Jared Ellis</p><p className='middle'>Student</p></div></div></div>),
    // galleryItems1: [1, 2, 3, 4, 5, 6].map((i) =>  <img src="assets/images/home_anna.png" role="presentation" width="90%"></img>),
  }

  responsive = {
    0: { items: 1 },
    1: { items: 2 },
    2: { items: 3 },
  }

  render() {
    return (
      <Styles>
      <div className="carosuel-part" style={{position:'relative'}}>
          <AliceCarousel
            items={this.state.galleryItems}
            responsive={this.responsive}
            autoPlayInterval={2000}
            autoPlayDirection="ltr"
            autoPlay={true}
            fadeOutAnimation={true}
            mouseTrackingEnabled={true}
            playButtonEnabled={true}
            disableAutoPlayOnAction={true}
            onSlideChange={this.onSlideChange}
            onSlideChanged={this.onSlideChanged}
          />

      </div>
      
      </Styles>
      
    )
  }
}
export default TestCarosu;
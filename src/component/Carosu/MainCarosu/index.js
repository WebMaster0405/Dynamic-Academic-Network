import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { Styles } from "../styles";
class MainCarosu extends React.Component {
  state = {
    galleryItems: [1, 2, 3, 4, 5, 6].map((i) =>  <img src="assets/images/student_girl.png" role="presentation" width="100%"/>),
  }

  responsive = {
    0: { items: 1 },
    1: { items: 2 },
 
  }

  onSlideChange(e) {
    console.debug('Item`s position during a change: ', e.item)
    console.debug('Slide`s position during a change: ', e.slide)
  }

  onSlideChanged(e) {
    console.debug('Item`s position after changes: ', e.item)
    console.debug('Slide`s position after changes: ', e.slide)
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
          <img src="assets/images/home_dolor.png" alt="" width="50%" height="110%" style={{
            position: "absolute", top:'0'
          }}/>
          <div className="carosuel-text" style={{}}><p>Lorem ipsum dolor sit amet</p></div>
      </div>
      </Styles>
    )
  }
}
export default MainCarosu;
import React, { Component } from 'react';
import './style/index.css';
import { Grid, Row, Col} from 'react-bootstrap';


class HomeContent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      images: [
        '../../../assets/smartwatch.svg',
        '../../../assets/smartphone.svg',
        '../../../assets/dress.svg',
        '../../../assets/rubber-duck.svg',
      ],
      currentImageIndex: 0,
    }

  }

  componentDidMount() {

  }

  render() {
    let { images, currentImageIndex } = this.state;
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12} md={6} style={{ height: 500 }}>
              <div
                className="hero"
                style={{ display: "flex", height: "100%", flexDirection: "column", alignItems: "center", alignContent: "center", flex: 1 }}>

                <div style={{ flex: .2 }}>
                </div>

                <div style={{ flex: .8 }}>
                  <h1 style={{ fontSize: 25, fontWeight: "lighter" }}>
                    Find right products for your store with ease.
                   </h1>
                  <h4>
                    Oberlo allows you to easily import dropshipped products directly into your ecommerce store and ship them directly to your customers – in only a few clicks.
                   </h4>
                  <button> Get started</button>
                </div>


              </div>
            </Col>
            <Col xs={12} md={6} style={{ height: 500 }}>

              <div className="hero" style={{ marginTop: 75, textAlign: "center" }}>
                <img src={images[currentImageIndex]} alt="apple" />
              </div>

              <div style={{ display: "flex", flexDirection: "row", height: 20, marginTop: 20, alignItems: "center", alignContent: "center", justifyContent: "center" }}>

                {
                  images.map((item, index) => {
                    return (
                      <div key={index} className="carousel"
                        onClick={() => { this.setState({ currentImageIndex: index }) }}>
                      </div>
                    )
                  })
                }
              </div>


            </Col>
          </Row>
        </Grid>

        <div className="content" style={{
          height: 300, backgroundColor: "#2a7cf7",
          backgroundImage: "linear-gradient(90deg,#00bbff, #2a7cf7)",
          display: "flex", flexDirection: "column",
          alignContent: "center", padding: 5,
          alignItems: "center", justifyContent: "center"
        }}>
          <h2 style={{ textAlign: "center" }}>Start using dropsku now !</h2>
          <h4>All users will have forever free starter plan</h4>

          <button>Sign up</button>
        </div >
      </div >
      
    );
  }
}

export default HomeContent;

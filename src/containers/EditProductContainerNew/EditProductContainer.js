import React, { Component } from 'react';
import { Glyphicon, Row, Col, Grid, Tabs, Tab } from 'react-bootstrap';
import Trumbowyg from 'react-trumbowyg'

import DashboardHeader from '../../components/DashboardHeader'
import DashboardSidebar from '../../components/DashboardSidebar'

import '../../../node_modules/react-trumbowyg/dist/trumbowyg.min.css'
import './style/index.css';

class EditProductContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      image: null,
      title: "Tactical Military Molle System Water Bags Water Bottle Outdoor Bag",
      price: 0
    }
  }

  setFile = (e) => {
    this.setState({ image: e.target.files[0] }, () => {
      this.uploadFile()
    })
  }
  setTitle = (e) => {
    this.setState({ title: e.target.value })
  }
  setPrice = (e) => {
    this.setState({ price: e.target.value })
  }


  makeForm = (file) => {
    console.log(file)
    let data = new FormData();
    data.append('userId', "1231212")
    data.append("file", file);
    return data;
  }

  uploadFile = () => {
    let { image } = this.state;
    let postData = {
      accept: 'application/json',
      mode: "no-cors",
      method: 'POST',
      body: this.makeForm(image),
    }

    fetch('http://localhost:3001/file', postData)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      });
  }

  handleEditorChange = (e) => {
    console.log('Content was updated:', e.target.getContent());
  }

  render() {

    return (
      <div>
        <DashboardHeader />
        <Grid>
          <Row>
            <Col md={2} xsHidden={true} smHidden={true}>
              <DashboardSidebar activeClass="Products" />
            </Col>
            <Col md={10} xs={12}>

              <Row style={{ padding: 10 }}>
                <div>
                  <h2>Edit Product</h2>
                </div>


                <div className="Product-Edit">

                  <Col xs={12} sm={4} md={4} >

                    <div style={{ padding: 20, textAlign: "center" }}>
                      <div className="Product-Edit-img">
                        <img src="http://images.voonik.com/71845882/casual-shoes-for-men-sneakers-for-men-designer-shoe-product.jpg?1527147786" alt="img" />
                      </div>

                      <div className="upload-btn-wrapper">
                        <button className="bordered-button">Upload new </button>
                        <input type="file" name="myfile" onChange={(e) => this.setFile(e)} />
                      </div>
                    </div>

                  </Col>

                  <Col xs={12} sm={8} md={8} >
                    <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
                      <Tab eventKey={1} title="Info">
                        <h4 className="Info-h4">Title :</h4>
                        <textarea
                          className="Info-textArea"
                          onChange={(e) => { this.setTitle(e) }}
                          value={this.state.title}
                        >
                        </textarea>

                        <h4 className="Info-h4">Price :</h4>
                        <input className="Info-input"
                          placeholder=" $ 50"
                          type="number"
                          onChange={(e) => { this.setPrice(e) }} />

                        <h4 className="Info-h4">Quantity</h4>
                        <input className="Info-input"
                          placeholder=" 1000"
                          type="number"
                          onChange={(e) => { this.setPrice(e) }} />

                        <h4 className="Info-h4">Weight</h4>
                        <input className="Info-input"
                          placeholder=" 120"
                          type="number"
                          onChange={(e) => { this.setPrice(e) }} />

                        <h4 className="Info-h4">Sku</h4>
                        <input className="Info-input"
                          placeholder=" _dropsku-pro05712"
                          type="text"
                          onChange={(e) => { this.setPrice(e) }} />



                      </Tab>
                      <Tab eventKey={2} title="Description">
                        <h4 className="Info-h4">Description</h4>
                        <Trumbowyg
                          id='react-trumbowyg'
                          buttons={
                            [
                              ['formatting'],
                              'btnGrp-semantic',
                              ['link'],
                              ['insertImage'],
                              'btnGrp-justify',
                              'btnGrp-lists',
                              ['fullscreen']
                            ]
                          }
                          data='Hello, World!'
                          placeholder='Type your text!'
                          onChange={(e) => console.log(e)}
                        />
                      </Tab>
                      <Tab eventKey={3} title="Images" >
                        <h4 className="Info-h4">Images</h4>


                        {
                          new Array(7).fill(1, 0, 7).map((item, index) => {
                            return (
                              <div
                                key={index}
                                style={{ backgroundColor: "#FFFFFF", borderStyle: "solid", borderWidth: 1, borderColor: "#EAEAEA", padding: 10, margin: 10, display: "inline-block" }}>
                                <div style={{ textAlign: "end" }}>
                                  <ion-icon name="trash" style={{ marginRight: 5 }}></ion-icon>
                                </div>
                                <div className="Product-Edit-img">
                                  <img src="http://images.voonik.com/71845882/casual-shoes-for-men-sneakers-for-men-designer-shoe-product.jpg?1527147786" alt="img" />
                                </div>
                              </div>
                            )
                          })
                        }




                      </Tab>
                    </Tabs>
                  </Col>


                </div>

              </Row>


            </Col>
          </Row>
        </Grid>
      </div >
    );
  }
}

export default EditProductContainer;

import React from "react";
import Contents from "../../components/Contents";
import { Button, Col, Row, Table } from "react-bootstrap";
import "../../assets/scss/dashboard.scss";
import SearchIcon from "../../assets/images/search.png";
import LandroverLogo from "../../assets/images/landrover.png";
import NissanLogo from "../../assets/images/nissan.png";
import Car1 from "../../assets/images/rangerover.png";
import Car2 from "../../assets/images/nissan-car.png";
import ElectricIcon from "../../assets/images/electric.png";
import ArrowRight from "../../assets/images/arrow-right.png";

const Dashboard = () => {
  return (
    <Contents>
      <div className="contents">
        <hr />
        <Row className="align-items-center">
          <Col xs={6} lg={8}>
            <div className="greet">
              <p>Good Morning,</p>
              <h3 className="mb-0">Jeff Reeves</h3>
            </div>
          </Col>
          <Col>
            <div className="search">
              <img src={SearchIcon} alt="search" />
              <input type="text" name="search" placeholder="Search here" />
            </div>
          </Col>
        </Row>
        <h5 className="mt-5 mb-3 fw-bold">Hot Collections</h5>
        <Row>
          <Col md={6}>
            <div className="collection first-coll mb-4 mb-md-0">
              <Row>
                <Col>
                  <div className="d-flex flex-column justify-content-between h-100">
                    <div className="logo-section">
                      <div className="logo">
                        <img
                          src={LandroverLogo}
                          alt="logo"
                          className="img-fluid"
                        />
                      </div>
                      <div>
                        <h6 className="mb-0">Range Rover</h6>
                        <p className="mb-0">Evoque</p>
                      </div>
                    </div>
                    <div className="my-2">
                      <img src={Car1} alt="car" className="img-fluid" />
                    </div>
                    <div className="price-section">
                      <p className="mb-0">ASKING PRICE</p>
                      <h3>
                        $38,700 <span>USD</span>
                      </h3>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="d-flex gap-2">
                    <div className="spec-first">
                      <div className="first">
                        <div className="icon">
                          <img src={ElectricIcon} alt="icon" />
                        </div>
                        <p>1977 CC</p>
                      </div>
                      <div className="second">
                        <div className="icon">
                          <img src={ElectricIcon} alt="icon" />
                        </div>
                        <p>6 Speed</p>
                      </div>
                    </div>
                    <div className="spec-second">
                      <div className="first">
                        <div className="icon">
                          <img src={ElectricIcon} alt="icon" />
                        </div>
                        <p>246.74 BHP</p>
                      </div>
                      <div className="second">
                        <div className="icon">
                          <img src={ElectricIcon} alt="icon" />
                        </div>
                        <p>4 Cylinder</p>
                      </div>
                    </div>
                  </div>
                  <div className="last-item">
                    <div className="icon">
                      <img src={ElectricIcon} alt="icon" />
                    </div>
                    <p>
                      <b>Total Run:</b> 12,500km
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col md={6}>
            <div className="collection second-coll">
              <Row>
                <Col>
                  <div className="d-flex flex-column justify-content-between h-100">
                    <div className="logo-section">
                      <div className="logo logo-second">
                        <img
                          src={NissanLogo}
                          alt="logo"
                          className="img-fluid"
                        />
                      </div>
                      <div>
                        <h6 className="mb-0">Nissan GTR</h6>
                        <p className="mb-0">R35 Nismo</p>
                      </div>
                    </div>
                    <div className="my-2">
                      <img src={Car2} alt="car" className="img-fluid" />
                    </div>
                    <div className="price-section">
                      <p className="mb-0">ASKING PRICE</p>
                      <h3>
                        $187,900 <span>USD</span>
                      </h3>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="d-flex gap-2">
                    <div className="spec-first">
                      <div className="first">
                        <div className="icon">
                          <img src={ElectricIcon} alt="icon" />
                        </div>
                        <p>3799 CC</p>
                      </div>
                      <div className="second">
                        <div className="icon">
                          <img src={ElectricIcon} alt="icon" />
                        </div>
                        <p>6 Speed</p>
                      </div>
                    </div>
                    <div className="spec-second">
                      <div className="first">
                        <div className="icon">
                          <img src={ElectricIcon} alt="icon" />
                        </div>
                        <p>591.4 BHP</p>
                      </div>
                      <div className="second">
                        <div className="icon">
                          <img src={ElectricIcon} alt="icon" />
                        </div>
                        <p>6 Cylinder</p>
                      </div>
                    </div>
                  </div>
                  <div className="last-item last-final">
                    <div className="icon">
                      <img src={ElectricIcon} alt="icon" />
                    </div>
                    <p>
                      <b>Total Run:</b> 9,254km
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <h5 className="mt-4 mb-3 fw-bold">Regular Collections</h5>
        <Row>
          <Col>
            <div className="table-responsive">
              <Table className="rounded rounded-5 overflow-hidden">
                <thead>
                  <tr>
                    <th>CAR MODEL</th>
                    <th>TOTAL RUN</th>
                    <th>CONDITION</th>
                    <th>ASKING PRICE</th>
                    <th>&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  <tr valign="middle">
                    <th>
                      <img
                        src={Car1}
                        alt=""
                        className="rounded-circle"
                        width={50}
                        height={50}
                      />{" "}
                      Honda Cr-V 2021
                    </th>
                    <td>22,409/Km</td>
                    <td>Great</td>
                    <td>$30,450</td>
                    <td>
                      <Button>
                        See details <img src={ArrowRight} alt="" />
                      </Button>
                    </td>
                  </tr>
                  <tr valign="middle">
                    <th>
                      <img
                        src={Car2}
                        alt=""
                        className="rounded-circle"
                        width={50}
                        height={50}
                      />{" "}
                      Audi A6 2021
                    </th>
                    <td>22,409/Km</td>
                    <td>Great</td>
                    <td>$30,450</td>
                    <td>
                      <Button>
                        See details <img src={ArrowRight} alt="" />
                      </Button>
                    </td>
                  </tr>
                  <tr valign="middle">
                    <th>
                      <img
                        src={Car1}
                        alt=""
                        className="rounded-circle"
                        width={50}
                        height={50}
                      />{" "}
                      Audi Q3 2019
                    </th>
                    <td>22,409/Km</td>
                    <td>Great</td>
                    <td>$30,450</td>
                    <td>
                      <Button>
                        See details <img src={ArrowRight} alt="" />
                      </Button>
                    </td>
                  </tr>
                  <tr valign="middle">
                    <th>
                      <img
                        src={Car2}
                        alt=""
                        className="rounded-circle"
                        width={50}
                        height={50}
                      />{" "}
                      Mercedes-Benz C-Class 2019
                    </th>
                    <td>22,409/Km</td>
                    <td>Great</td>
                    <td>$30,450</td>
                    <td>
                      <Button>
                        See details <img src={ArrowRight} alt="" />
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </div>
    </Contents>
  );
};

export default Dashboard;

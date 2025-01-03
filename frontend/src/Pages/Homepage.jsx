import React from "react";
import sliderOne from "../assets/Images/sd1.png";
import sliderTwo from "../assets/Images/dm1.png";
import CommonOne from "../Components/CommonOne";
import { Helmet } from "react-helmet";
import AllServices from "../Components/AllServices";
import Testimonials from "../Components/Testimonials";

function Homepage(props) {
  return (
    <>
      <Helmet>
        <title>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
          nostrum!
        </title>
        <meta
          name="description"
          content="This is the description of my website. This is the description of my website. This is the description of my website. This is the description of my website."
        />
      </Helmet>
      <div className="container-fluid mt-5 p-5 justify-content-center align-items-center d-flex">
        <div className="row mt-5 justify-content-center align-items-center">
          <div className="col-md-4 justify-content-center align-items-center">
            <h1 className="text-primary text-center">
              Best Marketing and <span className="text-white">Development Services</span>
            </h1>
            <p className="text-secondary text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              aspernatur dignissimos nihil obcaecati tenetur necessitatibus
              temporibus! Possimus quis deserunt omnis illum provident fuga
              repellendus voluptatum dolores? Nesciunt perferendis molestiae
              accusamus. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Eligendi cum, ex vero quisquam voluptate beatae autem. Enim
              ipsam magnam quod.
            </p>
            <div className="d-flex justify-content-center mt-3 mb-5">
              {" "}
              {/* Add d-flex and justify-content-center */}
              <button className="btn btn-outline-primary mx-2">
                Contact Us!
              </button>
              <button className="btn btn-outline-light">Call Now!</button>
            </div>
          </div>
          <div className="col-md-8">
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={sliderOne}
                    className="d-block w-100 rounded-5"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={sliderTwo}
                    className="d-block w-100 rounded-5"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={sliderOne}
                    className="d-block w-100 rounded-5"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <hr className="text-primary mt-4" />
        <hr className="text-primary mt-3" />
        <hr className="text-primary mt-2" />
      </div>
      <CommonOne />
      <div className="container">
        <hr className="text-primary mt-4" />
        <hr className="text-primary mt-3" />
        <hr className="text-primary mt-2" />
      </div>
      <AllServices />
      <div className="container">
        <hr className="text-primary mt-4" />
        <hr className="text-primary mt-3" />
        <hr className="text-primary mt-2" />
      </div>

      <Testimonials />
      <div className="container">
        <hr className="text-primary mt-4" />
        <hr className="text-primary mt-3" />
        <hr className="text-primary mt-2" />
      </div>

      <div className="container mt-4 mb-5">
        <div className="row">
          <div className="col-md-4">
            <h3 className="text-primary fs-1">Frequently</h3>
            <h3 className="text-white fs-1">Asked</h3>
            <h3 className="text-primary fs-1">Questions</h3>
          </div>
          <div className="col-md-8 rounded-5">
            <div class="accordion accordion-flush" id="accordionFlushExample p-1 rounded-5">
              <div class="accordion-item bg-dark text-white rounded-5">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Accordion Item #1
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the first item's accordion body.
                  </div>
                </div>
              </div>
              <div class="accordion-item bg-dark text-white rounded-5">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    Accordion Item #2
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the second item's accordion body. Let's imagine this being
                    filled with some actual content.
                  </div>
                </div>
              </div>
              <div class="accordion-item bg-dark text-white rounded-5">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Accordion Item #3
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the third item's accordion body. Nothing more exciting
                    happening here in terms of content, but just filling up the
                    space to make it look, at least at first glance, a bit more
                    representative of how this would look in a real-world
                    application.
                  </div>
                </div>
              </div>
              
              <div class="accordion-item bg-dark text-white rounded-5">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapsefour"
                    aria-expanded="false"
                    aria-controls="flush-collapsefour"
                  >
                    Accordion Item #4
                  </button>
                </h2>
                <div
                  id="flush-collapsefour"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the first item's accordion body.
                  </div>
                </div>
              </div>
              
              <div class="accordion-item bg-dark text-white rounded-5">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapsefive"
                    aria-expanded="false"
                    aria-controls="flush-collapsefive"
                  >
                    Accordion Item #5
                  </button>
                </h2>
                <div
                  id="flush-collapsefive"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the first item's accordion body.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;

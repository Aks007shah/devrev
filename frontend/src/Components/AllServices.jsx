import React from "react";
import { Link } from "react-router-dom";
import seoImage from '../assets/Images/seo.jpg'
import smoImage from '../assets/Images/smo.jpg'
import ppcImage from '../assets/Images/ppc.png'

function AllServices(props) {
  return (
    <div className="container mt-5">
      <div className="row text-center p-2">
      <div>
        <h2 className="text-primary text-center mb-4 fs-1">Our Popular<span className="text-white"> Services</span></h2>
        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit et delectus amet corporis optio facilis nemo non, voluptatem minus ullam, eum sequi ipsum facere blanditiis. Iure autem blanditiis quia vel.</p>
      </div>
        <div className="col-sm-4 ">
          <div class="card image-container" style={{ width: "18rem" }}>
            <img src={seoImage} width={80} height={200} class="card-img-top imgScale imgScale" alt="..." />
            <div class="card-body">
              <h5 class="card-title ">Search Engine Optimization</h5>
              <p class="card-text text-secondary">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="#" class="btn btn-outline-primary">
                Learn more!
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div class="card image-container" style={{ width: "18rem" }}>
            <img src={ppcImage} width={80} height={200} class="card-img-top imgScale" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Search Engine Marketing</h5>
              <p class="card-text text-secondary">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="#" class="btn btn-outline-primary">
                Learn more!
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div class="card image-container" style={{ width: "18rem" }}>
            <img src={smoImage} width={80} height={200} class="card-img-top imgScale" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Social Media Optimization</h5>
              <p class="card-text text-secondary">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="#" class="btn btn-outline-primary">
                Learn more!
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="row text-center p-2">
        <div className="col-sm-4">
          <div class="card image-container" style={{ width: "18rem" }}>
            <img src={ppcImage} width={80} height={200} class="card-img-top imgScale" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Software Development</h5>
              <p class="card-text text-secondary">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="#" class="btn btn-outline-primary">
                Learn more!
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div class="card image-container" style={{ width: "18rem" }}>
            <img src={seoImage} width={80} height={200} class="card-img-top imgScale" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Website Development</h5>
              <p class="card-text text-secondary">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="#" class="btn btn-outline-primary">
                Learn more!
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div class="card image-container" style={{ width: "18rem" }}>
            <img src={smoImage} width={80} height={200} class="card-img-top imgScale" alt="..." />
            <div class="card-body">
              <h5 class="card-title">App Development</h5>
              <p class="card-text text-secondary">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="#" class="btn btn-outline-primary">
                Learn more!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllServices;

import React from "react";

function CommonOne(props) {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-sm-12">
          <h2 className="text-primary text-center fs-1">Leading with <span className="text-white">Experience!</span></h2>
        </div>
      </div>
      <div className="row ms-auto me-auto mb-3 justify-content-center align-items-center">
      <div className="col-sm-3">
          <div class="card abc text-center">
          <div className="card-header">
            <h4 className="text-primary text-danger">500+</h4>
          </div>
            <div class="card-body">
              <h5 class="card-title text-primary">Projects Delivered</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-3 shadow p-3">
          <div class="card abc text-center shadow p-3">
            <div className="card-header">
              <h4 className="text-primary text-danger">15+ Years of</h4>
            </div>
            <div class="card-body">
              <h5 class="card-title text-primary">Experience</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div class="card abc text-center">
            <div className="card-header">
              <h4 className="text-primary text-danger">100+</h4>
            </div>
            <div class="card-body">
              <h5 class="card-title text-primary">International Projects</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="row ms-auto me-auto justify-content-center align-items-center">
        <div className="col-sm-3">
          <div class="card abc text-center shadow p-3">
            <div className="card-header shadow p-3">
              <h4 className="text-primary text-danger">500+</h4>
            </div>
            <div class="card-body">
              <h5 class="card-title text-primary">Projects Delivered</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div class="card abc text-center">
            <div className="card-header">
              <h4 className="text-primary text-danger">500+</h4>
            </div>
            <div class="card-body">
              <h5 class="card-title text-primary">Projects Delivered</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div class="card abc text-center shadow p-3">
            <div className="card-header shadow p-3">
              <h4 className="text-primary text-danger">500+</h4>
            </div>
            <div class="card-body">
              <h5 class="card-title text-primary">Projects Delivered</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommonOne;

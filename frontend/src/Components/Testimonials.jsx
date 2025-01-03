import React from "react";

function Testimonials() {
  const testimonialsData = [
    {
      name: "Akshat Sharma",
      review:
        "Amazing service! Highly recommend it to everyone looking for quality work.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJYiSTELv1N9D4ejvVsh9ta5wlZoi4HoU1AYGwAv2r5ME3PHm8Br4jYtGSXiQWBVZOZ9o&usqp=CAU",
      Designation: "CEO, ABC Group",
    },
    {
      name: "Aveer Sharma",
      review:
        "Exceptional experience. The team was professional and delivered on time.",
      img: "https://www.catholicsingles.com/wp-content/uploads/2020/06/blog-header-3.png",
      Designation: "CEO, XYZ Group",
    },
    {
      name: "Rajveer Singh",
      review:
        "Exceptional experience. The team was professional and delivered on time.",
      img: "https://static.everypixel.com/ep-pixabay/0375/4890/5516/93444/3754890551693444609-man_profile.jpg",
      Designation: "CEO, BBC Group",
    },
    {
      name: "Arman Khan",
      review:
        "The best team I've worked with. They truly understand the needs of their clients.",
      img: "https://www.shutterstock.com/image-photo/close-portrait-smiling-30s-caucasian-260nw-2246095709.jpg",
      Designation: "CEO, DDB Group",
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center text-primary mb-4">Testim<span className="text-white">onials</span></h2>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {testimonialsData.map((item, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className="card shadow-lg border-0 rounded-4 mx-auto" style={{ width: "18rem" }}>
                <img
                  src={item.img}
                  className="card-img-top rounded-circle mx-auto mt-3"
                  alt={item.name}
                  style={{ width: "100px", height: "100px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{item.name}</h5>
                  <h6 className="card-title text-muted">{item.Designation}</h6>
                  <p className="card-text text-secondary">"{item.review}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Testimonials;

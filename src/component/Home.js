import React from "react";
import Footer from "./Footer";
import image from "./img1.jpg";
import Java from "./java.jpeg";
// import Reactimg from "./react.png";
import Tesimonial from "./Tesimonial";

export default function Main() {
  return (
    <div className="container" style={{ padding: '50px' }}>
      <div className="row g-6 py-5 row-cols-1 row-cols-md-2 ">
        <div className="feature col" style={{ marginTop: '11%' }}>

          <h2>Welcome to <strong style={{ color: "blue" }}>CodeWithRahul</strong></h2>
          <p>
            Paragraph of text beneath the heading to explain the heading. We'll
            add onto it with another sentence and probably just keep going until
            we run out of words.
          </p>
          <button className="btn btn-dark my-2 mx-2">Free Course</button>
          <button className="btn btn-light my-2 mx-2">Expolre Blog</button>
        </div>
        <div className="feature col">
          <div className="feature-icon">
            <img
              src={image}
              className="card-img-top"
              style={{ borderRadius: "9px" }}
              alt="..."
            />
          </div>
        </div>
      </div>
      <hr />

      <div className="container">
        <h2 style={{ textAlign: "center", marginTop: "40px" }}>
          Recommended Courses
        </h2>
        <div className="card-group my-4">
          <div
            className="card mx-2 my-2"
            style={{ border: "2px solid green", borderRadius: "12px" }}
          >
            <img
              src={Java}
              className="card-img-top"
              style={{ borderRadius: "9px" }}
              alt="..."
            />
            <div className="card-body">
              <span>
                <h6 style={{ color: "cadetblue" }}>Free Courses</h6>
              </span>
              <h5 className="card-title">Java Courses In Hindi</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
                iusto non doloribus minima accusantium asperiores sapiente
                maiores quae exercitationem impedit, ipsam culpa explicabo!.
              </p>
            </div>
            <div className="container">
              <button
                className="btn btn-primary"
                style={{ margin: "10px 0px", borderRadius: "12px" }}
              >
                Start Watching
              </button>
            </div>
          </div>
          <div
            className="card mx-2 my-2"
            style={{ border: "2px solid green", borderRadius: "12px" }}
          >
            <img
              src={Java}
              className="card-img-top"
              style={{ borderRadius: "9px" }}
              alt="..."
            />
            <div className="card-body">
              <span>
                <h6 style={{ color: "cadetblue" }}>Free Courses</h6>
              </span>
              <h5 className="card-title">CSS in Hindi</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto ipsam perferendis, tempore, odit temporibus facere
                commodi aut obcaecati, doloribus accusantium quia modi error?
                Quisquam.
              </p>
            </div>
            <div className="container">
              <button
                className="btn btn-primary"
                style={{ margin: "10px 0px", borderRadius: "12px" }}
              >
                Start Watching
              </button>
            </div>
          </div>
          <div
            className="card mx-2 my-2"
            style={{ border: "2px solid green", borderRadius: "12px" }}
          >
            <img
              src={Java}
              className="card-img-top"
              style={{ borderRadius: "9px" }}
              alt="..."
            />
            <div className="card-body">
              <span>
                <h6 style={{ color: "cadetblue" }}>Free Courses</h6>
              </span>
              <h5 className="card-title">React JS In Hindi</h5>
              <p className="card-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corporis earum laudantium corrupti. Non cum illo ratione
                perspiciatis quasi modi obcaecati rem et accusantium blanditiis!
              </p>
            </div>

            <div className="container">
              <button
                className="btn btn-primary"
                style={{ margin: "10px 0px", borderRadius: "12px" }}
              >
                Start Watching
              </button>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <Tesimonial />

      <Footer />
    </div>
  );
}

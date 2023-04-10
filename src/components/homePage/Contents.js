import React, { Component } from "react";
import "./Contents.css";
export class Contents extends Component {
  render() {
    return (
      <div className="container pt-4" id="contents">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card shadow-sm h-100">
              <div className="card-header">
                <h2>News</h2>
              </div>

              <div className="card-image">
                <img
                  src="https://source.unsplash.com/user/xteemu/800x600"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <h3 className="card-title">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit
                </h3>

                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer. This is a longer card with supporting text below as a
                  natural lead-in to additional content. This content is a
                  little bit longer.
                </p>
              </div>

              <div className="card-footer py-3">
                <div className="card-footer__info">
                  <span className="read-more">
                    <a className="text-uppercase read-more-1" href="#">
                      Read more{" "}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm h-100">
              <div className="card-header">
                <h2>Upcoming events</h2>
              </div>

              <div className="card-image">
                <img
                  src="https://source.unsplash.com/800x600/?beach"
                  className="card-img-top"
                  alt="..."
                />
              </div>

              <div className="card-body">
                <h3 className="card-title">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit
                </h3>

                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer. This is a longer card with supporting text below as a
                  natural lead-in to additional content. This content is a
                  little bit longer.
                </p>
              </div>
              <div className="card-footer py-3">
                <div className="card-footer__info">
                  <span className="read-more">
                    <a className="text-uppercase read-more-2" href="#">
                      Read more{" "}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm h-100">
              <div className="card-header">
                <h2>Activties</h2>
              </div>

              <div className="card-image">
                <img
                  src="https://source.unsplash.com/user/austindistel/800x600"
                  className="card-img-top"
                  alt="..."
                />
              </div>

              <div className="card-body">
                <h3 className="card-title">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit
                </h3>

                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer. This is a longer card with supporting text below as a
                  natural lead-in to additional content. This content is a
                  little bit longer.
                </p>
              </div>
              <div className="card-footer py-3">
                <div className="card-footer__info">
                  <span className="read-more">
                    <a className="text-uppercase read-more-2" href="#">
                      Read more{" "}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contents;

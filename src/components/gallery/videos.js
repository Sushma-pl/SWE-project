import React, { Component } from "react";
import "./videos.css";
import { Helmet } from "react-helmet";
class Videos extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <script src={require("./resource.js")}type="text/javascript" />
        </Helmet>

        <div className="block">
          <div className="film-container">
            <div className="row">
              <div className="single-film wow fadeInDown" data-wow-delay=".1s">
                <div
                  className="box"
                  style={{
                    background: require("https://upload.wikimedia.org/wikipedia/commons/7/70/Big.Buck.Bunny.-.Opening.Screen.png"),
                  }}
                >
                  <div className="box__right box-pay-icon">
                    <a href="javascript:;">
                      <i className="play-movie-icon ion-ios-play-outline"></i>
                    </a>
                  </div>
                  <div className="box__left box-pay-icon">
                    <a href="javascript:;">
                      <i className="play-movie-icon ion-ios-play-outline"></i>
                    </a>
                  </div>
                  <div className="box__top box-pay-icon">
                    <a href="javascript:;">
                      <i className="play-movie-icon ion-ios-play-outline"></i>
                    </a>
                  </div>
                  <div className="box__bottom box-pay-icon">
                    <a href="javascript:;">
                      <i className="play-movie-icon ion-ios-play-outline"></i>
                    </a>
                  </div>
                  <div className="play-video">
                    <video width="320" height="240" controls id="PlayVideo1">
                      <source
                        src="https://www.rmp-streaming.com/media/bbb-360p.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                  <i
                    className="video-tag-close ion-ios-close-outline"
                    onClick={this.pauseVid1}
                  ></i>
                </div>
                <div className="film-information">
                  <p>Big Buck Bunny</p>
                  <p>Video Gallery 1</p>
                </div>
              </div>

              <div className="single-film wow fadeInDown" data-wow-delay=".2s">
                <div
                  className="box"
                  style={{
                    background: require("https://upload.wikimedia.org/wikipedia/commons/7/70/Big.Buck.Bunny.-.Opening.Screen.png"),
                  }}
                >
                  <div className="box__right box-pay-icon">
                    <a href="javascript:;">
                      <i className="play-movie-icon ion-ios-play-outline"></i>
                    </a>
                  </div>
                  <div className="box__left box-pay-icon">
                    <a href="javascript:;">
                      <i className="play-movie-icon ion-ios-play-outline"></i>
                    </a>
                  </div>
                  <div className="box__top box-pay-icon">
                    <a href="javascript:;">
                      <i className="play-movie-icon ion-ios-play-outline"></i>
                    </a>
                  </div>
                  <div className="box__bottom box-pay-icon">
                    <a href="javascript:;">
                      <i className="play-movie-icon ion-ios-play-outline"></i>
                    </a>
                  </div>
                  <div className="play-video">
                    <video width="320" height="240" controls id="PlayVideo2">
                      <source
                        src="https://www.rmp-streaming.com/media/bbb-360p.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                  <i
                    className="video-tag-close ion-ios-close-outline"
                    onClick={this.pauseVid2}
                  ></i>
                </div>
                <div className="film-information">
                  <p>Big Buck Bunny</p>
                  <p>Video Gallery 2</p>
                </div>
              </div>

              <div className="single-film wow fadeInDown" data-wow-delay=".3s">
                <div
                  className="box"
                  style={{
                    background: require("https://upload.wikimedia.org/wikipedia/commons/7/70/Big.Buck.Bunny.-.Opening.Screen.png"),
                  }}
                >
                  <div className="box__right box-pay-icon">
                    <a href="javascript:;">
                      <i className="play-movie-icon ion-ios-play-outline"></i>
                    </a>
                  </div>
                  <div className="box__left box-pay-icon">
                    <a href="javascript:;">
                      <i className="play-movie-icon ion-ios-play-outline"></i>
                    </a>
                  </div>
                  <div className="box__top box-pay-icon">
                    <a href="javascript:;">
                      <i className="play-movie-icon ion-ios-play-outline"></i>
                    </a>
                  </div>
                  <div className="box__bottom box-pay-icon">
                    <a href="javascript:;">
                      <i className="play-movie-icon ion-ios-play-outline"></i>
                    </a>
                  </div>
                  <div className="play-video">
                    <video width="320" height="240" controls id="PlayVideo3">
                      <source
                        src="https://www.rmp-streaming.com/media/bbb-360p.mp4"
                        type="video/mp4"
                      />
                    </video>
                    <i
                      className="video-tag-close ion-ios-close-outline"
                      onClick={this.pauseVid3}
                    ></i>
                  </div>
                </div>
                <div className="film-information">
                  <p>Big Buck Bunny</p>
                  <p>Video Gallery 3</p>
                </div>
              </div>

              <div className="single-film wow fadeInDown" data-wow-delay=".4s">
                <div
                  className="box"
                  style={{
                    background: require("https://upload.wikimedia.org/wikipedia/commons/7/70/Big.Buck.Bunny.-.Opening.Screen.png"),
                  }}
                >
                  <div className="box__right box-pay-icon">
                    <a href="javascript:;">
                      <i className="play-movie-icon ion-ios-play-outline"></i>
                    </a>
                  </div>
                  <div className="box__left box-pay-icon">
                    <a href="javascript:;">
                      <i className="play-movie-icon ion-ios-play-outline"></i>
                    </a>
                  </div>
                  <div className="box__top box-pay-icon">
                    <a href="javascript:;">
                      <i className="play-movie-icon ion-ios-play-outline"></i>
                    </a>
                  </div>
                  <div className="box__bottom box-pay-icon">
                    <a href="javascript:;">
                      <i className="play-movie-icon ion-ios-play-outline"></i>
                    </a>
                  </div>
                  <div clasNamesName="play-video">
                    <video width="320" height="240" controls id="PlayVideo4">
                      <source
                        src="https://www.rmp-streaming.com/media/bbb-360p.mp4"
                        type="video/mp4"
                      />
                    </video>
                    <i
                      className="video-tag-close ion-ios-close-outline"
                      onClick={this.pauseVid4}
                    ></i>
                  </div>
                </div>
                <div className="film-information">
                  <p>Big Buck Bunny</p>
                  <p>Video Gallery 4</p>
                </div>
              </div>

              <div className="single-film wow fadeInDown" data-wow-delay=".5s">
                <div
                  className="box"
                  style={{
                    background: require("https://upload.wikimedia.org/wikipedia/commons/7/70/Big.Buck.Bunny.-.Opening.Screen.png"),
                  }}
                >
                  <div className="box__right box-pay-icon">
                    <a href="javascript:;">
                      <i className="play-movie-icon ion-ios-play-outline"></i>
                    </a>
                  </div>
                  <div className="box__left box-pay-icon">
                    <a href="javascript:;">
                      <i className="play-movie-icon ion-ios-play-outline"></i>
                    </a>
                  </div>
                  <div className="box__top box-pay-icon">
                    <a href="javascript:;">
                      <i className="play-movie-icon ion-ios-play-outline"></i>
                    </a>
                  </div>
                  <div className="box__bottom box-pay-icon">
                    <a href="javascript:;">
                      <i className="play-movie-icon ion-ios-play-outline"></i>
                    </a>
                  </div>
                  <div className="play-video">
                    <video width="320" height="240" controls id="PlayVideo5">
                      <source
                        src="https://www.rmp-streaming.com/media/bbb-360p.mp4"
                        type="video/mp4"
                      />
                    </video>
                    <i
                      className="video-tag-close ion-ios-close-outline"
                      onClick={this.pauseVid5}
                    ></i>
                  </div>
                </div>
                <div className="film-information">
                  <p>Big Buck Bunny</p>
                  <p>Video Gallery 5</p>
                </div>
              </div>

              <div className="single-film wow fadeInDown" data-wow-delay=".6s">
                <div
                  className="box"
                  style={{
                    background: require("https://upload.wikimedia.org/wikipedia/commons/7/70/Big.Buck.Bunny.-.Opening.Screen.png"),
                  }}
                >
                  <div className="box__right box-pay-icon">
                    <a href="javascript:;">
                      <i className="play-movie-icon ion-ios-play-outline"></i>
                    </a>
                  </div>
                  <div className="box__left box-pay-icon">
                    <a href="javascript:;">
                      <i className="play-movie-icon ion-ios-play-outline"></i>
                    </a>
                  </div>
                  <div className="box__top box-pay-icon">
                    <a href="javascript:;">
                      <i className="play-movie-icon ion-ios-play-outline"></i>
                    </a>
                  </div>
                  <div className="box__bottom box-pay-icon">
                    <a href="javascript:;">
                      <i className="play-movie-icon ion-ios-play-outline"></i>
                    </a>
                  </div>
                  <div className="play-video">
                    <video width="320" height="240" controls id="PlayVideo6">
                      <source
                        src="https://www.rmp-streaming.com/media/bbb-360p.mp4"
                        type="video/mp4"
                      />
                    </video>
                    <i
                      className="video-tag-close ion-ios-close-outline"
                      onClick={this.pauseVid6}
                    ></i>
                  </div>
                </div>
                <div className="film-information">
                  <p>Big Buck Bunny</p>
                  <p>Video Gallery 6</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Videos;

import "./Banner.scss";
import Countdown from "react-countdown";

const Banner = () => {
  const renderer = ({ hours, minutes, seconds, completed }) => {
    // Render a countdown
    return (
      <div className="banner_wrap">
        <div className="row">
          <div className="col-6">
            <h1>Đặt khoá học ngay để nhận ngay ưu đãi</h1>
          </div>
          <div className="col-6">
            <div className="box_clock">
              <div className="clock">
                <div className="d-flex flex-column">
                  {completed ? (
                    <h4>N</h4>
                  ) : (
                    <>
                      <h4>{hours}</h4>
                      <p>Giờ</p>
                    </>
                  )}
                </div>
                <div className="d-flex flex-column">
                  {completed ? (
                    <h4>Y</h4>
                  ) : (
                    <>
                      <h4>{minutes}</h4>
                      <p>Phút</p>
                    </>
                  )}
                </div>
                <div className="d-flex flex-column">
                  {completed ? (
                    <h4>Đ</h4>
                  ) : (
                    <>
                      <h4>{seconds}</h4>
                      <p>Giây</p>
                    </>
                  )}
                </div>
              </div>
              <div className="percent_discount d-flex flex-rows justify-content-between">
                <h4>60 % OFF</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <Countdown
      date={Date.now() + (7 * 60 * 60 + 24 * 60 + 30) * 1000}
      renderer={renderer}
    />
  );
};

export default Banner;

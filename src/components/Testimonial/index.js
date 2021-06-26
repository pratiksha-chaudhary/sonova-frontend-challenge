import './index.scss';

function Testimonial() {
  return (
    <div className="Testimonial cover-image">
      <div className="container main-app-placement">
        <div className="quote-logo">
          <img
            src="https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/ec027519-geers-green-quotation-marks_102x02t000000000000000.png"
            alt="qoute logo"
            loading="lazy"
          />
        </div>
        <div className="quote">
          <h3 className="intro">nec nam aliquam sem et tortor consequat id</h3>
          <p>mattis vulputate</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;

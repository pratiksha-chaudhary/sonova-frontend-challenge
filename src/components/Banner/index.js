import Button from '../Button';
import './index.scss';

function Banner() {
  return (
    <div className="Banner">
      <div className="brand-cover-small cover-image" />
      <div className="sales-background cover-image">
        <div className="sales-pitch">
          <h2 className="intro">
            QUIS COMMODO ODIO AENEAN SED ADIPISCING DIAM DONEC ADIPISCING
          </h2>
          <Button text="montes" />
          <div className="award-logos">
            <img
              className="quality-logo wide"
              src="https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/21b448ee-dka2020-1platz-kundenzufriedenheit-hoergeraete-akustiker-geers-quer-01_105602i000000000000000.png"
              alt="geer award for quality"
            />
            <img
              className="quality-logo"
              src="https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/7bea8d9d-trusted-shops-logo_102i02i000000000000000.png"
              alt="geer award for quality"
            />
            <img
              className="quality-logo"
              src="https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/93d4fa9f-trust-logo_102i02i000000000000000.png"
              alt="geer award for quality"
            />
            <div className="quality-logo wide rating">
              <img
                src="https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/625afd42-geers-gold-stars-4-7_103i00n000000000000000.png"
                alt="star rating"
              />
              <h4>4,1/5</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;

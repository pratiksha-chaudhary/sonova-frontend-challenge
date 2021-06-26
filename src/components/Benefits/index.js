import Benefit from "../Benefit";
import Button from "../Button";
import benefits from "./benefits.json";
import "./index.scss";

function Benefits() {
    return (
        <div className="Benefits main-app-placement">
            <div className="benefit-list">
                {benefits.map((benefit, i) => (
                    <Benefit text={benefit} key={i} />
                ))}
            </div>
            <div className="guarantee-container">
                <div className="guarantee">
                    <img
                        src="https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/661e4500-geers-service-trust-symbol_106405m000000000000000.png"
                        alt="service guarantee"
                        loading="lazy"
                    />
                    <img
                        src="https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/6e35485c-geers-best-price-trust-symbol_106405m000000000000000.png"
                        alt="best price guarantee"
                        loading="lazy"
                    />
                    <img
                        src="https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/ad67a67d-geers-satisfaction-trust-symbol_106405m000000000000000.png"
                        alt="satisfaction guarantee"
                        loading="lazy"
                    />
                </div>
                <Button text="massa enim nec dui" />
            </div>
        </div>
    );
}

export default Benefits;

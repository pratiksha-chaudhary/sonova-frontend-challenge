import './index.scss';

function Benefit({ text }) {
  return (
    <div className="Benefit">
      <img
        src="https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/644a5b68-grey-tick-new_101y01y000000000000000.png"
        alt="tick mark"
      />
      {text}
    </div>
  );
}

export default Benefit;

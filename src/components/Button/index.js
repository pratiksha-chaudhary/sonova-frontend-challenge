import './index.scss';

function Button({ text }) {
  return (
    <div className="Button">
      <a href="https://info.geers.de/zdf/">{text}</a>
    </div>
  );
}

export default Button;

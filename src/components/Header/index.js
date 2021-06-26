import './index.scss';

function Header() {
  return (
    <div className="Header main-app-placement">
      <img
        alt="Geers brand logo"
        src="https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/f496f71e-official-geers-logo_103w010000000000000000.png"
      />
      <div className="contact">
        <div className="phone-number">030 1234 5678</div>
        <div className="open-hours">Mon-Sat &nbsp;&nbsp;&nbsp;9 - 18 Uhr</div>
      </div>
    </div>
  );
}
export default Header;

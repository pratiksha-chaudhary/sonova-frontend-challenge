import './index.scss';

function ImageSection({ imgSrc, imgAlt, imageLater, children }) {
  return (
    <div className={`ImageSection ${imageLater && 'image-later'}`}>
      <img src={imgSrc} alt={imgAlt} loading="lazy" />
      <div className="description">{children}</div>
    </div>
  );
}

export default ImageSection;

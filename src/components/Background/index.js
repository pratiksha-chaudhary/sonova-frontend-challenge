import ImageSection from '../ImageSection';

const imageSrc =
  'https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/b0c886af-zdf-image-geers-store-1.jpg';
const imageAlt = 'work place';

function Background() {
  return (
    <div className="Background main-app-placement">
      <ImageSection imgSrc={imageSrc} imgAlt={imageAlt} imageLater={true}>
        <p>
          Bei GEERS steht der Mensch im Mittelpunkt. Seit 70 Jahren begleiten
          wir Menschen mit Hörminderung auf dem Weg zum „Wiederhören“.
        </p>
        <p>
          In Deutschland sind wir mit über 740 Fachgeschäften Marktführer - kein
          anderes Hörakustik-Unternehmen ist in Deutschland so gut vertreten.
        </p>
        <p>Wir garantieren höchste Qualität, Zufriedenheit und Service.</p>
      </ImageSection>
    </div>
  );
}

export default Background;

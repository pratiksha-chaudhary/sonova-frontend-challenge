import ImageSection from '../ImageSection';

const imageSrc =
  'https://d9hhrg4mnvzow.cloudfront.net/info.geers.de/zdf/49437970-zdf-image-2.jpg';
const imageAlt = 'two elderly people';

function ProblemStatement() {
  return (
    <div className="ProblemStatement main-app-placement">
      <ImageSection imgSrc={imageSrc} imgAlt={imageAlt}>
        <p>
          10 Millionen Menschen leiden in Deutschland unter Hörverlust. Meist
          erfolgt dieser schleichend und erschwert es Betroffenen die Anzeichen
          rechtzeitig zu erkennen und zeitnah zu handeln.
        </p>
        <p>
          Der Schritt zur ersten Hörhilfe ist zweifellos ein Großer. Menschen
          mit Hörminderung zögern oft Jahre, bevor Sie sich für ein Hörgerät
          entscheiden.
        </p>
        <p>Zwei von drei Hörgerätenutzern bereuen sogar.</p>
      </ImageSection>
    </div>
  );
}

export default ProblemStatement;

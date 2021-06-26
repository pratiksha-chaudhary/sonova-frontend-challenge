import Banner from '../Banner';
import Benefits from '../Benefits';
import Button from '../Button';
import Background from '../Background';
import SurveySection from '../SurveySection';
import ProblemStatement from '../ProblemStatement';
import Testimonial from '../Testimonial';

function MainContent() {
  return (
    <>
      <Banner />
      <SurveySection />
      <ProblemStatement />
      <div className="main-app-placement">
        <Button text="at consectetur lorem" />
      </div>
      <Background />
      <Benefits />
      <Testimonial />
    </>
  );
}

export default MainContent;

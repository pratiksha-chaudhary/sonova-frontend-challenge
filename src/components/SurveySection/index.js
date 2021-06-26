import Survey from "../Survey";
import surveys from "./surveys.json";
import "./index.scss";

function SurveySection() {
    return (
        <div className="SurveySection main-app-placement">
            <h3 className="heading">sed pulvinar proin gravida hendrerit</h3>
            <div className="container">
                {surveys.map(({ percentUsers, description }, i) => (
                    <Survey
                        percentUsers={percentUsers}
                        text={description}
                        key={i}
                    />
                ))}
                <Survey
                    percentUsers=""
                    text="*Eurotrak 2018"
                    className="asterisk-content"
                />
            </div>
        </div>
    );
}

export default SurveySection;

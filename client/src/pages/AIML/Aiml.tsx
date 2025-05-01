import Individualaiml from "../../components/Individualaiml/Individualaiml"
import Semesterwiseaiml from "../../components/Semesterwiseaiml/Semesterwiseaiml"
import Subjectwiseaiml from "../../components/Subjectwiseaiml/Subjectwiseaiml"
import Gradedistributionaiml from "../../components/Gradedistributionaiml/gradedistributionaiml"

import {
  semesterwise,
  subjectwise,
  individual,
} from "../../data";
import "./Aiml.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="box box2">
        <Semesterwiseaiml {...semesterwise} />
      </div>
      <div className="box box9">
        <Subjectwiseaiml {...subjectwise} />
      </div>
      <div className="box box5">
        <Gradedistributionaiml {...individual} />
      </div>
      {/*<div className="box box8">
        <Overallaiml {...overall} />
      </div>
      
      <div className="box box2">
        <Semesterwise5yr {...semesterwise} />
      </div>
      <div className="box box9">
        <Subjectwise5yr {...subjectwise} />
      </div>
      <div className="box box5">
        <Indvidual5yr {...individual} />
      </div>
      <div className="box box8">
        <Overall5yr {...overall} />
      </div>


      <div className="box box1">
        <TopBoxcomp2 {...radarchart} />
      </div>
      <div className="box box1">
        <TopBoxcomp3/>
      </div>
      
      <div className="box box7">
        <Treemapchart {...treemap} />
      </div>
      <div className="box box7">
        <BigChartBox />
      </div>*/}

      

      


     



    </div>
  );
};

export default Home;

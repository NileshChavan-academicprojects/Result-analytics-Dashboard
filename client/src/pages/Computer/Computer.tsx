import Gradedistribution from "../../components/Gradedistribution/gradedistribution"
import Semesterwise from "../../components/Semesterwise/Semesterwise"
import Subjectwise from "../../components/Subjectwise/Subjectwise"
import Individual from "../../components/Indvidual/Individual"

import {
  semesterwise,
  subjectwise,
  individual,
  overall
} from "../../data";
import "./Computer.scss";

const Computer = () => {
  return (
    <div className="home">
      <div className="box box2">
        <Semesterwise {...semesterwise} />
      </div>
      <div className="box box9">
        <Subjectwise {...subjectwise} />
      </div>
      <div className="box box5">
        <Gradedistribution {...individual} />
      </div>
      <div className="box box8">
        <Individual {...overall} />
      </div>
      
      {/*<div className="box box2">
        <Semesterwise5 {...semesterwise} />
      </div>
      <div className="box box9">
        <Subjectwise5 {...subjectwise} />
      </div>
      <div className="box box5">
        <Individual5 {...individual} />
      </div>
      <div className="box box8">
        <Overall5 {...overall} />
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

export default Computer;

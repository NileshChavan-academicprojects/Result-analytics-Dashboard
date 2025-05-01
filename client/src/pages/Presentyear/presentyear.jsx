import Individual from "../../components/Gradedistribution/gradedistribution"
import Individual5 from "../../components/5yrIndividual/5yrIndividual"
import Semesterwise from "../../components/Semesterwise/Semesterwise"
import Semesterwise5 from "../../components/5yrSemesterwise/5yrSemesterwise"
import Subjectwise from "../../components/Subjectwise/Subjectwise"
import Subjectwise5 from "../../components/5yrSubjectwise/5yrSubjectwise"
import Overall from "../../components/Indvidual/Individual"
import Overall5 from "../../components/5yrOverall/5yrOverall"

import Latestyear from "../../components/Latestyr/Latestyr"
import Latestyrainl from "../../components/Latestyraiml/Latestyraiml"

import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,

  compsemester7th,
  compsemester5th,
  compsemester3rd,

  linechart,
  piechartbox,
  areachart,
  barchart,
  radarchart,
  treemap,
  semesterwise,
  subjectwise,
  individual,
  overall
} from "../../data";
import "./presentyear.scss";

const Home = () => {
  return (
    <div className="home">

      <div className="box box2">
        <Latestyear {...semesterwise} />
      </div>

      <div className="box box2">
        <Latestyrainl {...semesterwise} />
      </div>


      
      


      {/*<div className="box box1">
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

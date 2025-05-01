
import TopBoxcomp2 from "../../components/topBoxcomputer2/TopBoxcomputer2"
import TopBoxcomp3 from "../../components/topBoxcomputer3/TopBoxcomputer3"

import Linechart from "../../components/Linecharttool/Linecharttool";
import BarChart from "../../components/Barcharttool/Barcharttool";
import Areachart from "../../components/Areacharttool/Areacharttool";
import PieChartBox from "../../components/pieCartBox/PieChartBox";
import Piechart from "../../components/Piecharttool/Piecharttool";
import Radarchart from "../../components/Radarcharttool/Radarcharttool"
import Treemapchart from "../../components/Treemaptool/Treemaptool"

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
  treemap
} from "../../data";
import "./Analyticstools.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="box box2">
        <Linechart {...linechart} />
      </div>
      <div className="box box9">
        <Areachart {...areachart} />
      </div>
      <div className="box box5">
        <BarChart {...barchart} />
      </div>
      <div className="box box8">
        <Piechart {...piechartbox} />
      </div>
      
      {/*<div className="box box7">
        <Treemapchart {...treemap} />
      </div>
      <div className="box box7">
        <BigChartBox />
      </div>*/}

      

      


     



    </div>
  );
};

export default Home;

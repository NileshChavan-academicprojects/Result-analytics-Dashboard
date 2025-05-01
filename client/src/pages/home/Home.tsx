import BarChartBox from "../../components/barChartBoxcomp/BarChartBox";
import BarChartBocaiml from "../../components/barChartBoxaiml/BarChartBox"
import BigchartBoxelectrical from "../../components/bigChartBoxelectrical/BigChartBoxelectrical"
import BigChartBoxmech from "../../components/bigChartBoxmech/BigChartBoxmech"
import BigChartBoxaiml from "../../components/bigChartBoxaiml/BigChartBoxaiml"
import BigChartBox from "../../components/bigChartBox/BigChartBox";
import AimlChartBox from "../../components/aimlchartBox/aimlChartBox"
import ChartBox from "../../components/compchartBox/compChartBox";
import PieChartBox from "../../components/pieCartBox/PieChartBox";
import PieChartBoxaiml from "../../components/pieCartBoxaiml/PieChartBoxaiml";
import TopBoxcomp2 from "../../components/topBoxcomputer2/TopBoxcomputer2"
import TopBoxcomp3 from "../../components/topBoxcomputer3/TopBoxcomputer3"
import TopBoxcomp4 from "../../components/topBoxcomputer4/TopBoxcomputer4"
import TopBoxaiml2 from "../../components/topBoxaiml2/TopBoxaiml2"
import TopBoxaiml3 from "../../components/topBoxaiml3/TopBoxaiml3"
import TopBoxaiml4 from "../../components/topBoxaiml4/TopBoxaiml3"

import {
      barChartBoxRevenue,
      barChartBoxVisit,
      chartBoxConversion,
      chartBoxProduct,
      chartBoxRevenue,
      chartBoxUser,
      aimlsemester7,
      compsemester7th,
      compsemester5th,
      compsemester3rd
} from "../../data";
import "./home.scss";

const Home = () => {
      return (
            <div className="home">
                  <div className="box box2">
                        <ChartBox {...chartBoxUser} />
                  </div>

                  <div className="box box9">
                        <BarChartBox {...barChartBoxRevenue} />
                  </div>

                  <div className="box box5">
                        <AimlChartBox {...chartBoxConversion} />
                  </div>

                  <div className="box box8">
                        <BarChartBocaiml {...barChartBoxVisit} />
                  </div>



                  <div className="box box1">
                        <TopBoxcomp2 />
                  </div>
                  <div className="box box1">
                        <TopBoxcomp3 />
                  </div>
                  <div className="box box1">
                        <TopBoxcomp4 />
                  </div>

                  <div className="box box4">
                        <PieChartBox />
                  </div>

                  <div className="box box11">
                        <TopBoxaiml2 />
                  </div>
                  <div className="box box11">
                        <TopBoxaiml3 />
                  </div>
                  <div className="box box11">
                        <TopBoxaiml4 />
                  </div>

                  <div className="box box44">
                        <PieChartBoxaiml />
                  </div>

                  <div className="box box7">
                        <BigChartBox />
                  </div>

                  <div className="box box7">
                        <BigChartBoxaiml />
                  </div>


                  <div className="box box77">
                        <BigChartBoxmech />
                  </div>

                  <div className="box box77">
                        <BigchartBoxelectrical />
                  </div>

            </div>
      );
};

export default Home;

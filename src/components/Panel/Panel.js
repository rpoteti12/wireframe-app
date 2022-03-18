import React from "react";

import Card from "../UI/Card";
import "./Panel.css";
import { FiArrowLeftCircle } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import {FiSettings} from "react-icons/fi";
import { HiSwitchHorizontal } from "react-icons/hi";
import { HiTag } from "react-icons/hi";
import { HiPaperClip } from "react-icons/hi";
import { HiOutlineChat } from "react-icons/hi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { HiOutlineUserAdd } from "react-icons/hi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { HiIdentification } from "react-icons/hi";
import { HiOutlineBell } from "react-icons/hi";
import { HiChevronDown } from "react-icons/hi";
import { HiCurrencyDollar } from "react-icons/hi";
import{HiOutlineTemplate} from "react-icons/hi";
import{HiChartPie} from "react-icons/hi";
import  {AiFillChrome} from "react-icons/ai";
import  {AiFillInteraction} from "react-icons/ai";
import  {AiOutlineProject} from "react-icons/ai";
import  {AiOutlineQrcode} from "react-icons/ai";
import  {AiOutlinePlus} from "react-icons/ai";
import  {AiTwotoneAppstore} from "react-icons/ai";
import  {FcPieChart} from "react-icons/fc";
import  {FcLineChart} from "react-icons/fc";
import  {FcBusinessman} from "react-icons/fc";
import  {FcBusinesswoman} from "react-icons/fc";
import  {FcCopyright} from "react-icons/fc";
import  {FcDribbble} from "react-icons/fc";
import  {FcTodoList} from "react-icons/fc";
import  {FcPortraitMode} from "react-icons/fc";
import  {FcPlus} from "react-icons/fc";
import  {FcButtingIn} from "react-icons/fc";



const Panel = (props) => {
  return (
    <div>
      <Card className="exp">
        <div>
          <Card className="direction">
            <FcDribbble size="50px"/><br/>
            <HiIdentification size="50px"/><br/>
                <HiOutlineUserGroup size="50px"/> 
                <FcTodoList size="50px"/>
                <br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/>
            <HiOutlineBell size="50px"/><br/>
                <FcPortraitMode size="50px"/>
              </Card>
        </div>
        <div ><br/>
          <button><FcDribbble/> Dashup <HiChevronDown/></button>
          <h6>PAGES</h6>
          <Card className="direction2">
            <div>
            <pre>
              <HiChevronDown/><HiCurrencyDollar/> Sales <br/> 
              &ensp;<HiChevronDown/><HiOutlineTemplate/>Onboarding<br/>
              &ensp;<HiChevronDown/><AiFillInteraction/>User Flow<br/>
              &ensp;&ensp;<AiOutlinePlus/>Add Task<br/>
            </pre></div>
              </Card>
              <br/>
              <Card className="direction3"><div>
            <pre>
              <HiChevronDown/><AiOutlineQrcode/>Payments<br/>
              &ensp;<HiChevronDown/><AiOutlineProject/>Leads Board<br/>
            &ensp;<HiChevronDown/><HiChartPie/>Analytics<br/>
            &ensp;&ensp;<AiOutlinePlus/>Add Client
            </pre></div>
              </Card>
              <br/>
              <Card className="direction4">
                <div>
              <pre>
              <HiChevronDown/><HiCurrencyDollar/>Sales<br/>
              &ensp;<HiChevronDown/><HiOutlineTemplate/>Onboarding<br/>
              &ensp;<HiChevronDown/><AiFillInteraction/>User Flow<br/>
              &ensp;&ensp;<AiOutlinePlus/>Add Bugs<br/>
            </pre></div>
              </Card>
              <br/>
              <button className="btn"><FcPlus/>Add item</button>
        </div>
        <Card className="expenses">
          <Card className="direction5">
                <FiArrowLeftCircle size="50px"/>&ensp;&ensp;&ensp;<FcCopyright size="50px"/>&ensp;&ensp;&ensp;&ensp;<h3>Covet Cast<h6>in Progress</h6></h3>
                <div className="direction1">
                &ensp;&ensp;&ensp;&ensp;
                &ensp;&ensp;&ensp;&ensp;
                <FiUser size="50px"/>
                <h2>ME</h2>
                <FiUsers size="50px"/>&ensp;
                <HiSwitchHorizontal size="50px"/>&ensp;
                <HiTag size="50px"/>&ensp;
                <button className="btn"><FcPlus/>Add task</button>&ensp;
                <FiSettings size="50px"/></div>
              </Card>
          <Card>
            <div className="expenses2">
              <h2>Backlog</h2>
              <Card className="direction">
              <div> 
              <button className="btn">DESIGN</button>
              <FcPlus/> &ensp;&ensp;&ensp;&ensp;
                &ensp;&ensp;
              <HiOutlineDotsHorizontal/>
              <p>Hero section to be improved based on the new feedback</p>
              <FcBusinessman/><FcBusinesswoman/><HiPaperClip/>2 <HiOutlineChat/></div>
              </Card>
              <Card className="direction">
              <div><button className="btn2">ILLUSTRATION</button><FcPlus/> 
              &ensp;&ensp;<HiOutlineDotsHorizontal/>
              <p>Add one more type of chart to the left hand</p>
              <FcPieChart size="80px"/><FcLineChart size="80px"/><FcBusinessman/><HiPaperClip/>1 <HiOutlineChat/></div>
              </Card>
              <button className="btn"><FcPlus/>Add another task</button>
            </div>
            <div className="expenses2">
              <h2>Work in Progress</h2>
              <Card className="direction">
              <div>
              <button><FcPlus/>Add tag</button>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                <HiOutlineDotsHorizontal/><p>Copywriting review for all copies inside app</p>
                <HiOutlineUserAdd/>&ensp;&ensp;&ensp;&ensp; &ensp;&ensp;&ensp;&ensp; &ensp;&ensp;&ensp;&ensp;<HiPaperClip/>2 <HiOutlineChat/></div>
              </Card>
              <Card className="direction">
              <div><button className="btn1">SEO</button><FcPlus size="10px"/> &ensp;&ensp;&ensp;&ensp;
                &ensp;&ensp;&ensp;
                &ensp;&ensp;<HiOutlineDotsHorizontal/><p>H1, H2 and all titles needs tags for better performance</p>
              <FcBusinessman/><FcBusinesswoman/><FcBusinessman/>
              &ensp;&ensp;&ensp;&ensp;
                &ensp;&ensp;&ensp;&ensp;<HiPaperClip/>1 <HiOutlineChat/></div>
              </Card>
              <Card className="direction">
              <div><button className="btn2">ILLUSTRATION</button><FcPlus/> 
              &ensp;&ensp;<HiOutlineDotsHorizontal/><p>Improve colors to have a better contract.</p>
              <FcButtingIn size="150px"/>
              &ensp;&ensp; <FcBusinessman/>
              &ensp;&ensp;&ensp;&ensp;
                &ensp;&ensp;&ensp;&ensp; &ensp;&ensp;&ensp;&ensp;<HiPaperClip/>1 <HiOutlineChat/></div>
              </Card>
              <button className="btn"><FcPlus/>Add another task</button>
            </div>
            <div className="expenses2">
              <h2>In Review</h2>
              <Card className="direction">
                <button className="btn3">MOBILE APP</button>
                 &ensp;&ensp;&ensp;&ensp;
                &ensp;
                
              <HiOutlineDotsHorizontal/>
              <p>Update for newest iOS build</p>
              <AiFillChrome size="150px" color="green"/>
              &ensp;&ensp;<HiOutlineUserAdd/>&ensp;&ensp;&ensp;&ensp; &ensp;&ensp;&ensp;&ensp;
                &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<HiOutlineChat/>
              </Card>
              <button className="btn"><FcPlus/>Add another task</button>
            </div>
            <div className="expenses2">
              <h2>Finished</h2>
              <Card className="direction">
                <button className="btn3">BACKGROUND</button>
                &ensp;&ensp;&ensp;&ensp;
              <HiOutlineDotsHorizontal/>
              <p>Update for newest iOS build</p>
              <AiTwotoneAppstore size="150px" color="light-blue"/>
              <HiOutlineChat/>
              </Card>
              <Card className="direction">
              <button className="btn">DESIGN</button>
              <FcPlus/>  &ensp;&ensp;&ensp;&ensp;
                &ensp;&ensp; 
              
              <HiOutlineDotsHorizontal/>
              <p>Find new ways to make it look more minimal and clean</p>
              <FcBusinessman/><FcBusinesswoman/>
              &ensp;&ensp;&ensp;&ensp;
              &ensp;
              &ensp;&ensp;&ensp;&ensp; &ensp;&ensp;&ensp;&ensp;
              <HiOutlineChat/>
              </Card>
              <Card className="direction">
                <button className="btn1">UX</button>
                <FcPlus/>  &ensp;&ensp;&ensp;&ensp;
                &ensp;&ensp;&ensp;&ensp; &ensp;&ensp;&ensp;&ensp;
                &ensp;&ensp;
              <HiOutlineDotsHorizontal/>
              <p>User Experience needs to be tested on all devices</p>
              <FcBusinessman/><FcBusinesswoman/>
              &ensp;&ensp;&ensp;&ensp;
              &ensp;
              &ensp;&ensp;&ensp;&ensp; &ensp;&ensp;&ensp;&ensp;
              <HiOutlineChat/>
              </Card>
              <button className="btn"><FcPlus/>Add another task</button>
            </div>
          </Card>
        </Card>
      </Card>
    </div>
  );
};

export default Panel;

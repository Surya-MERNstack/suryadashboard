import React, { lazy, useState } from 'react';
import './Dashboard.css';
import {
  EnvelopeFill,
  PersonCircle,
  Search,
  Speedometer2,
  GearFill,
  WrenchAdjustable,
  CalendarFill,
  Clipboard2DataFill,
  CurrencyDollar,
  ChatDotsFill,
  FolderFill,
  GraphDownArrow,
  Table,
  Download,
  EmojiWinkFill,
  BellFill
} from 'react-bootstrap-icons';
import Chart from "react-apexcharts";
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [data, setData] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            return "$" + val.toLocaleString("en-US");
          }
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100]
        }
      },
      stroke: {
        curve: "smooth",
        width: 3
      },
      markers: {
        size: 5,
        colors: "#fff",
        strokeColors: "#7c7c7c",
        strokeWidth: 2,
        hover: {
          size: 7
        }
      }
    },
    series: [
      {
        name: "Jan",
        data: [20000, 30000, 40000, 45000, 50000, 55000, 60000, 55000, 50000, 45000, 40000, 35000]
      }
    ]
  });

  const [datas, setDatas] = useState(
    {
      options: {},
      series: [30, 15, 55],
      labels: ['Referral (30%)', 'Social (15%)', 'Direct (55%)']
    }
  );

  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdownU = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  
  const [ispage, setpage] = useState(false);

  const togglepage = () => {
    setpage(!ispage);
  };

  return (
    <div className={`main-das ${sidebarVisible ? '' : 'sidebar-hidden'}`}>
      <span className='side-bar'>
        <EmojiWinkFill className='smile' /> <span style={{ color: "white", fontWeight: "700", marginLeft: "1rem" }}>Admin</span>
        <br /><hr style={{ borderBottom: "none", boxShadow: "rgba(0, 0, 0, 0.10) 1.85px 1.85px 2.6px" }} />
        <br /> <Link to="/" onLoad={lazy} style={{textDecoration:"none"}}> <a> <Speedometer2 className='side-icons-1' /> <br /> <b style={{ marginLeft: "0.8rem" }}>Dashboard</b> </a></Link>
        <br /><br />  <hr style={{ borderBottom: "none", boxShadow: "rgba(0, 0, 0, 0.10) 1.85px 1.85px 2.6px" }} /> <br />
        <a style={{ color: "lightgrey", marginLeft: "0.8rem" }} ><b>INTERFACE</b></a>
        <br /> <br />

        {/* Components */}
        <div className={`dropdown ${isOpen ? 'open' : ''}`}>
  <div className="dropdown-header" onClick={toggleDropdown}>
  <div className='total-comp'>
  <GearFill className='side-icon'/> <br/>
   <a className='side-icon' >Components</a>
    <span className={`arrow ${isOpen ? 'open' : ''}`}>&rsaquo;</span>
  </div>
  </div>
  <div className="dropdown-content">
    <span style={{ fontSize: "0.6rem", fontWeight: "800", color: "lightgrey" }}>CUSTOM COMPONENTS</span> <br /> <br />
    <Link to="/login"><button className="btn">Buttons</button></Link>
    <br />
    <br />
    <Link to="/login"><button className="btn">Cards</button></Link>
  </div>
</div>

{/* Utilities */}
<div className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
  <WrenchAdjustable className='side-icons-3' />
  <a style={{ color: "rgb(214, 203, 203)",}}> Utilities</a>
  <div className="dropdown-header-u" onClick={toggleDropdownU}>
  <span className={`arrow-3 ${isDropdownOpen ? 'open' : ''}`}>&rsaquo;</span>
  </div>
  <div className="dropdown-content-u">
    <span style={{ fontSize: "0.6rem", fontWeight: "800", color: "lightgrey" }}>CUSTOM UTILITIES:</span> <br /> <br />
    <Link to="/login"><button className="btn">Color</button></Link>
    <br />
    <br />
    <Link to="/login"><button className="btn">Border</button></Link>
    <br />
    <br />
    <Link to="/login"><button className="btn">Animations</button></Link>
    <br />
    <br />
    <Link to="/login"><button className="btn">Others</button></Link>
  </div>
</div>

<br /> <hr style={{ borderBottom: "none", boxShadow: "rgba(0, 0, 0, 0.10) 1.85px 1.85px 2.6px" }} /> <br />
<a style={{ color: "rgb(214, 203, 203)", marginLeft: "15%" }}><b>ADDONS</b></a>
<br /> <br />

{/* Pages */}

<div className={`dropdown ${ispage ? 'open' : ''}`}>


  <div className="dropdown-header-page" onClick={togglepage}>
    <br /> <br />
   <div style={{display:'flex',justifyContent:"flex-start",border:"2px solid black",width:"5rem",height:"2rem",marginTop:"-2rem"}}>
   <FolderFill className='side-icons-4' /> 
    <a style={{ color: "rgb(214, 203, 203)",marginLeft:"1rem"}}>Page</a>
    <span className={`arrow-page ${ispage ? 'open' : ''}`}> &rsaquo;</span>
   </div>
  </div>
  <div className="dropdown-content-page">
    <span style={{ fontSize: "0.6rem", fontWeight: "800", color: "lightgrey" }}>LOGIN SCREEN:</span> <br /> <br />
    <Link to="/login"><button className="btn">Login</button></Link>
    <br />
    <br />
    <Link to="/create"><button className="btn">Register</button></Link>
    <br />
    <br />
    <Link to="/forgot"><button className="btn">Forgot Password</button></Link>
    <br />
    <br />
    <span style={{ fontSize: "0.6rem", fontWeight: "800", color: "lightgrey" }}>Others Pages</span>
    <br/>
    <br/>
    <Link to="*"><button className="btn">404 Page</button></Link>
    <br />
    <br /> <Link to="/"><button className="btn">Blank Page</button></Link>
    <br />
    <br />
  </div>
</div>
        <br /> <br/><GraphDownArrow className='side-icons' />
        <a style={{ color: "rgb(214, 203, 203)", marginLeft: "15%" }}>Charts</a>
        <br /><br /><br />
        <Table className='side-icons' /> 
        <a style={{ color: "rgb(214, 203, 203)", marginLeft: "15%" }}>Tables</a>
        <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
        {sidebarVisible ? (
          <>
            <span>Hide</span>
            <GraphDownArrow className='side-icons' />
          </>
        ) : (
          <>
            <span>Show</span>
            <Speedometer2 className='side-icons' />
          </>
        )}
      </button>
      </span>
    
      <div className='total-head'>
        <input type='text' className='input' placeholder='Search...' /> <Search className='search-icon' />
        <span className='bell-icon'><BellFill /><span className='top-bell'>3+</span></span>
        <span className='mail-icon'><EnvelopeFill /><span className='top-bell'>7</span></span>
        <span className='line'><span style={{ marginLeft: "0.7rem" }}>Surya Perumal <PersonCircle style={{ color: "orange" }} /></span></span>
      </div>
      <div className='das-heading'>
        <h2>Dashboard</h2>
        <h3 style={{ border: "none", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", padding: "5px", borderRadius: "3%", background: "dodgerblue", color: "white", cursor: "pointer" }}> <Download />Download</h3>
      </div>
      <div className='second-das'>
        <div className='box-1'>
          <CalendarFill className='table-icon' />
          <span className='box-1-info'>
            EARNINGS (MONTHLY) <br />
            <span style={{ color: "rgb(181, 181, 181)", fontSize: "1.4rem" }}>$40,000</span>
          </span>
        </div>
        <div className='box-2'>
          <CurrencyDollar className='table-icon' />
          <span className='box-2-info'>
            EARNINGS (ANNUAL) <br />
            <span style={{ color: "rgb(181, 181, 181)", fontSize: "1.4rem" }}>$215,000</span>
          </span>
        </div>
        <div className='box-3'>
          <Clipboard2DataFill className='table-icon' />
          <span className='box-3-info'>
            TASKS <br />
            50% <input type="range" disabled className='range-input' value={50} />
          </span>
        </div>
        <div className='box-4'>
          <ChatDotsFill className='table-icon' />
          <span className='box-4-info'>
            PENDING REQUESTS <br />
            18
          </span>
        </div>
        <div className='chart-1'>
          <h3 className='chart-h1'>Earnings Overview</h3>
          <div className='chart-1-box'>
            <Chart
              options={data.options}
              series={data.series}
              type="line"
              width="500" />
          </div>
        </div>
        <div className='chart-2'>
          <div className='chart-2-box'>
            <h3 className='chart-h2'>Revenue Sources</h3> <br /><br />
            <Chart
              options={datas.options}
              series={datas.series}
              labels={datas.labels}
              type="donut"
              width="380"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;


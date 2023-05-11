import React, { useState } from 'react'
import './Dashboard.css'
import {EnvelopeFill, PersonCircle ,Search ,Speedometer2 ,GearFill ,WrenchAdjustable ,CalendarFill , Clipboard2DataFill,CurrencyDollar ,ChatDotsFill ,FolderFill ,GraphDownArrow ,Table ,Download ,EmojiWinkFill,  BellFill} from 'react-bootstrap-icons'
import Chart from "react-apexcharts";


const Dashboard = () => {
  const [data ,setData ] = useState(  {
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
    
    
})

  const [datas , setdatas] = useState(
    {
      options: {},
      series: [30, 15, 55],
      labels: ['Referral (30%)', 'Social (15%)', 'Direct (55%)']
     }
  
    )

    return (
    <div className='main-das'> 
        <span className='side-bar'>
            <EmojiWinkFill className='smile' /> <span style={{color:"white",fontWeight:"700",marginLeft:"1rem"}}>Admin</span>
            <br/><hr style={{borderBottom:"none",boxShadow: "rgba(0, 0, 0, 0.10) 1.85px 1.85px 2.6px"}}/> 
         <br/> <a> <Speedometer2 className='side-icons-1'/> <br/> <b style={{marginLeft:"0.8rem"}}>Dashboard</b> </a>
          <br/><br/>  <hr style={{borderBottom:"none",boxShadow: "rgba(0, 0, 0, 0.10) 1.85px 1.85px 2.6px"}}/> <br/>
          <a style={{color:"lightgrey",marginLeft:"0.8rem"}} ><b>INTERFACE</b></a>
          <br/> <br/> <GearFill className='side-icons'/>
          <a style={{marginTop :" 0.5rem",marginLeft : "15%"}}>Components</a> <br/>
          <br/> <WrenchAdjustable className='side-icons'/><br/>
          <a style={{ color: "rgb(214, 203, 203)",marginLeft : "21%"}}>Utilities</a><br/>
          <br/> <hr style={{borderBottom:"none",boxShadow: "rgba(0, 0, 0, 0.10) 1.85px 1.85px 2.6px"}}/> <br/>
          <a style={{ color: "rgb(214, 203, 203)",marginLeft : "15%"}}><b>ADDONS</b></a>
          <br/> <br/>
          <FolderFill className='side-icons'/> <br/>
          <a style={{ color: "rgb(214, 203, 203)",marginLeft : "25%"}}>Page</a> <br/> <br/>
          <br/> <GraphDownArrow className='side-icons'/> <br/>
          <a style={{ color: "rgb(214, 203, 203)",marginLeft : "25%"}}>Charts</a>
          <br/><br/><br/> 
           <Table className='side-icons'/> <br/>
          <a style={{ color: "rgb(214, 203, 203)",marginLeft : "25%"}}>Tables</a>
        </span>
        <div className='total-head'>
        <input type='text' className='input' placeholder='Serach...'/> <Search className='search-icon'/>
        <span className='bell-icon'><BellFill/><span className='top-bell'>3+</span></span>
        <span className='mail-icon'><EnvelopeFill/><span className='top-bell'>7</span></span>
        <span className='line'><span style={{marginLeft : "0.7rem"}}>Surya Perumal <PersonCircle style={{color : "orange"}}/></span></span>
        </div>
       <div className='das-heading'>
        <h2>Dashboard</h2> 
       <h3 style={{border:"none",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",padding:"5px",borderRadius:"3%",background:"dodgerblue",color:"white",cursor:"pointer"}}> <Download/>Download</h3>
       </div>
       <div className='second-das'>
        <div className='box-1'>
        <CalendarFill style={{color:"lightgray",marginLeft :"12rem",marginTop:"1rem",fontSize:"2rem",fontWeight:"700"}}/>
        <span className='box-1-info'>
        EARNINGS (MONTHLY) <br/>
        <span style={{color:"rgb(181, 181, 181)",fontSize :"1.4rem"}}>$40,000</span>
        </span>
        </div>
          <div className='box-2'>
          <CurrencyDollar style={{color:"lightgray",marginLeft :"11.6rem",marginTop:"0.5rem",fontSize:"3rem"}}/>
          <span className='box-2-info'>
          EARNINGS (ANNUAL) <br/>
          <span style={{color:"rgb(181, 181, 181)",fontSize :"1.4rem"}}>$215,000</span>
          </span>
           </div>
            <div className='box-3'>
            <Clipboard2DataFill style={{color:"lightgray",marginLeft :"12rem",marginTop:"0.5rem",fontSize:"2rem"}}/>
              <span className='box-3-info'>
                TASKS <br/>
                 50% <input type="range" disabled className='range-input' value={50}/>
               </span>
            </div>
             <div className='box-4'>
             <ChatDotsFill style={{color:"lightgray",marginLeft :"12rem",marginTop:"0.5rem",fontSize:"2rem"}}/>
               <span className='box-4-info'>
                PENDING REQUESTS <br/>
                18
              </span>
             </div>
             <div className='chart-1'>
             <h3  className='chart-h1'>Earings Overview</h3>
            <div className='chart-1-box'>
            <Chart
              options={data.options}
              series={data.series}
              type="line"
              width="500"/>
             </div>
            </div>
             <div className='chart-2'>
               <div className='chart-2-box'>
                <h3 className='chart-h2'>Revenue Sources</h3> <br/><br/>
               <Chart 
               options={datas.options} 
               series={datas.series}
               labels = {datas.labels} 
               type="donut" width="380" 
               />
               </div>
             </div>
      </div>
    </div>
  )
}

export default Dashboard;

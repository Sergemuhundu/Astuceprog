import React from 'react';
import "./Main.css";
import hello from "../../../Assets/hello.jpg";
import Chart from "../charts/Chart";
import EditorScreen from '../Editor/Editor';

const Main=()=>{
    return(
<main>
        <div className="main__container">
            <div className="main__title">
                <img src={hello} alt="hello"/>
                <div className="main__greeting">
                    <h1>Hello Astuceprog</h1>
                    <p>Welcome to your admin dashboard</p>
                </div>
            </div>
            <div className="main__cards">
                <div className="card">
                    <i className="fa fa-user-o fa-2x text-lightblue"></i>
                    <div className="card_inner">
                        <p className="text-primary-p">Number of Subscribers</p>
                        <span className="font-bold text-title">578</span>   
                    </div>
                </div>

                <div className="card">
                    <i className="fa fa-calendar fa-2x text-red"></i>
                    <div className="card_inner">
                        <p className="text-primary-p">Times of Watching</p>
                        <span className="font-bold text-title">2467</span>   
                    </div>
                </div>

                <div className="card">
                    <i className="fa fa-video-camera fa-2x text-yellow"></i>
                    <div className="card_inner">
                        <p className="text-primary-p">Number of Videos</p>
                        <span className="font-bold text-title">578</span>   
                    </div>
                </div>

                <div className="card">
                    <i className="fa fa-thumbs-up fa-2x text-green"></i>
                    <div className="card_inner">
                        <p className="text-primary-p">Number of Likes</p>
                        <span className="font-bold text-title">578</span>   
                    </div>
                </div>
            </div>
          <div className="charts">
              <div className="charts__left">
                  <div className="charts__left__title">
                      <div>
                          <h>Daily Reports</h>
                          <p>Cupertino, California, USA</p>
                      </div>
                      <i className="fa fa-usd"></i>
                  </div>
                  <Chart/>
              </div>
              <div className="charts__right">
                  <div className="charts__right__title">
                      <div>
                          <h1>Stats Reports</h1>
                          <p>Cupertino, California, USA</p>
                      </div>
                      <i className="fa fa-usd"></i>
                  </div>
                    <div className="charts__right__cards">
                        <div className="cad1">
                            <h1>Income</h1>
                            <p>$75,300</p>
                        </div>
                        <div className="cad2">
                            <h1>Sales</h1>
                            <p>$124,200</p>
                        </div>
                        <div className="cad3">
                            <h1>Users</h1>
                            <p>3900</p>
                        </div>
                        <div className="cad4">
                            <h1>Orders</h1>
                            <p>1881</p>
                        </div>
                    </div>
              </div>
            <div className="editor_area">

            </div>
            
          </div>  
        </div>
</main>
    )
}
export default Main;
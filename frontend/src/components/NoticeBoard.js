import React from "react";
import { Link } from "react-router-dom";
import "../components/css/NoticeBoard.css";
import second from '../images/Result/2nd.jpeg';
import seventh from '../images/Result/7th.jpeg';
import fifth from '../images/Result/5th.jpeg';
const NoticeBoard = () => {
  return (
    <>

      <div className=" py-4 noticeboard_hero">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <h3 className="mb-3">Examination</h3>
            <div className="bg-white border-gray">
              <div className="row">
                <div className="col notice_heading">
                </div>
                <div>
                  <div className="p-3">
                    {/* ```````````````````````````````` */}
                    <div className="mt-3">
                    <label for="touch0"><p className="cursor">Bscs</p></label>               
                        <input type="checkbox" id="touch0"/> 
                        
                        <ul className="slide0">
                            <li><Link to={second} target='_blank'>BSCS Second Semester Datesheet 2021</Link></li> 
                            <li><Link to={fifth} target='_blank'>BSCS 5th Semester Datesheet 2021</Link></li> 
                            <li><Link to={seventh} target='_blank'>BSCS 7th Semester Datesheet 2021</Link></li>
                            
                        </ul>
                    </div>
                    <hr />
                    {/* ```````````````````````````````````````` */}
                    <div>
                    <label for="touch1"><p className="cursor">BBA</p></label>               
                        <input type="checkbox" id="touch1"/> 
                        <ul className="slide0">
                            <li><Link to='' target='_blank'>BBA 3rd Semester Datesheet 2021</Link></li> 
                            <li><Link to='' target='_blank'>BBA 7th Semester Datesheet 2021</Link></li> 
                            <li><Link to='' target='_blank'>BBA SPECIAL EXAMS DATESHEET</Link></li> 
                        </ul>
                    </div>
                    <hr />
                    {/* `````````````````````````````````````````````````````` */}
                    <div className="">
                    <label for="touch2"><p className="cursor">Bcom</p></label>               
                        <input type="checkbox" id="touch2"/> 
                        <ul className="slide0">
                            <li><Link to=' ' target='_blank'>Bcom 3rd Semester Datesheet 2021</Link></li> 
                            <li><Link to=' ' target='_blank'>Bcom 7th Semester Datesheet 2021</Link></li> 
                            <li><Link to=' ' target='_blank'>Bcom SPECIAL EXAMS DATESHEET</Link></li> 
                        </ul>
                    </div>
                    <hr />
                    {/* `````````````````````````````````````````````````````` */}
                    <div>
                    <label for="touch3"><p className="cursor">BSM</p></label>               
                        <input type="checkbox" id="touch3"/> 
                        <ul className="slide0">
                            <li><Link to=' ' target='_blank'>Bsm 3rd Semester Datesheet 2021</Link></li> 
                            <li><Link to=' ' target='_blank'>Bsm 7th Semester Datesheet 2021</Link></li> 
                            <li><Link to=' ' target='_blank'>Bsm SPECIAL EXAMS DATESHEET</Link></li> 
                        </ul>
                    </div>
                    <hr />
                    {/* ```````````````````````````````````````````` */}
                    <div className="py-1">
                    <label for="touch4"><p className="cursor">LAW</p></label>               
                        <input type="checkbox" id="touch4"/> 
                        <ul className="slide0">
                            <li><Link to=' ' target='_blank'>Law 3rd Semester Datesheet 2021</Link></li> 
                            <li><Link to=' ' target='_blank'>Law 7th Semester Datesheet 2021</Link></li> 
                            <li><Link to=' ' target='_blank'>Law SPECIAL EXAMS DATESHEET</Link></li> 
                        </ul>
                    </div>
                    {/* ```````````````````````````````````````````` */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NoticeBoard;
import React from 'react';
import '../components/css/LeaderBoard.css';
// import loginpic from "../../src/img2.png";
import rank1_pic from '../images/LeaderBoard/Gold.png';
import rank2_pic from '../images/LeaderBoard/Silver.png';
import rank3_pic from '../images/LeaderBoard/Bronze.png';
import { StarBorder } from '@material-ui/icons';


const Practice=()=>{
    return(
        <>
        <div className="container-fluid leaderboard">
            <div class="leaderboard">
        {/* <img src="images/Photography.jpg" class="theme-img" alt='#'/> */}
        <div class="description">
            <h3  className='leaderboard_h1'><span className='icon'> <StarBorder/>  </span> <span>Leader Board</span>  <span className='icon'><StarBorder/> </span></h3>
            {/* <p>Date: 02/24/2022</p> */}
            {/* <input id="search" class="search" placeholder="Search" oninput="search()"/> */}
        </div>
            <table>
                <thead>
                    <tr>
                        <td><b> Rank</b></td>
                        <td>
                            <b>Name</b>
                        </td>
                        <td>
                            <b>Likes</b>
                        </td>
                        <td>
                            <b>Average</b>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td id="winner">1<img src={rank1_pic} alt='#'/></td>
                        <td><p> Muhammad Ali</p></td>
                        <td>239</td>
                        <td>12.54</td>
                    </tr>
                    
                    <tr>
                        <td id="runner-up">2<img src={rank2_pic} alt='#'/></td>
                        <td><p> Muhammad Zohaib</p></td>
                        <td>209</td>
                        <td>10.2</td>
                    </tr>
                    
                    <tr>
                        <td id="second-runner-up">3<img src={rank3_pic} alt='#'/></td>
                        <td><p> Muhammad Rafey</p></td>
                        <td>154</td>
                        <td>8.4</td>
                    </tr>
                    
                    <tr>
                        <td>4 </td>
                        <td><p> Musharaf Ali</p></td>
                        <td>100</td>
                        <td>3.1</td>
                    </tr>
                    
                    <tr>
                        <td>5</td>
                        <td><p> Aminah Ali</p></td>
                        <td>82</td>
                        <td>2.0</td>
                    </tr>
                </tbody>
            </table>
        </div>

        {/* `````````````` */}
        </div>
        </>
    );
}
export default Practice;
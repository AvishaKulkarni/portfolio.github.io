import {useState, useEffect} from "react";
import profPic from "../../assets/images/dpnew.jpg";
import "./LandingPage.css";


function LandingPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const about = {
        head:["Team Player","Enthusiast","Learner"],
        body:["para1","para2","para3"]
    }
    useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [])
    return ( <>
  {/* <h1 style={{color:"#ffffff"}}>Landing Page</h1>  */}
    <div className="about-container">
    <div className="profile-pic">
        <img src={profPic} alt="profilePicture" width="100%" />
    </div>
    <div className="profile-about">
     <p className="profile-desc-heading">About</p>
     <div>
        <h3>{about.head[currentIndex]||"Team Player"}</h3>
        <p>{about.body[currentIndex]||"para1"}</p>
     </div>
    
    </div>
    </div>
     </> );
}

export default LandingPage;
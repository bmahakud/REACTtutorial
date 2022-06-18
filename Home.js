import classes from './Home.module.css';

import Image1 from './einstein1.png';

const Home =()=>{



return (


    <div className={classes.homePage}>

          <div className={classes.titleDiv}> <span>dirac AI private Limited</span> </div>
	  <div className={classes.picDiv}> 

             <img className={classes.userImage} src={Image1} alt='edr Logo' />
	
	  </div>
	  <div className={classes.aboutcompanyDiv}> About the company </div>

     </div>



);



}

export default Home;


import React,{useState} from 'react';



import classes from './App.module.css';

function App() {


   const [homePage, setHomePage]= useState(true);
   const [contactusPage, setContactusPage]= useState(false);
   const [teamPage, setTeamPage] = useState(false);






   function showHomePage(){
      setHomePage(true);
      setContactusPage(false);
      setTeamPage(false);	   
   }



   function showAboutPage(){
      setContactusPage(true);
      setHomePage(false);
      setTeamPage(false);	   
   }


   
   function showTeamPage(){
      setTeamPage(true);
      setContactusPage(false);
      setHomePage(false);	   

   }








  return (
    <div className={classes.app}>

      <div className={classes.header} >

	   <div className={classes.homePageButton} onClick={showHomePage}>           
	     HOME
           </div>


          <div className={classes.aboutPageButton} onClick={showAboutPage}>
             ABOUT
          </div>           

	  <div className={classes.teamPageButton} onClick={showTeamPage}>
             TEAM
          </div>
        


      </div>
    

      <div className={classes.body}>


        { homePage &&
        <div className={classes.homePage}>
    
           This is home page  
         
        </div>

        }


        { contactusPage &&
        <div className={classes.aboutPage}>

          This is about page

        </div>

        }


	 { teamPage &&
          <div className={classes.teamPage}>

            This is Team page

           </div>

         }









      </div>





    </div>
  );
}

export default App;

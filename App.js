import React,{useState} from 'react';



import classes from './App.module.css';

function App() {


   const [homePage, setHomePage]= useState(true);
   const [contactusPage, setContactusPage]= useState(false);
   const [teamPage, setTeamPage] = useState(false);

   const [careerPage, setCareerPage] = useState(false);

   const [productPageMenu, setProductPageMenu] = useState(false);	

   	





   function showHomePage(){
      setHomePage(true);
      setContactusPage(false);
      setTeamPage(false);
      setCareerPage(false);
      	   
   }



   function showAboutPage(){
      setContactusPage(true);
      setHomePage(false);
      setTeamPage(false);	   
      setCareerPage(false);	   
   }


   
   function showTeamPage(){
      setTeamPage(true);
      setContactusPage(false);
      setHomePage(false);
      setCareerPage(false);	   

   }


  function showCareerPage(){
   setCareerPage(true);
   setTeamPage(false);
   setContactusPage(false);
   setHomePage(false);	  


  }


   function showDropDownPage(){
    setProductPageMenu(!productPageMenu);

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
        
          <div className={classes.careerPageButton} onClick={showCareerPage}>
             Career
          </div>


	  <div className={classes.producMenuButton} onClick={showDropDownPage}>
             Products
          </div>

          { productPageMenu && 
	  <div className={classes.dropDownMenu}>

           Goto our Teaching platform

	  </div>
          }




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



        { careerPage &&
          <div className={classes.teamPage}>

            This is Career page

           </div>

         }














      </div>





    </div>
  );
}

export default App;

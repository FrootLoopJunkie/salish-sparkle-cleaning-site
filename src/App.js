import { useState } from 'react';

import './App.css';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import About from './components/About.js'
import Services from './components/Services.js'
import ImageSlideshow from './components/ImageSlideshow.js';
import ConsultationButtonInline from './components/ConsultationButtonInline.js';
import Contact from './components/Contact.js'

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  function changePageTo(page) {
    setCurrentPage(page)
  }

  if (currentPage == "Home") {
    return (
      <div className="App">
        <Header
          changePageTo={changePageTo}
        />
        <ImageSlideshow
          images={[
            "https://media.discordapp.net/attachments/222776929256734722/1191671574902865930/Salish_Sparkle_Cleaning_Icon_variant2.png?ex=65a649a3&is=6593d4a3&hm=3077b265068cc39a6a8cbc27c55c2004732895a8c2df40497325964ee1de6045&=&format=webp&quality=lossless"
          ]}
          currentPage
          changePageTo={changePageTo}
        />
        <Services
          changePageTo={changePageTo}
        />
        <About />
        <Footer />
      </div>
    );
  } else if (currentPage == "Consultations") {
    return (
      <div className='App'>
        <Header
          changePageTo={changePageTo}
        />
        <br></br>
        <span>Hours:</span>
        <br></br>
        <span>9am to 6pm - 7 Days a Week</span>
        <Contact />
        <button className='ConsultationRequestButton' onClick={() => window.location = "tel:425-521-7835"}>Call for Quote</button>
        <Footer />
      </div>
    )
  } else if (currentPage == "Home Cleaning") {
    return (
      <div className='App'>
        <Header
          changePageTo={changePageTo}
        />
        <div className='HomeCleaningPageContainer'>
          <h3 className='ServicesOffered'>Home Cleaning</h3>
          <span>1 Bedroom Home Estimated $90 @ 3 hours <br /> 3 Bedroom Home Estimated $150 @ 5 hours <br />  Basic Service $30/h*</span>
          <ConsultationButtonInline
            changePageTo={changePageTo}
          />
          <span className='ServicesOffered'>Services Offered</span>
          <div className='FlexboxRow'>
          <div className='FlexboxColumn ServiceContainerCateg'>
              <span className='ServiceCatergory'>General</span>
              <ul>
                <li className='ServicesListItem'>Floor Care: <span className='ServicesListItemSubtext'>Sweeping and spot cleaning on all floor types</span></li>
                <li className='ServicesListItem'>Mopping: <span className='ServicesListItemSubtext'>Hard floors</span></li>
                <li className='ServicesListItem'>Glass Cleaning: <span className='ServicesListItemSubtext'>Mirrors, glass tables, and interior windows</span></li>
                <li className='ServicesListItem'>Trash Removal: <span className='ServicesListItemSubtext'>Emptying bins and replacing liners</span></li>
                <li className='ServicesListItem'>Surface Sanitization: <span className='ServicesListItemSubtext'>High-touch areas, doorknobs, light switches</span></li>
                <li className='ServicesListItem'>Ceiling and Corner Web Removal: <span className='ServicesListItemSubtext'>Clearing webs and dust from ceilings and corners</span></li>
                <li className='ServicesListItem'>Baseboard Cleaning: <span className='ServicesListItemSubtext'>Wiping down and dusting baseboards</span></li>
              </ul>
            </div>
            <div className='FlexboxColumn ServiceContainerCateg'>
              <span className='ServiceCatergory'>Kitchen</span>
              <ul>
                <li className='ServicesListItem'>Appliance Cleaning: <span className='ServicesListItemSubtext'>Exterior of refrigerator, oven, microwave, dishwasher</span></li>
                <li className='ServicesListItem'>Countertop Cleaning: <span className='ServicesListItemSubtext'>Including backsplashes, sanitizing surfaces</span></li>
                <li className='ServicesListItem'>Sink Scrubbing: <span className='ServicesListItemSubtext'>Disinfecting and polishing the sink and faucet</span></li>
                <li className='ServicesListItem'>Cabinet Front Cleaning: <span className='ServicesListItemSubtext'>Wiping down cabinet exteriors, sanitizing handles</span></li>
                <li className='ServicesListItem'>Table and Chair Cleaning: <span className='ServicesListItemSubtext'>Sanitizing dining tables and chairs</span></li>
                <li className='ServicesListItem'>Floor Sweeping and Mopping: <span className='ServicesListItemSubtext'>Focusing on hard-to-reach areas</span></li>
                <li className='ServicesListItem'>Pantry Tidying: <span className='ServicesListItemSubtext'>Organizing and wiping shelves (as requested)</span></li>
                <li className='ServicesListItem'>**Refrigerator Interior</li>
                <li className='ServicesListItem'>**Oven Interior</li>
              </ul>
            </div>
            <div className='FlexboxColumn ServiceContainerCateg'>
              <span className='ServiceCatergory'>Bathroom</span>
              <ul>
                <li className='ServicesListItem'>Toilet Cleaning: <span className='ServicesListItemSubtext'>Including base and behind the toilet, sanitizing</span></li>
                <li className='ServicesListItem'>Shower/Tub Cleaning: <span className='ServicesListItemSubtext'>Scrubbing showers, bathtubs, and enclosures</span></li>
                <li className='ServicesListItem'>Sink and Countertop: <span className='ServicesListItemSubtext'>Disinfecting and polishing surfaces</span></li>
                <li className='ServicesListItem'>Mirror Cleaning: <span className='ServicesListItemSubtext'>Streak-free polishing</span></li>
                <li className='ServicesListItem'>Tile and Grout Scrubbing: <span className='ServicesListItemSubtext'>Focusing on mold and mildew removal</span></li>
                <li className='ServicesListItem'>Floor Sweeping and Mopping: <span className='ServicesListItemSubtext'>Special attention to corners and behind the toilet</span></li>
                <li className='ServicesListItem'>Cabinet and Drawer Exterior: <span className='ServicesListItemSubtext'>Wiping down surfaces</span></li>
                <li className='ServicesListItem'>Exhaust Fan Dusting: <span className='ServicesListItemSubtext'>Removing dust and buildup</span></li>
                <li className='ServicesListItem'>**Towel Replacement: <span className='ServicesListItemSubtext'>Changing towels if provided</span></li>
              </ul>
            </div>
          </div>
          <span>*As rates are hourly, all estimates are subject to change, notice will be given of any additional time needed,
            and no additional hours will be charged without your consent.</span>
          <br />
          <span>**On request, additional charge.</span>
        </div>
        <ConsultationButtonInline
          changePageTo={changePageTo}
        />
        <Footer />
      </div>
    )
  } else if (currentPage == "Commercial Cleaning") {
    return (
      <div className='App'>
        <Header
          changePageTo={changePageTo}
        />
        <div>
          <span>Commercial Cleaning</span>
          <p>Page Under Construction</p>
          <p>Contact Sales@SalishSparkleCleaning.com for Information</p>
          <Footer />
        </div>
      </div>
    )
  }


}

export default App;

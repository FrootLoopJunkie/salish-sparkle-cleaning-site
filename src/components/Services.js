function Services({changePageTo}) {
    return (
      <div className="ServicesContainer">
        <h3 className="ServicesHeader">Our Services</h3>
        <div className="ServicesFlexbox">
          <button onClick={() => changePageTo("Home Cleaning")} className="ServiceContainer">
          Home Cleaning
          </button>
          <button onClick={() => changePageTo("Commercial Cleaning")} className="ServiceContainer">
          Commercial Cleaning
          </button>
        </div>
      </div>
    );
  }
  
  export default Services;
  
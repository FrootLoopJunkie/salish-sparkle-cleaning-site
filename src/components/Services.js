function Services({changePageTo}) {
    return (
      <div className="ServicesContainer">
        <h3 className="ServicesHeader">Our Services</h3>
        <div className="ServicesFlexbox">
          <div onClick={() => changePageTo("Home Cleaning")} className="ServiceContainer">
            <span className="ServicesText">Home Cleaning</span>
          </div>
          <div onClick={() => changePageTo("Commercial Cleaning")} className="ServiceContainer">
            <span className="ServicesText">Commercial Cleaning</span>
          </div>
        </div>
      </div>
    );
  }
  
  export default Services;
  
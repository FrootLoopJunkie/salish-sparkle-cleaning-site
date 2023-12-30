function ConsultationButton({changePageTo}) {
    return (
      <div className="ConsultationButtonContainer">
        <button onClick={()=>changePageTo("Consultations")}type="button" className="ConsultationButton">Request a Consultation</button>
      </div>
    );
  }
  
  export default ConsultationButton;
  
function ConsultationButtonInline({changePageTo}) {
    return (
      <div className="ConsultationButtonContainerInline">
        <button onClick={()=>changePageTo("Consultations")}type="button" className="ConsultationButtonInline">Request a Consultation</button>
      </div>
    );
  }
  
  export default ConsultationButtonInline;
  
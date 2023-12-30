function Header({changePageTo}) {
  return (
    <div onClick={() => changePageTo("Home")}className="Header">
        <span className="HeaderSalishSparkle">Salish Sparkle Cleaning</span>
        <span className="HeaderPhoneNumber"><a className="HeaderPhoneNumber" href="tel:425-521-7835">(425) 521-7835</a></span>
        <span className="HeaderMotto">Keeping Your House Sparking Since 2023!</span>
    </div>
  );
}

export default Header;

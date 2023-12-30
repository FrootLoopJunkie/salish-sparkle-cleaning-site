function Header({changePageTo}) {
  return (
    <div onClick={() => changePageTo("Home")}className="Header">
        <span className="HeaderSalishSparkle">Salish Sparkle Cleaning</span>
        <span className="HeaderPhoneNumber">(425) 521-7835</span>
        <span className="HeaderMotto">Keeping Your House Sparking Since 2023!</span>
    </div>
  );
}

export default Header;

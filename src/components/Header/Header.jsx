import "./Header.css";
import cartLogo from "../../img/cartLogo.png";
function Header() {
  return (
    <header>
      {/* <div className='logoweb'>
        <img src={cartLogo} alt='' />
      </div> */}
      <h1>Libre Mercadooo</h1>
      <nav className='navigation'>
        <a href=''>Home</a>
        <a href=''>About</a>
        <a href=''>Products</a>
        <a href=''>Contact</a>
      </nav>
    </header>
  );
}

export default Header;

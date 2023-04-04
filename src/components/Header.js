
 const Title = () => (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src="https://media.istockphoto.com/id/1038356020/vector/restaurant-icon.jpg?s=612x612&w=0&k=20&c=Tk_v3JuJA4lz_8ZRJi78xS4p75Idqt97uEtYJciVtFI="
      />
    </a>
  );

const Header = () => (
    <div className="header">
      <Title />
  
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
  
  export default Header;
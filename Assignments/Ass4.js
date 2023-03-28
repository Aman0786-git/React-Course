import ReactDOM from "react-dom/client";
// import "../index.css";
const SearchBar = () => (
  <input type="search" className="searchBar" placeholder="Search..."></input>
);

const Logo = () => (
  <img
    src="https://media.istockphoto.com/id/1279136583/vector/triangle-logo-upside-down-flipped-abstract-prism-geometric-shape-graphic.jpg?s=612x612&w=0&k=20&c=UuovmV5cpREH2MUquTMevkAgHFL5CYYaZOLFtlA-uoU="
    alt="Katherine Johnson"
    className="logo"
  />
);

const Header = () => (
  <div className="header">
    <Logo />
    <SearchBar />
    <span className="material-symbols-outlined">account_circle</span>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);

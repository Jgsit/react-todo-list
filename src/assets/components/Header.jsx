import { CiViewList } from "react-icons/ci";
function Header(props) {
  return (
    <header>
      <div>
        <CiViewList />
        <h1>{props.title}</h1>
      </div>
    </header>
  );
}
export default Header;

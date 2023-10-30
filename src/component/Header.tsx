import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const onAboutClick = () => {
    navigate("/about"); //유저가 로그인해서 redirect하거나 페이지에 갔는데 접근 권한이 없어서 다른 페이지로 연결할 때 사용
  };
  return (
    <header>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <button onClick={onAboutClick}>About</button>
        </li>
      </ul>
    </header>
  );
}

export default Header;

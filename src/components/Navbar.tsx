import { Badge, Button, Dropdown } from "antd";
import { DownOutlined, ShoppingCartOutlined } from "@ant-design/icons";

type Props = { count: number; bump: number; onCartClick: () => void };
const LOGO = "https://umaracing.com/wp-content/uploads/2022/03/uma-logo-header.png";

export default function Navbar({ count, bump, onCartClick }: Props) {
  const about = [
    { key: "h", label: <a href="#history">Brand History</a> },
    { key: "r", label: <a href="#rnd">Research and Development Center</a> },
  ];
  return (
    <header className="nav">
      <a href="#top" className="brand">
        <img src={LOGO} alt="UMA Racing logo" onError={(e) => (e.currentTarget.style.display = "none")} />
        <span className="logo">UMA<span>RACING</span></span>
      </a>
      <nav className="links">
        <a href="#shop">Products</a>
        <Dropdown menu={{ items: about }}><a href="#history">About Uma <DownOutlined /></a></Dropdown>
        <a href="#teams">Sponsored Teams</a>
      </nav>
      <Badge count={count} key={bump} className="bump">
        <Button type="primary" shape="round" icon={<ShoppingCartOutlined />} onClick={onCartClick}>Cart</Button>
      </Badge>
    </header>
  );
}
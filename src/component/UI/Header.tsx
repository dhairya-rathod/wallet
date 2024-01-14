interface HeaderProps {
  title: string;
}
const Header = ({ title }: HeaderProps) => {
  return <div className="wallet-header">{title}</div>;
};

export default Header;

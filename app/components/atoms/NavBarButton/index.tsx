interface Props {
  title?: string;
}

export const NavBarButton: React.FC<Props> = ({ title }) => {
  return <button>{title}</button>;
};

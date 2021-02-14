import { Container, Link } from "./Footer.styles";

export const Footer = () => {
  return (
    <Container>
      Desenvolvido por
      <Link
        href="https://github.com/lucascorreia95"
        target="_blank"
        rel="noreferrer"
      >
        Lucas Correia
      </Link>
      - FEV./2021 -
      <Link
        href="https://github.com/lucascorreia95/search-hub-callenge"
        target="_blank"
        rel="noreferrer"
      >
        Link do repositório
      </Link>
    </Container>
  );
};

export default Footer;

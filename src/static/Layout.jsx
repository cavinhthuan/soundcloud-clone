import Header from "../components/Header/Header";
import Container from "../components/Container";
import { useContext } from "react";
import { AppContext } from "../App";
import { Helmet } from "react-helmet";
import Player from "../components/Player";
export default function Layout({ children: pageContent, ...props }) {
  return (
    <>
      <Helmet>
        <title>{props.title}</title>
      </Helmet>
      <Header></Header>
      <Container>{pageContent}</Container>
      <Player/>
    </>
  );
}

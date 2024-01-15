import Header from "../components/Header";
import Container from "../components/Container";
import { useContext } from "react";
import { AppContext } from "../App";
import { Helmet } from "react-helmet";
import Player from "../components/Player";
export default function Layout({ children: pageContent, ...props }) {
  return (
    <div>
      <Helmet>
        <title>{props.title}</title>
      </Helmet>
      <Header></Header>
      <Container>{pageContent}</Container>
      <Player></Player>
    </div>
  );
}

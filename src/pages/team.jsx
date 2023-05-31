import { Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import PlayerSectionTwo from "../component/section/playertwo";
import CtaSection from "../component/section/cta";

function TeamPage() {
  return (
    <Fragment>
      <Header />
      <PageHeader title={"OUR TEAM"} curPage={"Team"} />
      <PlayerSectionTwo />
      <CtaSection imgUrl={"assets/images/cta/02.png"} />
      <Footer />
    </Fragment>
  );
}

export default TeamPage;

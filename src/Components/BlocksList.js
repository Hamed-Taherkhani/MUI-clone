import React from "react";
import Block from "./Block";
import MUIFeatures from "./MUIFeatures";
import Sponsors from "./Sponsors";
import PeopleComments from "./PeopleComments";
import StartNow from "./StartNow";
import ProductionReadyComponents from "./ProductionReadyComponents";

function BlocksList() {
  const blockData = [
    {
      title: "Products",
      description: (
        <>
          Every component you need is <strong>ready for production</strong>
        </>
      ),
      summary:
        "Build at an accelerated pace without sacrificing flexibility or control.",
    },
    {
      title: "Why build with MUI ?",
      description: (
        <>
          A <strong>delightful</strong> experience for you and your users
        </>
      ),
      bg: "#001e3c",
      children: <MUIFeatures />,
    },
    {
      title: "Production-ready components",
      description: (
        <>
          Beautiful and powerful, <strong>right out of the box</strong>
        </>
      ),
      bg: "#001e3c",
      children: <ProductionReadyComponents />,
    },
    {
      bg: "#132f4c",
      children: <PeopleComments />,
    },
    {
      title: "Sponsors",
      description: (
        <>
          <strong>You</strong> make this possible
        </>
      ),
      summary:
        "The development of these open-source tools is accelerated by out generous sponsors.",
      bg: "#001e3c",
      children: <Sponsors />,
    },
    {
      title: "Start now",
      description: (
        <>
          Ship your next project <strong>faster</strong>
        </>
      ),
      summary:
        "Find out why MUI's tools are trusted by thousands of open source developers and teams around the world.",
      children: <StartNow />,
    },
  ];

  return (
    <div className="blocks">
      {blockData.map(({ title, description, summary, bg, children }, i) => (
        <Block
          key={i}
          title={title}
          description={description}
          summary={summary}
          bg={bg}
        >
          {children}
        </Block>
      ))}
    </div>
  );
}

export default BlocksList;

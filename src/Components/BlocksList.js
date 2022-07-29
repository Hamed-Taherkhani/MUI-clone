import React from "react";
import Block from "./Block";
import MUIFeatures from "./MUIFeatures";
import Sponsors from "./Sponsors";

function BlocksList() {
  return (
    <div className="blocks">
      <Block
        title="Products"
        description={
          <>
            Every component you need is <strong>ready for production</strong>
          </>
        }
        summary="Build at an accelerated pace without sacrificing flexibility or control."
      ></Block>
      <Block
        title="Why build with MUI ?"
        description={
          <>
            A <strong>delightful</strong> experience for you and your users
          </>
        }
        bg="#001e3c"
      >
        <MUIFeatures />
      </Block>
      <Block
        title="Production-ready components"
        description={
          <>
            Beautiful and powerful, <strong>right out of the box</strong>
          </>
        }
        bg="#001e3c"
      ></Block>
      <Block
        title="Sponsors"
        description={
          <>
            <strong>You</strong> make this possible
          </>
        }
        summary="The development of these open-source tools is accelerated by out generous sponsors."
        bg="#001e3c"
      >
        <Sponsors />
      </Block>
      <Block
        title="Start now"
        description={
          <>
            Ship your next project <strong>faster</strong>
          </>
        }
        summary="Find out why MUI's tools are trusted by thousands of open source developers and teams around the world."
      ></Block>
    </div>
  );
}

export default BlocksList;

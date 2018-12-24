import React from "react";
import StickyFooter from "react-sticky-footer";

function AppFooter() {
  return (
    <StickyFooter
      bottomThreshold={9999}
      stickAtThreshold={0}
      normalStyles={{
        backgroundColor: "#342d34",
        height: "8rem",
        padding: "2rem"
      }}
    >
      Add any footer markup here
    </StickyFooter>
  )
}

export default AppFooter;
import React from "react";

import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import FlexContainer from "../FlexContainer/FlexContainer";

class CartFooter extends React.Component {
  render() {
    return (
      <FlexContainer
        width="100%"
        direction="column"
        tabletMinScreen={this.props.setToBottom}
      >
        <FlexContainer
          width="100%"
          align="center"
          margin="0.75rem 0"
          justify="space-between"
          tabletMinScreen={`
            justify-content: flex-end;
          `}
        >
          <Heading size="1.15rem" weight="500" color="primary">
            Total
          </Heading>
          <Heading
            size="1.15rem"
            weight="700"
            color="primary"
            margin="0 0 0 1rem"
          >
            $100.00
          </Heading>
        </FlexContainer>
        <FlexContainer
          width="100%"
          align="center"
          justify="space-between"
          tabletMinScreen={`
            justify-content: flex-end;
          `}
        >
          <Button
            width="40%"
            type="button"
            height="43px"
            fontSize="1rem"
            fontWeight="600"
            btnStyle="primary"
            tabletMinScreen={`
              display: none;
            `}
            onClick={() => {}}
          >
            VIEW BAG
          </Button>
          <Button
            width="40%"
            type="button"
            height="43px"
            fontSize="1rem"
            fontWeight="600"
            btnStyle="tertiary"
            onClick={() => {}}
            tabletMinScreen={`
              width: 130px;
            `}
          >
            CHECK OUT
          </Button>
        </FlexContainer>
      </FlexContainer>
    );
  }
}

export default CartFooter;

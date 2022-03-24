import { PureComponent } from "react";

import * as S from "./LoadSpinner.styles";

class LoadSpinner extends PureComponent {
  render() {
    const { margin, width, height } = this.props;

    return (
      <S.SpinnerContainer margin={margin || "0"}>
        <S.StyledSpinner width={width} height={height} viewBox="0 0 100 50">
          <circle
            cx="50"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="4"
            className="path"
          />
        </S.StyledSpinner>
      </S.SpinnerContainer>
    );
  }
}

export default LoadSpinner;

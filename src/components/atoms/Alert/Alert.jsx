import { PureComponent } from "react";
import { connect } from "react-redux";

import * as S from "./Alert.styles";

class Alert extends PureComponent {
  render() {
    const { alert } = this.props;

    return (
      <S.Container isShowing={alert.isShowing} type={alert.type}>
        <S.CloseButton type={alert.type}>X</S.CloseButton>
        <S.MessageWrapper>
          <S.AlertMessage type={alert.type}>{alert.message}</S.AlertMessage>
        </S.MessageWrapper>
      </S.Container>
    );
  }
}

const mapState = (state) => ({
  alert: state.store.alert,
});

export default connect(mapState, null)(Alert);

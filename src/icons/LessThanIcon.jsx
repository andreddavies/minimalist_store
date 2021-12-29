import React from "react";

class LessThanIcon extends React.PureComponent {
  render() {
    return (
      <svg
        width={this.props.width}
        height={this.props.height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 18L9 12L15 6"
          stroke="#adadad"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
}

export default LessThanIcon;

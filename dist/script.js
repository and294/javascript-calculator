function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

class NumPads extends React.Component {

  render() {
    return /*#__PURE__*/(
      React.createElement("div", {
        className: "numberPads",
        id: this.props.id,
        onClick: this.handleNumber }, /*#__PURE__*/

      React.createElement("button", { className: "numPad", id: "seven", value: "7", onClick: this.props.handleNumber }, "7"), /*#__PURE__*/
      React.createElement("button", { className: "numPad", id: "eight", value: "8", onClick: this.props.handleNumber }, "8"), /*#__PURE__*/
      React.createElement("button", { className: "numPad", id: "nine", value: "9", onClick: this.props.handleNumber }, "9"), /*#__PURE__*/
      React.createElement("button", { id: "clear", onClick: this.props.handleClear }, "CE"), /*#__PURE__*/
      React.createElement("button", { className: "numPad", id: "four", value: "4", onClick: this.props.handleNumber }, "4"), /*#__PURE__*/
      React.createElement("button", { className: "numPad", id: "five", value: "5", onClick: this.props.handleNumber }, "5"), /*#__PURE__*/
      React.createElement("button", { className: "numPad", id: "six", value: "6", onClick: this.props.handleNumber }, "6"), /*#__PURE__*/
      React.createElement("button", { id: "multiply", value: "*", onClick: this.props.handleOperator }, "X"), /*#__PURE__*/
      React.createElement("button", { id: "divide", value: "/", onClick: this.props.handleOperator }, "/"), /*#__PURE__*/
      React.createElement("button", { className: "numPad", id: "one", value: "1", onClick: this.props.handleNumber }, "1"), /*#__PURE__*/
      React.createElement("button", { className: "numPad", id: "two", value: "2", onClick: this.props.handleNumber }, "2"), /*#__PURE__*/
      React.createElement("button", { className: "numPad", id: "three", value: "3", onClick: this.props.handleNumber }, "3"), /*#__PURE__*/
      React.createElement("button", { id: "add", value: "+", onClick: this.props.handleOperator }, "+"), /*#__PURE__*/
      React.createElement("button", { id: "subtract", value: "-", onClick: this.props.handleOperator }, "-"), /*#__PURE__*/
      React.createElement("button", { className: "numPad", id: "zero", value: "0", onClick: this.props.handleNumber }, "0"), /*#__PURE__*/
      React.createElement("button", { className: "numPad", id: "decimal", value: ".", onClick: this.props.handleDecimal }, "."), /*#__PURE__*/
      React.createElement("button", { id: "equals", onClick: this.props.handleEqual }, "=")));



  }}





class Calculator extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleNumber",
















    e => {
      const value = e.target.value;
      const display = this.state.previousNumber;

      if (this.state.previousNumber == "") {
        this.setState({ previousNumber: value,
          result: value });} else
      {
        this.setState({ previousNumber: this.state.previousNumber + value,
          result: this.state.result + value });
      }

      if (this.state.result == "-0" && this.state.previousNumber == "-0") {
        this.setState({ result: "-" + value,
          previousNumber: "-" + value });
      }

      if (this.state.previousNumber == "0" && value == "0") {
        this.setState({ previousNumber: this.state.previousNumber,
          result: this.state.result });
      } else if (this.state.previousNumber == "0" && value !== "0") {
        this.setState({ previousNumber: value,
          result: value });
      }


      /* if 0 after operator, it is replaced by num clicked*/
      if (/\d+[*+/-]0$/.test(this.state.previousNumber)) {
        this.setState({ previousNumber: display.replace(/.$/, value),
          result: value });
      }
      /*if result is an ope, it is replaced by the numbers clicked*/
      if (/[*/+-]$/.test(this.state.result)) {
        this.setState({ result: value });
      }

      if (this.state.evaluated == true) {
        this.setState({
          previousNumber: value,
          result: value,
          evaluated: false });

      }
      if (this.state.result.length >= 16) {
        this.setState({ maxDigitTemp: this.state.result,
          previousNumber: this.state.previousNumber,
          result: "Too many Digits" });
        setTimeout(() => this.clearTMD(), 1500);
      }
    });_defineProperty(this, "clearTMD",

    () => {
      this.setState({ result: this.state.maxDigitTemp });
    });_defineProperty(this, "handleDecimal",

    e => {
      const value = e.target.value;
      const displayValue = this.state.result;
      if (!/\./.test(displayValue)) {
        this.setState({ previousNumber: this.state.previousNumber + value,
          result: this.state.result + value });

        if (this.state.previousNumber == "") {
          this.setState({ previousNumber: "0" + value });
        }
      }

      if (/[/*+-]$/.test(this.state.previousNumber) && value == ".") {
        this.setState({ previousNumber: this.state.previousNumber + "0.",
          result: "0." });
      }
    });_defineProperty(this, "handleOperator",


    e => {
      const value = e.target.value;
      const display = this.state.previousNumber;

      /*doesnt add operator if last element is an operator */
      if (/[/*+-]$/.test(this.state.previousNumber)) {
        this.setState({ previousNumber: this.state.previousNumber,
          result: value });
      }

      /*if last element is not an operator add the operator*/else
        {
          this.setState({ previousNumber: this.state.previousNumber + value,
            result: value });
        }

      if (/[/*+-]$/.test(this.state.previousNumber) && value == "-") {
        this.setState({ previousNumber: this.state.previousNumber + value,
          result: value });
      }

      /*if the last element is an operator or . replace that element with the new operator clicked*/
      if (/[/*+-]{1}-$/.test(this.state.previousNumber)) {
        this.setState({ previousNumber: display.substring(0, display.length - 2) + value });
      } else if (/[/*+-]$/.test(this.state.previousNumber) && value !== "-" || /\.$/.test(this.state.previousNumber) && value !== display.length - 1) {
        this.setState({ previousNumber: display.replace(/.$/, value) });
      }

      /*doesn't allow display to begin with an ope exept -*/
      if (display == "" && value !== "-") {
        this.setState({ previousNumber: "" });
      }
      if (this.state.evaluated == true) {
        this.setState({
          previousNumber: this.state.result + value,
          result: value,
          evaluated: false });

      }

    });_defineProperty(this, "handleClear",


    e => {
      this.setState({ previousNumber: "",
        currentNumber: "",
        result: "0" });

    });_defineProperty(this, "handleEqual",

    e => {
      const expression = this.state.previousNumber;
      const { colors } = this.state;

      this.setState({
        previousNumber: expression,
        result: eval(expression),
        evaluated: true });


      /*change the backgroud color when = is clicked*/
      const color = colors[Math.floor(Math.random() * 5)];
      document.body.style.backgroundColor = color;



    });this.state = { previousNumber: "", evaluated: false, result: "0", maxDigitTemp: "", colors: ["#ca9dfa", "#91aaf9", "#94f7b8", "#fa8b8b", "#faef8b"] };}

  handleMaxdigit() {
    this.setState({ maxDigit: true });

    if (this.state.maxDigit == true) {
      this.setState({ result: "Too many digits",
        backgroundColor: "red" });
      setTimeout(() => {this.setState({ result: this.state.result });}, 1500);
    }

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "calculator" }, /*#__PURE__*/

      React.createElement("div", { id: "screen" }, this.state.previousNumber, this.state.currentNumber, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/
      React.createElement("div", { id: "display" }, this.state.result)), /*#__PURE__*/


      React.createElement("div", { id: "calc" }, /*#__PURE__*/
      React.createElement("div", { id: "left" }, /*#__PURE__*/
      React.createElement(NumPads, {
        handleNumber: this.handleNumber,
        handleClear: this.handleClear,
        handleDecimal: this.handleDecimal,
        handleOperator: this.handleOperator,
        handleEqual: this.handleEqual,
        handleMaxDigit: this.handleMaxDigit })), /*#__PURE__*/


      React.createElement("div", { id: "right" }))));





  }}




ReactDOM.render( /*#__PURE__*/React.createElement(Calculator, null), document.getElementById("root"));
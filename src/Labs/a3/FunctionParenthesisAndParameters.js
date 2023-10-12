function FunctionParenthesis() {
    const square = a => a * a;
    const plusOne = a => a + 1;
    const twoSquared = square(2);
    const threePlusOne = plusOne(3);
    return (
        <div>
          <h3>Parenthesis and parameters</h3>
          twosquared      = {twoSquared + ""}     <br />
          square(2)       = {square + ""}    <br />
          threePlusOne    = {threePlusOne + ""}    <br />
          plusOne(3)      = {plusOne + ""}     <br />
        </div>
      );
} export default FunctionParenthesis
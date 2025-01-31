# Unexpected NaN Propagation and Null Handling in JavaScript

This repository demonstrates a common JavaScript error involving unexpected NaN (Not a Number) propagation and the handling of null values when performing addition.

The `bug.js` file shows the flawed code that doesn't handle NaN properly, leading to NaN in the output when one of the inputs is NaN. The code also correctly handles null input values, returning null in such cases.

The `bugSolution.js` file provides a corrected version that addresses the NaN propagation. The solution checks for both null and NaN values and handles them appropriately, avoiding the propagation of NaN.

This example highlights the importance of comprehensive error handling in JavaScript to produce reliable and predictable results. 
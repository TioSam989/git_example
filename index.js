const { add, multiply } = require("./utils");

const add2 = add(2);
const a = add2(3);
const multiplyByA = multiply(a);
const b = multiplyByA(2);

/// TAR-123 - Luciano - 26/10/2020 - Adicionei essa linha
/// TAR-124 - Luciano - 30/10/2020 - Removi linha
/// console.log(a, b);
/// TAR-124
/// TAR-123
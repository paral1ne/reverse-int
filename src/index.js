module.exports = function reverse(n) {
    return n < 0
        ? n
              .toString()
              .split("")
              .reverse()
              .join("")
              .slice(0, n.toString.length - 2)
        : n.toString().split("").reverse().join("");
};

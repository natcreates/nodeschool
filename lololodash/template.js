const _ = require("lodash");

const worker = (user) => {
  return _.template("Hello <%= username %> (logins: <%= logins %>)")({
    username: user.name,
    logins: user.login.length,
  });
};

module.exports = worker;

// Because what is passed in is an object with keys, could have done
//let template = "Hello <%= username %> (logins: <%= login.length %>)";
// return _.template(template)(user);

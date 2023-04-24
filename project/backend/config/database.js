const mongoose = require("mongoose");
// const { connect } = require("../app");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    })
    .then((data) => {
      console.log(`Mongodb connect with server: ${data.connection.host}`);
    })
    .catch((err) => console.log(err));
};

module.exports = connectDatabase;

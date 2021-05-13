const mongoose = require("mongoose");
const connection =
  "mongodb+srv://the_flying_englishman:e00cfEPJqpLFZ1YZ@test1.0rbdh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
  .connect(connection, {
    useNewURLParser: true,
    useUnifiedTopology: true,
    useFindandModify: false,
  })
  .then(() => console.log("Databse connected successfully"))
  .catch((err) => console.error(err));

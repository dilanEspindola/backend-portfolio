import { connect } from "mongoose";
import { config } from "dotenv";
config();

const dbConnection = () => {
  connect(process.env.MONGO_DB_URI_PROD || "")
    .then((conn) =>
      console.log("Connected to:", conn.connection.db.databaseName)
    )
    .catch((error) => {
      throw new Error(error as string);
    });
};

export default dbConnection;

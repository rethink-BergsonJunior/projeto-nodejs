import "dotenv/config";
import server from "./src/server";

server.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});


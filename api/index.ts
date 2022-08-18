import "dotenv/config";
import server from "./src/server";
import product from "./src/product"

server.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});




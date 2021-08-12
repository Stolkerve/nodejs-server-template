import App from "./app"
import dotenv from "dotenv"
dotenv.config()
function main() {
  const app = new App();
  app.run(process.env.PORT || 3000);
}

main();
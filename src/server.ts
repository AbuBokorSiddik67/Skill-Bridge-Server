import app from "./app";
import config from "./config";

async function main() {
  try {
    console.log(process.env.DATABASE_URL);
    app.listen(config.port, () => {
      console.log(`Server listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
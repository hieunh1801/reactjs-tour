import { environmentDev } from "./environment.dev";
import { environmentProd } from "./environment.prod";

const NODE_ENV = process.env.NODE_ENV;

const environment =
  NODE_ENV === "production" ? environmentProd : environmentDev;

export default environment;

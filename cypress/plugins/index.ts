import dotenv from "dotenv";

dotenv.config({ path: ".env.test" });
dotenv.config();

// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default (_on: any, config: any ) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  config.env.baseUrl = process.env.BASE_URL;

  return config;
};

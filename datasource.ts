import "reflect-metadata";
import { DataSource } from "typeorm";
import config from "./config/database";

const AppDataSource = (): DataSource => {
  return new DataSource(config);
};

export default AppDataSource();

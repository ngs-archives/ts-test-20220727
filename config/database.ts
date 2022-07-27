import { ConnectionStringParser } from "connection-string-parser";
import "reflect-metadata";
import type { DataSourceOptions } from "typeorm";
import { migrations } from "../migrations";
import { entities } from "../entities";

const connectionStringParser = new ConnectionStringParser({
  scheme: "mysql",
  hosts: [],
});

const databaseURL =
  process.env.DATABASE_URL || "mysql://root@0.0.0.0:3306/demo";
const connectionObject = connectionStringParser.parse(databaseURL);

const dataSourceOptions: DataSourceOptions = {
  type: "mysql",
  host: connectionObject.hosts[0].host,
  port: connectionObject.hosts[0].port,
  username: connectionObject.username,
  password: connectionObject.password,
  database: connectionObject.endpoint,
  synchronize: false,
  logging: false,
  entities,
  migrations,
  subscribers: [],
};

export default dataSourceOptions;

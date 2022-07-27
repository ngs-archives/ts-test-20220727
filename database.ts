import AppDataSource from "./datasource";

export const connectDatabase = async () => {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
  }
};

export const disconnectDatabase = async () => {
  if (AppDataSource.isInitialized) {
    await AppDataSource.destroy();
  }
};

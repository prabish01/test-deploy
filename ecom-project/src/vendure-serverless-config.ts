import { DefaultJobQueuePlugin, DefaultSearchPlugin, VendureConfig } from "@vendure/core";
import { AssetServerPlugin } from "@vendure/asset-server-plugin";
import { AdminUiPlugin } from "@vendure/admin-ui-plugin";
import path from "path";

export const config: VendureConfig = {
  apiOptions: {
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
    adminApiPath: "admin-api",
    shopApiPath: "shop-api",
    cors: {
      origin: [
        // Add your frontend Vercel URL here when deployed
        "https://your-frontend-url.vercel.app",
        // For local development
        "http://localhost:3001",
        "http://localhost:3000",
      ],
      credentials: true,
    },
  },
  // Vercel uses SQLite in memory for serverless, but for production use you should use a real database
  // like PostgreSQL with a connection string from Vercel environment variables
  dbConnectionOptions: {
    type: "better-sqlite3",
    synchronize: true,
    logging: false,
    database: ":memory:",
  },
  // For production, set this to a real persistent storage
  entityOptions: {
    entityIdStrategy: {
      type: "increment",
    },
  },
  plugins: [
    AssetServerPlugin.init({
      route: "assets",
      assetUploadDir: path.join(__dirname, "../static/assets"),
    }),
    DefaultSearchPlugin,
    DefaultJobQueuePlugin,
    AdminUiPlugin.init({
      route: "admin",
      port: 3002,
    }),
  ],
};

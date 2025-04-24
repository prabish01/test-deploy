import { bootstrap } from "@vendure/core";
import { config } from "./vendure-serverless-config";

// This function handles Vercel serverless function initialization
export default async function handler(req: any, res: any) {
  const app = await bootstrap(config);

  // Forward the request to the Vendure server
  app.getHttpAdapter().getInstance()(req, res);
}

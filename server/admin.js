import { default as AdminJS } from "adminjs";
import AdminJSExpress from "@adminjs/express";
import express from "express";

const app = express();
const PORT = 3063;

const start = async () => {
  try {
    const admin = new AdminJS({});
    const adminRouter = AdminJSExpress.buildRouter(admin);
    app.use(admin.options.rootPath, adminRouter);

    app.listen(PORT, () => {
      console.log(
        `AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`
      );
    });
  } catch (error) {
    console.log(error);
  }
};

start();

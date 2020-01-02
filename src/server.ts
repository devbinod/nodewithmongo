import app from "./app";
const expressSwagger = require("express-swagger-generator")(app);

import { PORT } from "./const/constants";

let options = {
  swaggerDefinition: {
    info: {
      description: "This is a sample server",
      title: "Swagger",
      version: "1.0.0"
    },
    host: "localhost:3000",
    basePath: "/v1",
    produces: ["application/json", "application/xml"],
    schemes: ["http", "https"],
    securityDefinitions: {
      JWT: {
        type: "apiKey",
        in: "header",
        name: "Authorization",
        description: ""
      }
    }
  },
  basedir: __dirname, //app absolute path
  files: ["../src/routes/baseRouter.*.ts"] //Path to the API handle folder
};
expressSwagger(options);
app.listen(PORT, () => {
  console.log(`Application is running on  ${PORT}`);
});

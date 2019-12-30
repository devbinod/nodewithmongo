import app from "./app";
import { PORT } from "./const/constants";

app.listen(PORT, () => {
  console.log(`Application is running on  ${PORT}`);
});

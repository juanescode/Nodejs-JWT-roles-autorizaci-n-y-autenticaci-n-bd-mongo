import app from './app.js'
import { PORT } from './config.js';
import "./db.mongo.js"

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});
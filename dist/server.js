import app from './app.js';
import config from './app/config/index.js';
const PORT = config.port;
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});

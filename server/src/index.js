import app from './app.js';

const { PORT } = process.env;

app.listen(PORT, ()=>{
  console.log(`server is running on http://localhost:${PORT}`);
});

import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';
const path = require('path');

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'ejs'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public', {
    setHeaders: (res, path, stat) => {
      if (path.endsWith('.ts')) {
        res.set('Content-Type', 'application/typescript');
      }
    }
  }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'ejs')));
app.get('/', (req: Request, res: Response) => {
  
        res.render('index.ejs');
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});

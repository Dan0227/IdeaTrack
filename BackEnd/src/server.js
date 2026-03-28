import express from 'express';
import nodeRoutes from './routes/nodeRoutes.js';

const app = express();

app.use(express.json());

app.use("/api/notes", nodeRoutes);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
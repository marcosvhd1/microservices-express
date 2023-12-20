import express from "express";
import "./infra/provider/kafka/consumers"
const PORT = process.env.PORT ?? 3002;

const app = express();

app.use(express.json());

app.listen(PORT, () => console.log(`Server pedido is running on PORT ${PORT}`));
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { engine } from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';
import config from './config/config.js';
import { connectDB } from './config/db.js';
import serviceRouter from './routes/service.routes.js';
import bookingRouter from './routes/booking.routes.js';
import viewRouter from './routes/view.routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.set('socketio', io);

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use('/api/services', serviceRouter);
app.use('/api/bookings', bookingRouter);
app.use('/', viewRouter);

io.on('connection', (socket) => {
  console.log('🔌 Nuevo cliente conectado:', socket.id);
  
  socket.on('disconnect', () => {
    console.log('❌ Cliente desconectado:', socket.id);
  });
});

const PORT = config.port;
httpServer.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});

import express from 'express';
import repositoryRoutes from './routes/repositories';
import organizationRoutes from './routes/organization';
import tribeRoutes from './routes/tribe';
import metricRoutes from './routes/metric';
import organization from './models/organization'

const app = express();
const PORT = 3000;

app.use(express.json());


app.get('/test', (_req, res) => {
    console.log('entro');
    organization.findAll({
    }).then((_adquirencias: any) => {
    res.send('pong');
        console.log('rest')
    });
});

app.use('/api/repositories', repositoryRoutes);
app.use('/api/organization', organizationRoutes);
app.use('/api/tribe',tribeRoutes );
app.use('/api/metric', metricRoutes );

app.listen(PORT, ()=> {
    console.log(`Servidor corriendo en puerto ${PORT}`)
});

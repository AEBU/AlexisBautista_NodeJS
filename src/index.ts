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



//
// EXECUTE QUERY
//
// console.log('Esta 1')
// const data = fs.readFileSync('C:\\Users\\Kruger\\Documents\\AlexisBautista_rep\\src\\util\\util_create_table.txt', {encoding:'utf8', flag:'r'});
// console.log('da', data)



// connectionPool.query(createTables, (_err: any, _res: any) => {
// console.log('Esta 2')
//     console.log(_err, _res)
//     connectionPool.end()
// })
console.log('Esta 3')



app.listen(PORT, ()=> {
    console.log(`Servidor corriendo en puerto ${PORT}`)
});

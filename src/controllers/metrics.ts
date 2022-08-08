import { Request, Response } from 'express';
import metricsModel from '../models/metrics';
import connection from '../models/connection'
import sequelize from 'sequelize';


class MetricController {
    public getMetricsRepository(_req: Request, res: Response) {
        console.log('Paras', _req.params)
        const metricsRep = `
            SELECT rp.id_repository, rp.name , tr.name as organization, tr.status,
            mr.coverage, mr.bugs, mr.vulverabilities, mr.hotspot, mr.code_smells,
            rp.state
            FROM tribe tr INNER JOIN repository rp ON tr.id_tribe = rp.id_tribe
            INNER JOIN organization org ON org.id_organization = tr.id_organization
            INNER JOIN metrics mr ON mr.id_repository = rp.id_repository
            WHERE tr.id_tribe = :idTribe
        `;
        connection.query(metricsRep, {
            replacements: {
                idTribe: _req.params.tribeId
            },
            type: sequelize.QueryTypes.SELECT
        }).then(resMetrics => {
            console.log(resMetrics)
            if (resMetrics.length > 0) {
                res.send({repositories: resMetrics});
            } else {
                res.send('La Tribu no se encuentra registrada');
            }
        }).catch(_err =>{
            res.send('Error al buscar las métricas')
        });
        
    }

    public saveMetric(req: Request, _res: Response) {
        metricsModel.create(req.body).then(_metric => {
            _res.send(_metric);
        });
    }
}
export const metricController = new MetricController();
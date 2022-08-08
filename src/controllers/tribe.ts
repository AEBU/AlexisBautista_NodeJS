import { Request, Response } from 'express';
import tribeModel from '../models/tribe';
import  {Parser} from 'json2csv';

class TribeController {
    public getTribes( _req: Request, res: Response) {
        tribeModel.findAll({
        }).then((_adquirencias: any) => {
            res.send(_adquirencias);
            console.log('rest', _adquirencias)
        });
    }
    public generateReportTribe( _req: Request, res: Response) {
        tribeModel.findAll({
            where : {
                idTribe: _req.params.tribeId
            }
        }).then((_adquirencias: any) => {
            const fields = [
                {
                  label: 'Id Tribu',
                  value: 'idTribe'
                },
                {
                  label: 'Id Organización',
                  value: 'idOrganization'
                },
                {
                 label: 'Nombre Organización',
                  value: 'name'
                }
              ];
            const json2csv = new Parser({fields});
            const csv = json2csv.parse(_adquirencias);
            res.header('Content-Type', 'text/csv');
            res.attachment('tribe.csv');
            return res.send(csv);
        }).catch(_err=>{
            console.error(_err);
            res.send('Error al crear el reporte')
        });
    }

    public async saveTribe(req: Request, _res: Response) {
        tribeModel.create(req.body).then(_tribe => {
            _res.send(_tribe);
        });
    }
}
export const tribeController = new TribeController();
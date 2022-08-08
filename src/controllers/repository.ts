import { Request, Response } from 'express';
import repositoryModel from '../models/repository';

class RepositoryController {
    public getRepositories( _req: Request, res: Response) {
        repositoryModel.findAll({
            attributes: [ 'id', 'state' ],
        }).then((repositories: any) => {
            res.send({repositories});
        });
    }

    public async saveRepository(req: Request, _res: Response) {
        repositoryModel.create(req.body).then(repository => {
            _res.send(repository);
        }).catch(_err => {
            console.error(_err);
            _res.send('Error al crear repositorio');
        })
    }
}
export const repositoryController = new RepositoryController();
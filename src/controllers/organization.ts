import { Request, Response } from 'express';
import organizationModel from './../models/organization';

class OrganizationController {
    public getOrganizations(_req: Request, res: Response) {
        organizationModel.findAll({
        }).then((_organizations: any) => {
            res.send(_organizations);
        });
    }
    public saveOrganization(_req: Request, res: Response) {
        organizationModel.create(_req.body).then((_organizations: any) => {
            res.send(_organizations);
        });
    }
    public updateOrganization(_req: Request, res: Response) {
        organizationModel.update(_req.body,
            {
                where: {
                    idOrganization: _req.body.idOrganization
                }
            }
        ).then((_organizations: any) => {
            res.send(_organizations);
        });
    }

    public deleteOrganization(_req: Request, res: Response) {
        organizationModel.destroy({
            where: { idOrganization: _req.body.idOrganization },
        }
        ).then((_organizations: any) => {
            res.send('Eliminado');
        });
    }

}
export const organizationController = new OrganizationController();
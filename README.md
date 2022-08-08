# Prueba
## Ejecución:

> npm install

> npm run view

## Ejercicio 1
> GET : http://localhost:3000/api/repositories/getRepositories
### Ejercicio 2

> POST: http://localhost:3000/api/organization/saveOrganization

{
    "name":" sadfasd",
    "status": 1212
}

> PUT; http://localhost:3000/api/organization/updateOrganization

{
    "idOrganization": "785736320274432002",
    "name": " Banco FV",
    "status": "406"
}

> GET : http://localhost:3000/api/organization/getOrganizations

> DELETE: http://localhost:3000/api/organization/deleteOrganization


# EJERCICIO 3
> GET: http://localhost:3000/api/metric/getMetricRepository/1/2022-04-12/A/12.22

PARÁMETROS : {IDTRIBU / FECHA  / ESTADO / VALOR DE CRITERIO}

# EJERCICIO 4
> GET: http://localhost:3000/api/tribe/generateReport/1

PARÁMETROS : {IDTRIBU }

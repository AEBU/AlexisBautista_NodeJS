import sequelize from './connection';
import DataTypes from 'sequelize';

/**
 * Relación a la tabla organization
 * @param {*} sequelize Define relación de las entidades 
 * @param {*} DataTypes Define tipos de datos
 * @returns {*} Modelo correspondiente a organization
 */
export default sequelize.define('organization', {
        idOrganization: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            field: 'id_organization',
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },
        status: {
            type: DataTypes.INTEGER
        }
    }, { freezeTableName: true, 
        timestamps: false, 
        schema: 'public', 
        tableName: 'organization' });
import sequelize from './connection';
import DataTypes from 'sequelize';

/**
 * Relación a la tabla metrics
 * @param {*} sequelize Define relación de las entidades 
 * @param {*} DataTypes Define tipos de datos
 * @returns {*} Modelo correspondiente a metrics
 */
export default sequelize.define('metrics', {
        idRepository: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            field: 'id_repository',
            primaryKey: true
        },
        coverage: {
            type: DataTypes.DOUBLE
        },
        bugs: {
            type: DataTypes.INTEGER
        },
        vulverabilities: {
            type: DataTypes.INTEGER
        },
        hotspot: {
            type: DataTypes.INTEGER
        },
        codeSmells: {
            field: 'code_smells',
            type: DataTypes.INTEGER
        }
    }, { freezeTableName: true, 
        timestamps: false, 
        schema: 'public', 
        tableName: 'metrics' });
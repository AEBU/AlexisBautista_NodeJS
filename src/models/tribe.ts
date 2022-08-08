import sequelize from './connection';
import DataTypes from 'sequelize';
/**
 * Relación a la tabla bancos
 * @param {*} sequelize Define relación de las entidades 
 * @param {*} DataTypes Define tipos de datos
 * @returns {*} Modelo correspondiente a organization
 */

const Tribe = sequelize.define('tribe', {
    idTribe: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        field: 'id_tribe',
        primaryKey: true
    },
    idOrganization: {
        type: DataTypes.INTEGER,
        field: 'id_organization'
    },
    name: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.INTEGER,
    }
}, {
    freezeTableName: true,
    timestamps: false,
    schema: 'public',
    tableName: 'tribe'
});

export default Tribe;
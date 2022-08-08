import sequelize from './connection';
import DataTypes from 'sequelize';
import Tribe from './tribe';

/**
 * Relación a la tabla bancos
 * @param {*} sequelize Define relación de las entidades 
 * @param {*} DataTypes Define tipos de datos
 * @returns {*} Modelo correspondiente a organization
 */

const Repository = sequelize.define('repository', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        field: 'id_repository',
        primaryKey: true
    },
    idTribe: {
        type: DataTypes.INTEGER,
        field: 'id_tribe'
    },
    name: {
        type: DataTypes.STRING
    },
    state: {
        type: DataTypes.STRING
    },
    createTime: {
        type: DataTypes.DATE,
        field: 'create_time'
    },
    status: {
        type: DataTypes.STRING,
    }
}, {
    freezeTableName: true,
    timestamps: false,
    schema: 'public',
    tableName: 'repository'
});
Repository.belongsTo(Tribe, { foreignKey: 'idTribe' });

export default Repository;
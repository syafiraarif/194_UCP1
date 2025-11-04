module.exports = (sequelize, DataTypes) => {
    const Kandang = sequelize.define('Kandang', {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        Nama_hewan: {
            type: DataTypes.STRING,
            allowNull: false
        },

        nama_petugas: {
            type: DataTypes.STRING,
            allowNull: false
        },

        Usia_hewan: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        Jenis_hewan: {
            type: DataTypes.STRING,
            allowNull: false
        },

        Tahun_lahir: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'kandang',
        timestamps: false,
        freezeTableName: true
    });
    return Kandang;
}
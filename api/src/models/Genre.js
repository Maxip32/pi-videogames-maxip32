const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo para GENRE
  sequelize.define('genre', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },{timestamps: true,
    createdAt: 'creado',
    updatedAt: false
});
};

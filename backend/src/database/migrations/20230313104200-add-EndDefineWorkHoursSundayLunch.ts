import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.addColumn("Whatsapps", "EndDefineWorkHoursSundayLunch", {
      type: DataTypes.TEXT,
      defaultValue: null,
      allowNull: true
    });
  },

  down: (queryInterface: QueryInterface) => {
    return queryInterface.removeColumn("Whatsapps", "EndDefineWorkHoursSundayLunch");
  }
};

'use strict'
module.exports = (sequelize, DataTypes) => {
  const Document = sequelize.define('Document', {
    name: DataTypes.STRING,
    document: DataTypes.TEXT,
    documentPath: DataTypes.STRING
  }, {})
  Document.associate = function (models) {
    // associations can be defined here
  }
  return Document
}

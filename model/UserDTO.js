const { Sequelize, sequelize } = require("../ORM/mysqlORM");

const user = sequelize.define("tbUser", {
	  idx: {
	    type: Sequelize.INTEGER,
	    primaryKey: true,
	    allowNull: false,
	    autoIncrement: true
	  },
	  userId: {
			type: Sequelize.STRING,
			unique : true,
	    allowNull: false
	  },
	  password: {
		    type: Sequelize.STRING,
		    allowNull: false
		  },
	  userNm : {
		    type: Sequelize.STRING,
		    allowNull: false
			}

	},  {
	    classMethods: {},
	    tableName: "tbUser",
	    freezeTableName: true,
	    underscored: true,
	    timestamps: false
	});

sequelize.sync({  	alter: true, 
					preserveColumnsOnSync: true  });

module.exports = user

const Sequelize = require("sequelize");
const path = require("path");
const PropertiesReader = require('properties-reader');
const properties = PropertiesReader(path.join(__dirname, "..", "properties", "mysql.properties"));

const sequelize = new Sequelize(
		properties.get("db")				, 
		properties.get("user")				, 
		properties.get("password").toString()	,
		  {
		    "host"	 : properties.get("host")		, 
		    "port"   : properties.get("port")		,
		    "dialect": properties.get("dialect") 
		  }
		);



module.exports = {
  		Sequelize,sequelize
  }



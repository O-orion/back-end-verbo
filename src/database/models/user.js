'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Este campo nome não pode ser vazio"
        },
         len: {
          msg: "Nome deve possuir no mínimo 4 caracteres",
          args: [4, 200]
         }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: "Email já cadastrado!"
      },
      validate: {
        notEmpty: {
          msg: "Este campo nome não pode ser vazio"
        },
        isEmail: {
          msg: "Informe um email válido!"
        }
      }
    },
    passwordHash: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Este campo nome não pode ser vazio"
        },
        len: {
          args: [8, 100],
          msg: "A senha deve ter entre 8 e 100 caracteres."
        },
      }

    },
    birthDay: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: {
          msg: "Data de nascimento deve ser uma data válida."
        },
        isBefore: {
          args: new Date().toISOString().split('T')[0],
          msg: "Data de nascimento deve ser uma data no passado."
        }
      }
    },
    bio: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profilePicture: {
      type: DataTypes.STRING,
      allowNull: false,

    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    paranoid: false,
    defaultScope: {
      attributes: {
        exclude: ['passwordHash']
      }
    },
    scopes: {
      withPassword: {
        attributes: {
          include: ['passwordHash']
        }
      }
    }
    
  });
  return User;
};
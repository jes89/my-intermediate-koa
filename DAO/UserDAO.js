const UserDTO = require("../model/UserDTO");

let userActions = {}

userActions.insertUser = async (userData) => {
  const user = await UserDTO.create(userData);

  if(user && user.get('userId')){
      msg = 'success';
  } else{
    msg = 'fail';
  }

  return {
      msg : msg,
      user : user
  }
};

userActions.loginAction = async (where) =>{

    const user = await UserDTO.findOne({
      where,
      attributes: ['userId', 'userNm']
    });

    if(user && user.get('userId')){
       msg = 'success';
    } else{
      msg = 'fail';
    }

    return {
        msg ,
        user
    }
}

userActions.checkDuplicationID = async (userId) => {
  const user = await UserDTO.findOne({
    where: {
      userId
    },
    attributes: ['userId']
  });

  if(user && user.get('userId')){
    msg = 'exist';
  } else{
    msg = 'notExist';
  }

  return {
      msg : msg,
      user : user
  }
}


module.exports = { userActions }

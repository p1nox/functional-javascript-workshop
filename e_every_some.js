var checkUsersValid = function(goodUsers) {
  return function(submittedUsers) {

    return submittedUsers.every(function(submittedUser){
      return goodUsers.some(function(goodUser){
        return goodUser.id === submittedUser.id;
      });
    });

  };
};

module.exports = checkUsersValid;

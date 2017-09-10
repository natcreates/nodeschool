var balance = 0;

module.exports = {

  canAfford: function(amount){
    var errorMessage;
    if(!this.isValidAmount(amount) || this.isValidAmount(amount) === undefined){
      errorMessage = "Invalid Input";
    }
    if(errorMessage){
      throw new Error(errorMessage);
    }
    return amount <= balance;
  },

  decreaseBalance: function(amount){
    var errorMessage;
    if(!this.canAfford(amount) || this.canAfford(amount) === undefined ){
        errorMessage = "Insufficient balance";
    }
    if(errorMessage){
        throw new Error(errorMessage);
    }
    balance -= amount;
  },

  isValidAmount: function(amount){
      if(amount === null || amount === undefined){
        return false;
      } else {
        return true;
      }
  },

  increaseBalance: function(amount){
    balance += amount;
  },

  getBalance: function(){
    return balance;
  }

};

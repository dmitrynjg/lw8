'use strict';
module.exports = {
  amount: 0,
  history: [], // сохранять операции над кассой здесь
  open: function (incomingCash) {
    if (typeof incomingCash === 'number') {
      if (this.amount >= 0) {
        return true;
      }
      else {
        return false;
      }
    }
  },
  addPayment: function (payment) {
    if (typeof payment === 'object') {
      if (this.open(payment['amount'])) {
        if (payment['amount'] >= 0) {
          this.amount = this.amount + payment['amount'];
          this.history.push(payment['info']);
        }
      }
      else{
        return false;
      }
    }
  },
  refundPayment: function (refund) {
    if (typeof refund === 'object') {
      if (this.open(refund['amount'])) {
        if ((this.amount - refund['amount']) >= 0) {
          this.amount = this.amount - refund['amount'];
          this.history.push(refund['info']);
        }
      }
      else{
        return false;
      }
    }
  }
};





'use strict';
module.exports = {
  amount: 0,
  history: [], // сохранять операции над кассой здесь
  open: function (incomingCash) {
    if (typeof incomingCash === 'number' && incomingCash >= 0) {
      return true;
    }
    else {
      return false;
    }
  },
  addPayment: function (payment) {
    if (this.open(payment['amount']) === true) {
      this.history.push(payment['info']);
      this.amount = this.amount + payment['amount'];
    }
    else{
      return 'Error';
    }
  },
  refundPayment: function (refund) {
    if ((this.open(refund['amount']) === true) && (this.amount - refund['amount'] >= 0)) {
        this.amount = this.amount - refund['amount'];
        this.history.push(refund['info']);
      }
      else {
        this.history.push('Возврат не возможен');
        return 'В кассе нет таких денег';
      }
  },
};






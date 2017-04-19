import Ember from 'ember';

export default Ember.Route.extend({
   model() {
      return [{
         id: 1,
         assets: [{
            id: 1,
            symbol: 'BVMF:BRML3',
            qty: 300,
            buy_price: 13.45
         },{
            id: 2,
            symbol: 'BVMF:NATU3',
            qty: 200,
            buy_price: 14.30
         }],
         t_cost: 212.4,
         t_date: '2017-02-20'
      }];
   }
});

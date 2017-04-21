import Ember from 'ember';

export default Ember.Route.extend({
   model() {
      return this.store.createRecord('transaction');
   },
   actions: {
      createTransaction() {
         let trans = this.modelFor(this.routeName);
         var self = this;
         trans.save().then(function() {
            self.transiftionTo('index');
         }).catch(function(reason) {
            console.log("Falhou: " + reason);
         });
      },
      addMoreAsset() {
         console.log(this);
      }
   }
});

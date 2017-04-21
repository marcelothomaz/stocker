import DS from 'ember-data';

export default DS.Model.extend({
   transaction: DS.belongsTo('transaction'),
   symbol: DS.attr('string'),
   qty: DS.attr('number'),
   buy_price: DS.attr('number'),
   curr_price: DS.attr('number')
});

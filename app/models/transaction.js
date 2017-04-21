import DS from 'ember-data';

export default DS.Model.extend({
   cost: DS.attr('number'),
   date: DS.attr('date'),
   assets: DS.hasMany('asset')
});

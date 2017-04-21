import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
   namespace: 'api/stocker',
   host: 'http://localhost:4500'
});

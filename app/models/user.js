import DS from 'ember-data';
const { attr } = DS;

export default DS.Model.extend({
  firstName: attr('string'),
  displayName: attr('string'),
  rdioUsername: attr('string'),
  rdioIconUrl: attr('string'),
  createdAt: attr('date'),
  updatedAt: attr('date')
});

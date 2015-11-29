import DS from 'ember-data';
const { attr, belongsTo } = DS;

export default DS.Model.extend({
  album: belongsTo('album'),

  duration: attr('number'),
  icon: attr('string'),
  isClean: attr('boolean'),
  isExplicit: attr('boolean'),
  isrcs: attr(),
  name: attr('string'),
  trackNum: attr('number')
});

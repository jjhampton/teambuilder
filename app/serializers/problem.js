// import DS from 'ember-data';
import ApplicationSerializer from '../../ember-parse-adapter/serializers/application';
//
export default ApplicationSerializer;
// export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin, {
//   serializeHasMany: function(snapshot, json, relationship) {
//     console.log('snapshot', snapshot, 'json', json, 'relsationship', relationship);
//     console.log('snapshot.members', snapshot.get('members'));
//   },
//
//   attrs: {
//     members: {embedded: 'always'}
//   }
// });

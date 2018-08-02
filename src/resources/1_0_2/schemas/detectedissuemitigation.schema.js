const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLNonNull } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary DetectedIssueMitigation Schema
 */
module.exports = new GraphQLObjectType({
	name: 'DetectedIssueMitigation',
	description: 'Indicates an action that has been taken or is committed to to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/detectedissue-mitigation-action
		action: {
			type: new GraphQLNonNull(require('./codeableconcept.schema')),
			description: 'Describes the action that was taken or the observation that was made that reduces/eliminates the risk associated with the identified issue.'
		},
		date: {
			type: DateTimeScalar,
			description: 'Indicates when the mitigating action was documented.'
		},
		_date: {
			type: require('./element.schema'),
			description: 'Indicates when the mitigating action was documented.'
		},
		author: {
			type: require('./reference.schema'),
			description: 'Identifies the practitioner who determined the mitigation and takes responsibility for the mitigation step occurring.'
		}
	})
});

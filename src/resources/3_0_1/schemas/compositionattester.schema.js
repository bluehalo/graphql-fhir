const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary CompositionAttester Schema
 */
module.exports = new GraphQLObjectType({
	name: 'CompositionAttester',
	description: 'A participant who has attested to the accuracy of the composition/document.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/composition-attestation-mode
		mode: {
			type: new GraphQLList(new GraphQLNonNull(CodeScalar)),
			description: 'The type of attestation the authenticator offers.'
		},
		_mode: {
			type: require('./element.schema'),
			description: 'The type of attestation the authenticator offers.'
		},
		time: {
			type: DateTimeScalar,
			description: 'When the composition was attested by the party.'
		},
		_time: {
			type: require('./element.schema'),
			description: 'When the composition was attested by the party.'
		},
		party: {
			type: require('./reference.schema'),
			description: 'Who attested the composition in the specified way.'
		}
	})
});

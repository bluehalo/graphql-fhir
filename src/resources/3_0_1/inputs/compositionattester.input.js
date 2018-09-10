const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary Composition.attester Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'CompositionAttester_Input',
	description: 'A participant who has attested to the accuracy of the composition/document.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		// ValueSetReference: http://hl7.org/fhir/ValueSet/composition-attestation-mode
		mode: {
			type: new GraphQLList(new GraphQLNonNull(CodeScalar)),
			description: 'The type of attestation the authenticator offers.'
		},
		_mode: {
			type: require('./element.input'),
			description: 'The type of attestation the authenticator offers.'
		},
		time: {
			type: DateTimeScalar,
			description: 'When the composition was attested by the party.'
		},
		_time: {
			type: require('./element.input'),
			description: 'When the composition was attested by the party.'
		},
		party: {
			type: require('./reference.input'),
			description: 'Who attested the composition in the specified way.'
		}
	})
});

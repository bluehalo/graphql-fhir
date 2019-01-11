const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary Compositionattester Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Compositionattester_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_mode: {
			type: require('./element.input.js'),
			description: 'The type of attestation the authenticator offers.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/composition-attestation-mode
		mode: {
			type: new GraphQLList(new GraphQLNonNull(CodeScalar)),
			description: 'The type of attestation the authenticator offers.',
		},
		_time: {
			type: require('./element.input.js'),
			description: 'When the composition was attested by the party.',
		},
		time: {
			type: DateTimeScalar,
			description: 'When the composition was attested by the party.',
		},
		party: {
			type: GraphQLString,
			description: 'Who attested the composition in the specified way.',
		},
	}),
});

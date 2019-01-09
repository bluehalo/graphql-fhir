const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary Compositionattester Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Compositionattester',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		_mode: {
			type: require('./element.schema.js'),
			description: 'The type of attestation the authenticator offers.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/composition-attestation-mode
		mode: {
			type: new GraphQLList(new GraphQLNonNull(CodeScalar)),
			description: 'The type of attestation the authenticator offers.',
		},
		_time: {
			type: require('./element.schema.js'),
			description: 'When composition was attested by the party.',
		},
		time: {
			type: DateTimeScalar,
			description: 'When composition was attested by the party.',
		},
		party: {
			type: new GraphQLUnionType({
				name: 'Compositionattesterparty_party_Union',
				description: 'Who attested the composition in the specified way.',
				types: () => [
					require('./patient.schema.js'),
					require('./practitioner.schema.js'),
					require('./organization.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Patient') {
						return require('./patient.schema.js');
					}
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
					if (data && data.resourceType === 'Organization') {
						return require('./organization.schema.js');
					}
				},
			}),
			description: 'Who attested the composition in the specified way.',
		},
	}),
});

const { GraphQLList, GraphQLUnionType, GraphQLObjectType } = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');

/**
 * @name exports
 * @summary Encounterparticipant Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Encounterparticipant',
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/encounter-participant-type
		type: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description: 'Role of participant in encounter.',
		},
		period: {
			type: require('./period.schema.js'),
			description:
				'The period of time that the specified participant was present during the encounter. These can overlap or be sub-sets of the overall encounters period.',
		},
		individual: {
			type: new GraphQLUnionType({
				name: 'Encounterparticipantindividual_individual_Union',
				description:
					'Persons involved in the encounter other than the patient.',
				types: () => [
					require('./practitioner.schema.js'),
					require('./relatedperson.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
					if (data && data.resourceType === 'RelatedPerson') {
						return require('./relatedperson.schema.js');
					}
				},
			}),
			description: 'Persons involved in the encounter other than the patient.',
		},
	}),
});

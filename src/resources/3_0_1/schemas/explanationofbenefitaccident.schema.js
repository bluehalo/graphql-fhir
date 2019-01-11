const {
	GraphQLString,
	GraphQLList,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const DateScalar = require('../scalars/date.scalar.js');

/**
 * @name exports
 * @summary ExplanationOfBenefitaccident Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ExplanationOfBenefitaccident',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
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
		_date: {
			type: require('./element.schema.js'),
			description: 'Date of an accident which these services are addressing.',
		},
		date: {
			type: DateScalar,
			description: 'Date of an accident which these services are addressing.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/v3-ActIncidentCode
		type: {
			type: require('./codeableconcept.schema.js'),
			description: 'Type of accident: work, auto, etc.',
		},
		locationAddress: {
			type: require('./address.schema.js'),
			description: 'Where the accident occurred.',
		},
		locationReference: {
			type: new GraphQLUnionType({
				name:
					'ExplanationOfBenefitaccidentlocationReference_locationReference_Union',
				description: 'Where the accident occurred.',
				types: () => [require('./location.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Location') {
						return require('./location.schema.js');
					}
				},
			}),
			description: 'Where the accident occurred.',
		},
	}),
});

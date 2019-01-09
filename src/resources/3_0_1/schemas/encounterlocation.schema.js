const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary Encounterlocation Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Encounterlocation',
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
		location: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'Encounterlocationlocation_location_Union',
					description: 'The location where the encounter takes place.',
					types: () => [require('./location.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Location') {
							return require('./location.schema.js');
						}
					},
				}),
			),
			description: 'The location where the encounter takes place.',
		},
		_status: {
			type: require('./element.schema.js'),
			description:
				"The status of the participants' presence at the specified location during the period specified. If the participant is is no longer at the location, then the period will have an end date/time.",
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/encounter-location-status
		status: {
			type: CodeScalar,
			description:
				"The status of the participants' presence at the specified location during the period specified. If the participant is is no longer at the location, then the period will have an end date/time.",
		},
		period: {
			type: require('./period.schema.js'),
			description:
				'Time period during which the patient was present at the location.',
		},
	}),
});

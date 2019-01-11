const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const PositiveIntScalar = require('../scalars/positiveint.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary Claimprocedure Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Claimprocedure',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		_sequence: {
			type: require('./element.schema.js'),
			description: 'A number to uniquely identify procedure entries.',
		},
		sequence: {
			type: new GraphQLNonNull(PositiveIntScalar),
			description: 'A number to uniquely identify procedure entries.',
		},
		type: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description: 'When the condition was observed or the relative ranking.',
		},
		_date: {
			type: require('./element.schema.js'),
			description: 'Date and optionally time the procedure was performed.',
		},
		date: {
			type: DateTimeScalar,
			description: 'Date and optionally time the procedure was performed.',
		},
		procedureCodeableConcept: {
			type: new GraphQLNonNull(require('./codeableconcept.schema.js')),
			description:
				'The code or reference to a Procedure resource which identifies the clinical intervention performed.',
		},
		procedureReference: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'ClaimprocedureprocedureReference_procedureReference_Union',
					description:
						'The code or reference to a Procedure resource which identifies the clinical intervention performed.',
					types: () => [require('./procedure.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Procedure') {
							return require('./procedure.schema.js');
						}
					},
				}),
			),
			description:
				'The code or reference to a Procedure resource which identifies the clinical intervention performed.',
		},
		udi: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'Claimprocedureudi_udi_Union',
					description:
						'Unique Device Identifiers associated with this line item.',
					types: () => [require('./device.schema.js')],
					resolveType(data) {
						if (data && data.resourceType === 'Device') {
							return require('./device.schema.js');
						}
					},
				}),
			),
			description: 'Unique Device Identifiers associated with this line item.',
		},
	}),
});

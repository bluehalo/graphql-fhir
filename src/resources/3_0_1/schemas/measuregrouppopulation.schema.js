const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary Measuregrouppopulation Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Measuregrouppopulation',
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
		identifier: {
			type: require('./identifier.schema.js'),
			description:
				'A unique identifier for the population criteria. This identifier is used to report data against this criteria within the measure report.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/measure-population
		code: {
			type: require('./codeableconcept.schema.js'),
			description: 'The type of population criteria.',
		},
		_name: {
			type: require('./element.schema.js'),
			description: 'Optional name or short description of this population.',
		},
		name: {
			type: GraphQLString,
			description: 'Optional name or short description of this population.',
		},
		_description: {
			type: require('./element.schema.js'),
			description:
				'The human readable description of this population criteria.',
		},
		description: {
			type: GraphQLString,
			description:
				'The human readable description of this population criteria.',
		},
		_criteria: {
			type: require('./element.schema.js'),
			description:
				'The name of a valid referenced CQL expression (may be namespaced) that defines this population criteria.',
		},
		criteria: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'The name of a valid referenced CQL expression (may be namespaced) that defines this population criteria.',
		},
	}),
});

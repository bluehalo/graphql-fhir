const { GraphQLString, GraphQLList, GraphQLObjectType } = require('graphql');

/**
 * @name exports
 * @summary MeasuresupplementalData Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MeasuresupplementalData',
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
			description: 'An identifier for the supplemental data.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/measure-data-usage
		usage: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'An indicator of the intended usage for the supplemental data element. Supplemental data indicates the data is additional information requested to augment the measure information. Risk adjustment factor indicates the data is additional information used to calculate risk adjustment factors when applying a risk model to the measure calculation.',
		},
		_criteria: {
			type: require('./element.schema.js'),
			description:
				'The criteria for the supplemental data. This must be the name of a valid expression defined within a referenced library, and defines the data to be returned for this element.',
		},
		criteria: {
			type: GraphQLString,
			description:
				'The criteria for the supplemental data. This must be the name of a valid expression defined within a referenced library, and defines the data to be returned for this element.',
		},
		_path: {
			type: require('./element.schema.js'),
			description:
				'The supplemental data to be supplied as part of the measure response, specified as a valid FHIR Resource Path.',
		},
		path: {
			type: GraphQLString,
			description:
				'The supplemental data to be supplied as part of the measure response, specified as a valid FHIR Resource Path.',
		},
	}),
});

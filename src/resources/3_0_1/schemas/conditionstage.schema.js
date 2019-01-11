const {
	GraphQLString,
	GraphQLList,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary Conditionstage Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Conditionstage',
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
		// valueSetReference: http://hl7.org/fhir/ValueSet/condition-stage
		summary: {
			type: require('./codeableconcept.schema.js'),
			description:
				"A simple summary of the stage such as 'Stage 3'. The determination of the stage is disease-specific.",
		},
		assessment: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'Conditionstageassessment_assessment_Union',
					description:
						'Reference to a formal record of the evidence on which the staging assessment is based.',
					types: () => [
						require('./clinicalimpression.schema.js'),
						require('./diagnosticreport.schema.js'),
						require('./observation.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'ClinicalImpression') {
							return require('./clinicalimpression.schema.js');
						}
						if (data && data.resourceType === 'DiagnosticReport') {
							return require('./diagnosticreport.schema.js');
						}
						if (data && data.resourceType === 'Observation') {
							return require('./observation.schema.js');
						}
					},
				}),
			),
			description:
				'Reference to a formal record of the evidence on which the staging assessment is based.',
		},
	}),
});

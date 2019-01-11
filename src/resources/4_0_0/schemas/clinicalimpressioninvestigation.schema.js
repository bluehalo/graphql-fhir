const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary ClinicalImpressioninvestigation Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ClinicalImpressioninvestigation',
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
		code: {
			type: new GraphQLNonNull(require('./codeableconcept.schema.js')),
			description:
				"A name/code for the group ('set') of investigations. Typically, this will be something like 'signs', 'symptoms', 'clinical', 'diagnostic', but the list is not constrained, and others such groups such as (exposure|family|travel|nutritional) history may be used.",
		},
		item: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'ClinicalImpressioninvestigationitem_item_Union',
					description:
						'A record of a specific investigation that was undertaken.',
					types: () => [
						require('./observation.schema.js'),
						require('./questionnaireresponse.schema.js'),
						require('./familymemberhistory.schema.js'),
						require('./diagnosticreport.schema.js'),
						require('./riskassessment.schema.js'),
						require('./imagingstudy.schema.js'),
						require('./media.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'Observation') {
							return require('./observation.schema.js');
						}
						if (data && data.resourceType === 'QuestionnaireResponse') {
							return require('./questionnaireresponse.schema.js');
						}
						if (data && data.resourceType === 'FamilyMemberHistory') {
							return require('./familymemberhistory.schema.js');
						}
						if (data && data.resourceType === 'DiagnosticReport') {
							return require('./diagnosticreport.schema.js');
						}
						if (data && data.resourceType === 'RiskAssessment') {
							return require('./riskassessment.schema.js');
						}
						if (data && data.resourceType === 'ImagingStudy') {
							return require('./imagingstudy.schema.js');
						}
						if (data && data.resourceType === 'Media') {
							return require('./media.schema.js');
						}
					},
				}),
			),
			description: 'A record of a specific investigation that was undertaken.',
		},
	}),
});

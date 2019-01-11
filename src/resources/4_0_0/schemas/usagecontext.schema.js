const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');

/**
 * @name exports
 * @summary UsageContext Schema
 */
module.exports = new GraphQLObjectType({
	name: 'UsageContext',
	description:
		'Base StructureDefinition for UsageContext Type: Specifies clinical/business/etc. metadata that can be used to retrieve, index and/or categorize an artifact. This metadata can either be specific to the applicable population (e.g., age category, DRG) or the specific context of care (e.g., venue, care setting, provider of care).',
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
		code: {
			type: new GraphQLNonNull(require('./coding.schema.js')),
			description:
				'A code that identifies the type of context being specified by this usage context.',
		},
		valueCodeableConcept: {
			type: new GraphQLNonNull(require('./codeableconcept.schema.js')),
			description:
				'A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.',
		},
		valueQuantity: {
			type: new GraphQLNonNull(require('./quantity.schema.js')),
			description:
				'A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.',
		},
		valueRange: {
			type: new GraphQLNonNull(require('./range.schema.js')),
			description:
				'A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.',
		},
		valueReference: {
			type: new GraphQLNonNull(
				new GraphQLUnionType({
					name: 'UsageContextvalueReference_valueReference_Union',
					description:
						'A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.',
					types: () => [
						require('./plandefinition.schema.js'),
						require('./researchstudy.schema.js'),
						require('./insuranceplan.schema.js'),
						require('./healthcareservice.schema.js'),
						require('./group.schema.js'),
						require('./location.schema.js'),
						require('./organization.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'PlanDefinition') {
							return require('./plandefinition.schema.js');
						}
						if (data && data.resourceType === 'ResearchStudy') {
							return require('./researchstudy.schema.js');
						}
						if (data && data.resourceType === 'InsurancePlan') {
							return require('./insuranceplan.schema.js');
						}
						if (data && data.resourceType === 'HealthcareService') {
							return require('./healthcareservice.schema.js');
						}
						if (data && data.resourceType === 'Group') {
							return require('./group.schema.js');
						}
						if (data && data.resourceType === 'Location') {
							return require('./location.schema.js');
						}
						if (data && data.resourceType === 'Organization') {
							return require('./organization.schema.js');
						}
					},
				}),
			),
			description:
				'A value that defines the context specified in this context of use. The interpretation of the value is defined by the code.',
		},
	}),
});

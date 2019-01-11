const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary MedicinalProductIndication Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MedicinalProductIndication',
	description: 'Indication for the Medicinal Product.',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'MedicinalProductIndication_Enum_schema',
					values: {
						MedicinalProductIndication: { value: 'MedicinalProductIndication' },
					},
				}),
			),
			description: 'Type of resource',
		},
		_id: {
			type: require('./element.schema.js'),
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		id: {
			type: IdScalar,
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		meta: {
			type: require('./meta.schema.js'),
			description:
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.schema.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.',
		},
		_language: {
			type: require('./element.schema.js'),
			description: 'The base language in which the resource is written.',
		},
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.schema.js'),
			description:
				"A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(require('./resourcelist.schema')),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		subject: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name: 'MedicinalProductIndicationsubject_subject_Union',
					description: 'The medication for which this is an indication.',
					types: () => [
						require('./medicinalproduct.schema.js'),
						require('./medication.schema.js'),
					],
					resolveType(data) {
						if (data && data.resourceType === 'MedicinalProduct') {
							return require('./medicinalproduct.schema.js');
						}
						if (data && data.resourceType === 'Medication') {
							return require('./medication.schema.js');
						}
					},
				}),
			),
			description: 'The medication for which this is an indication.',
		},
		diseaseSymptomProcedure: {
			type: require('./codeableconcept.schema.js'),
			description:
				'The disease, symptom or procedure that is the indication for treatment.',
		},
		diseaseStatus: {
			type: require('./codeableconcept.schema.js'),
			description:
				'The status of the disease or symptom for which the indication applies.',
		},
		comorbidity: {
			type: new GraphQLList(require('./codeableconcept.schema.js')),
			description:
				'Comorbidity (concurrent condition) or co-infection as part of the indication.',
		},
		intendedEffect: {
			type: require('./codeableconcept.schema.js'),
			description:
				'The intended effect, aim or strategy to be achieved by the indication.',
		},
		duration: {
			type: require('./quantity.schema.js'),
			description: 'Timing or duration information as part of the indication.',
		},
		otherTherapy: {
			type: new GraphQLList(
				require('./medicinalproductindicationothertherapy.schema.js'),
			),
			description:
				'Information about the use of the medicinal product in relation to other therapies described as part of the indication.',
		},
		undesirableEffect: {
			type: new GraphQLList(
				new GraphQLUnionType({
					name:
						'MedicinalProductIndicationundesirableEffect_undesirableEffect_Union',
					description:
						'Describe the undesirable effects of the medicinal product.',
					types: () => [
						require('./medicinalproductundesirableeffect.schema.js'),
					],
					resolveType(data) {
						if (
							data &&
							data.resourceType === 'MedicinalProductUndesirableEffect'
						) {
							return require('./medicinalproductundesirableeffect.schema.js');
						}
					},
				}),
			),
			description: 'Describe the undesirable effects of the medicinal product.',
		},
		population: {
			type: new GraphQLList(require('./population.schema.js')),
			description: 'The population group to which this applies.',
		},
	}),
});

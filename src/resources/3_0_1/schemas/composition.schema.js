const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');

let CompositionResourceType = new GraphQLEnumType({
	name: 'CompositionResourceType',
	values: {
		Composition: { value: 'Composition' }
	}
});

/**
 * @name exports
 * @summary Composition Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Composition',
	description: 'Base StructureDefinition for Composition Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(CompositionResourceType),
			description: 'Type of this resource.'
		},
		identifier: {
			type: require('./identifier.schema'),
			description: 'Logical identifier for the composition, assigned when created. This identifier stays constant as the composition is changed over time.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/composition-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The workflow/clinical status of this composition. The status is a marker for the clinical standing of the document.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'The workflow/clinical status of this composition. The status is a marker for the clinical standing of the document.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/doc-typecodes
		type: {
			type: new GraphQLNonNull(require('./codeableconcept.schema')),
			description: 'Specifies the particular kind of composition (e.g. History and Physical, Discharge Summary, Progress Note). This usually equates to the purpose of making the composition.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/doc-classcodes
		class: {
			type: require('./codeableconcept.schema'),
			description: 'A categorization for the type of the composition - helps for indexing and searching. This may be implied by or derived from the code specified in the Composition Type.'
		},
		subject: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'Who or what the composition is about. The composition can be about a person, (patient or healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as a document about a herd of livestock, or a set of patients that share a common exposure).'
		},
		encounter: {
			type: require('./reference.schema'),
			description: 'Describes the clinical encounter or type of care this documentation is associated with.'
		},
		date: {
			type: new GraphQLNonNull(DateTimeScalar),
			description: 'The composition editing time, when the composition was last logically changed by the author.'
		},
		_date: {
			type: require('./element.schema'),
			description: 'The composition editing time, when the composition was last logically changed by the author.'
		},
		author: {
			type: new GraphQLList(new GraphQLNonNull(require('./reference.schema'))),
			description: 'Identifies who is responsible for the information in the composition, not necessarily who typed it in.'
		},
		title: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Official human-readable label for the composition.'
		},
		_title: {
			type: require('./element.schema'),
			description: 'Official human-readable label for the composition.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/v3-ConfidentialityClassification
		confidentiality: {
			type: CodeScalar,
			description: 'The code specifying the level of confidentiality of the Composition.'
		},
		_confidentiality: {
			type: require('./element.schema'),
			description: 'The code specifying the level of confidentiality of the Composition.'
		},
		attester: {
			type: new GraphQLList(require('./compositionattester.schema')),
			description: 'A participant who has attested to the accuracy of the composition/document.'
		},
		custodian: {
			type: require('./reference.schema'),
			description: 'Identifies the organization or group who is responsible for ongoing maintenance of and access to the composition/document information.'
		},
		relatesTo: {
			type: new GraphQLList(require('./compositionrelatesto.schema')),
			description: 'Relationships that this composition has with other compositions or documents that already exist.'
		},
		event: {
			type: new GraphQLList(require('./compositionevent.schema')),
			description: 'The clinical service, such as a colonoscopy or an appendectomy, being documented.'
		},
		section: {
			type: new GraphQLList(require('./compositionsection.schema')),
			description: 'The root of the sections that make up the composition.'
		}
	})
});

const CodeScalar = require('../scalars/code.scalar');
const DateScalar = require('../scalars/date.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

// TODO: Verify this is the correct resourceType
let EligibilityRequestResourceType = new GraphQLEnumType({
	name: 'EligibilityRequestResourceType',
	values: {
		EligibilityRequest: { value: 'EligibilityRequest' }
	}
});

/**
 * @name exports
 * @summary EligibilityRequest Schema
 */
module.exports = new GraphQLObjectType({
	name: 'EligibilityRequest',
	description: 'Base StructureDefinition for EligibilityRequest Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(EligibilityRequestResourceType),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'The Response business identifier.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/fm-status
		status: {
			type: CodeScalar,
			description: 'The status of the resource instance.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'The status of the resource instance.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/process-priority
		priority: {
			type: require('./codeableconcept.schema'),
			description: 'Immediate (STAT), best effort (NORMAL), deferred (DEFER).'
		},
		patient: {
			type: require('./reference.schema'),
			description: 'Patient Resource.'
		},
		servicedDate: {
			type: DateScalar,
			description: 'The date or dates when the enclosed suite of services were performed or completed.'
		},
		_servicedDate: {
			type: require('./element.schema'),
			description: 'The date or dates when the enclosed suite of services were performed or completed.'
		},
		servicedPeriod: {
			type: require('./period.schema'),
			description: 'The date or dates when the enclosed suite of services were performed or completed.'
		},
		created: {
			type: DateTimeScalar,
			description: 'The date when this resource was created.'
		},
		_created: {
			type: require('./element.schema'),
			description: 'The date when this resource was created.'
		},
		enterer: {
			type: require('./reference.schema'),
			description: 'Person who created the invoice/claim/pre-determination or pre-authorization.'
		},
		provider: {
			type: require('./reference.schema'),
			description: 'The practitioner who is responsible for the services rendered to the patient.'
		},
		organization: {
			type: require('./reference.schema'),
			description: 'The organization which is responsible for the services rendered to the patient.'
		},
		insurer: {
			type: require('./reference.schema'),
			description: 'The Insurer who is target  of the request.'
		},
		facility: {
			type: require('./reference.schema'),
			description: 'Facility where the services were provided.'
		},
		coverage: {
			type: require('./reference.schema'),
			description: 'Financial instrument by which payment information for health care.'
		},
		businessArrangement: {
			type: GraphQLString,
			description: 'The contract number of a business agreement which describes the terms and conditions.'
		},
		_businessArrangement: {
			type: require('./element.schema'),
			description: 'The contract number of a business agreement which describes the terms and conditions.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/benefit-category
		benefitCategory: {
			type: require('./codeableconcept.schema'),
			description: 'Dental, Vision, Medical, Pharmacy, Rehab etc.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/benefit-subcategory
		benefitSubCategory: {
			type: require('./codeableconcept.schema'),
			description: 'Dental: basic, major, ortho; Vision exam, glasses, contacts; etc.'
		}
	})
});

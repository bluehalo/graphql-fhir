const CodeScalar = require('../scalars/code.scalar');
const DateScalar = require('../scalars/date.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

// Util for extending gql objects
const { extendSchema } = require('../../../utils/schema.utils');

let EligibilityRequestResourceInputType = new GraphQLEnumType({
	name: 'EligibilityRequestResourceInputType',
	values: {
		EligibilityRequest: { value: 'EligibilityRequest' }
	}
});

/**
 * @name exports
 * @summary EligibilityRequest Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'EligibilityRequest_Input',
	description: 'Base StructureDefinition for EligibilityRequest Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(EligibilityRequestResourceInputType),
			description: 'Type of this resource.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'The Response business identifier.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/fm-status
		status: {
			type: CodeScalar,
			description: 'The status of the resource instance.'
		},
		_status: {
			type: require('./element.input'),
			description: 'The status of the resource instance.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/process-priority
		priority: {
			type: require('./codeableconcept.input'),
			description: 'Immediate (STAT), best effort (NORMAL), deferred (DEFER).'
		},
		patient: {
			type: require('./reference.input'),
			description: 'Patient Resource.'
		},
		servicedDate: {
			type: DateScalar,
			description: 'The date or dates when the enclosed suite of services were performed or completed.'
		},
		_servicedDate: {
			type: require('./element.input'),
			description: 'The date or dates when the enclosed suite of services were performed or completed.'
		},
		servicedPeriod: {
			type: require('./period.input'),
			description: 'The date or dates when the enclosed suite of services were performed or completed.'
		},
		created: {
			type: DateTimeScalar,
			description: 'The date when this resource was created.'
		},
		_created: {
			type: require('./element.input'),
			description: 'The date when this resource was created.'
		},
		enterer: {
			type: require('./reference.input'),
			description: 'Person who created the invoice/claim/pre-determination or pre-authorization.'
		},
		provider: {
			type: require('./reference.input'),
			description: 'The practitioner who is responsible for the services rendered to the patient.'
		},
		organization: {
			type: require('./reference.input'),
			description: 'The organization which is responsible for the services rendered to the patient.'
		},
		insurer: {
			type: require('./reference.input'),
			description: 'The Insurer who is target  of the request.'
		},
		facility: {
			type: require('./reference.input'),
			description: 'Facility where the services were provided.'
		},
		coverage: {
			type: require('./reference.input'),
			description: 'Financial instrument by which payment information for health care.'
		},
		businessArrangement: {
			type: GraphQLString,
			description: 'The contract number of a business agreement which describes the terms and conditions.'
		},
		_businessArrangement: {
			type: require('./element.input'),
			description: 'The contract number of a business agreement which describes the terms and conditions.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/benefit-category
		benefitCategory: {
			type: require('./codeableconcept.input'),
			description: 'Dental, Vision, Medical, Pharmacy, Rehab etc.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/benefit-subcategory
		benefitSubCategory: {
			type: require('./codeableconcept.input'),
			description: 'Dental: basic, major, ortho; Vision exam, glasses, contacts; etc.'
		}
	})
});

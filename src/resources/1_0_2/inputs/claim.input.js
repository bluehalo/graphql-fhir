const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

// TODO: Verify this is the correct resourceType
let ClaimResourceInputType = new GraphQLEnumType({
	name: 'ClaimResourceInputType',
	values: {
		Claim: { value: 'Claim' }
	}
});

/**
 * @name exports
 * @summary Claim Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Claim_Input',
	description: 'Base StructureDefinition for Claim Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(ClaimResourceInputType),
			description: 'Type of this resource'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/claim-type-link
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The category of claim this is.'
		},
		_type: {
			type: require('./element.input'),
			description: 'The category of claim this is.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'The business identifier for the instance: invoice number, claim number, pre-determination or pre-authorization number.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/ruleset
		ruleset: {
			type: require('./coding.input'),
			description: 'The version of the specification on which this instance relies.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/ruleset
		originalRuleset: {
			type: require('./coding.input'),
			description: 'The version of the specification from which the original instance was created.'
		},
		created: {
			type: DateTimeScalar,
			description: 'The date when the enclosed suite of services were performed or completed.'
		},
		_created: {
			type: require('./element.input'),
			description: 'The date when the enclosed suite of services were performed or completed.'
		},
		target: {
			type: require('./reference.input'),
			description: 'Insurer Identifier, typical BIN number (6 digit).'
		},
		provider: {
			type: require('./reference.input'),
			description: 'The provider which is responsible for the bill, claim pre-determination, pre-authorization.'
		},
		organization: {
			type: require('./reference.input'),
			description: 'The organization which is responsible for the bill, claim pre-determination, pre-authorization.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/claim-use-link
		use: {
			type: CodeScalar,
			description: 'Complete (Bill or Claim), Proposed (Pre-Authorization), Exploratory (Pre-determination).'
		},
		_use: {
			type: require('./element.input'),
			description: 'Complete (Bill or Claim), Proposed (Pre-Authorization), Exploratory (Pre-determination).'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/process-priority
		priority: {
			type: require('./coding.input'),
			description: 'Immediate (stat), best effort (normal), deferred (deferred).'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/fundsreserve
		fundsReserve: {
			type: require('./coding.input'),
			description: 'In the case of a Pre-Determination/Pre-Authorization the provider may request that funds in the amount of the expected Benefit be reserved (\'Patient\' or \'Provider\') to pay for the Benefits determined on the subsequent claim(s). \'None\' explicitly indicates no funds reserving is requested.'
		},
		enterer: {
			type: require('./reference.input'),
			description: 'Person who created the invoice/claim/pre-determination or pre-authorization.'
		},
		facility: {
			type: require('./reference.input'),
			description: 'Facility where the services were provided.'
		},
		prescription: {
			type: require('./reference.input'),
			description: 'Prescription to support the dispensing of Pharmacy or Vision products.'
		},
		originalPrescription: {
			type: require('./reference.input'),
			description: 'Original prescription to support the dispensing of pharmacy services, medications or products.'
		},
		payee: {
			type: require('./claimpayee.input'),
			description: 'The party to be reimbursed for the services.'
		},
		referral: {
			type: require('./reference.input'),
			description: 'The referral resource which lists the date, practitioner, reason and other supporting information.'
		},
		diagnosis: {
			type: new GraphQLList(require('./claimdiagnosis.input')),
			description: 'Ordered list of patient diagnosis for which care is sought.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/fm-conditions
		condition: {
			type: new GraphQLList(require('./coding.input')),
			description: 'List of patient conditions for which care is sought.'
		},
		patient: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'Patient Resource.'
		},
		coverage: {
			type: new GraphQLList(require('./claimcoverage.input')),
			description: 'Financial instrument by which payment information for health care.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/claim-exception
		exception: {
			type: new GraphQLList(require('./coding.input')),
			description: 'Factors which may influence the applicability of coverage.'
		},
		school: {
			type: GraphQLString,
			description: 'Name of school for over-aged dependents.'
		},
		_school: {
			type: require('./element.input'),
			description: 'Name of school for over-aged dependents.'
		},
		accident: {
			type: DateScalar,
			description: 'Date of an accident which these services are addressing.'
		},
		_accident: {
			type: require('./element.input'),
			description: 'Date of an accident which these services are addressing.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/v3-ActIncidentCode
		accidentType: {
			type: require('./coding.input'),
			description: 'Type of accident: work, auto, etc.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/intervention
		interventionException: {
			type: new GraphQLList(require('./coding.input')),
			description: 'A list of intervention and exception codes which may influence the adjudication of the claim.'
		},
		item: {
			type: new GraphQLList(require('./claimitem.input')),
			description: 'First tier of goods and services.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/additionalmaterials
		additionalMaterials: {
			type: new GraphQLList(require('./coding.input')),
			description: 'Code to indicate that Xrays, images, emails, documents, models or attachments are being sent in support of this submission.'
		},
		missingTeeth: {
			type: new GraphQLList(require('./claimmissingteeth.input')),
			description: 'A list of teeth which would be expected but are not found due to having been previously  extracted or for other reasons.'
		}
	})
});

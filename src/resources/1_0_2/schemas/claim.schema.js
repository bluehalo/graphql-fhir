const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const DateScalar = require('../scalars/date.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let ClaimResourceType = new GraphQLEnumType({
	name: 'ClaimResourceType',
	values: {
		Claim: { value: 'Claim' }
	}
});

/**
 * @name exports
 * @summary Claim Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Claim',
	description: 'Base StructureDefinition for Claim Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(ClaimResourceType),
			description: 'Type of this resource.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/claim-type-link
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The category of claim this is.'
		},
		_type: {
			type: require('./element.schema'),
			description: 'The category of claim this is.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'The business identifier for the instance: invoice number, claim number, pre-determination or pre-authorization number.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/ruleset
		ruleset: {
			type: require('./coding.schema'),
			description: 'The version of the specification on which this instance relies.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/ruleset
		originalRuleset: {
			type: require('./coding.schema'),
			description: 'The version of the specification from which the original instance was created.'
		},
		created: {
			type: DateTimeScalar,
			description: 'The date when the enclosed suite of services were performed or completed.'
		},
		_created: {
			type: require('./element.schema'),
			description: 'The date when the enclosed suite of services were performed or completed.'
		},
		target: {
			type: require('./reference.schema'),
			description: 'Insurer Identifier, typical BIN number (6 digit).'
		},
		provider: {
			type: require('./reference.schema'),
			description: 'The provider which is responsible for the bill, claim pre-determination, pre-authorization.'
		},
		organization: {
			type: require('./reference.schema'),
			description: 'The organization which is responsible for the bill, claim pre-determination, pre-authorization.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/claim-use-link
		use: {
			type: CodeScalar,
			description: 'Complete (Bill or Claim), Proposed (Pre-Authorization), Exploratory (Pre-determination).'
		},
		_use: {
			type: require('./element.schema'),
			description: 'Complete (Bill or Claim), Proposed (Pre-Authorization), Exploratory (Pre-determination).'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/process-priority
		priority: {
			type: require('./coding.schema'),
			description: 'Immediate (stat), best effort (normal), deferred (deferred).'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/fundsreserve
		fundsReserve: {
			type: require('./coding.schema'),
			description: 'In the case of a Pre-Determination/Pre-Authorization the provider may request that funds in the amount of the expected Benefit be reserved (\'Patient\' or \'Provider\') to pay for the Benefits determined on the subsequent claim(s). \'None\' explicitly indicates no funds reserving is requested.'
		},
		enterer: {
			type: require('./reference.schema'),
			description: 'Person who created the invoice/claim/pre-determination or pre-authorization.'
		},
		facility: {
			type: require('./reference.schema'),
			description: 'Facility where the services were provided.'
		},
		prescription: {
			type: require('./reference.schema'),
			description: 'Prescription to support the dispensing of Pharmacy or Vision products.'
		},
		originalPrescription: {
			type: require('./reference.schema'),
			description: 'Original prescription to support the dispensing of pharmacy services, medications or products.'
		},
		payee: {
			type: require('./claimpayee.schema'),
			description: 'The party to be reimbursed for the services.'
		},
		referral: {
			type: require('./reference.schema'),
			description: 'The referral resource which lists the date, practitioner, reason and other supporting information.'
		},
		diagnosis: {
			type: new GraphQLList(require('./claimdiagnosis.schema')),
			description: 'Ordered list of patient diagnosis for which care is sought.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/fm-conditions
		condition: {
			type: new GraphQLList(require('./coding.schema')),
			description: 'List of patient conditions for which care is sought.'
		},
		patient: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'Patient Resource.'
		},
		coverage: {
			type: new GraphQLList(require('./claimcoverage.schema')),
			description: 'Financial instrument by which payment information for health care.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/claim-exception
		exception: {
			type: new GraphQLList(require('./coding.schema')),
			description: 'Factors which may influence the applicability of coverage.'
		},
		school: {
			type: GraphQLString,
			description: 'Name of school for over-aged dependents.'
		},
		_school: {
			type: require('./element.schema'),
			description: 'Name of school for over-aged dependents.'
		},
		accident: {
			type: DateScalar,
			description: 'Date of an accident which these services are addressing.'
		},
		_accident: {
			type: require('./element.schema'),
			description: 'Date of an accident which these services are addressing.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/v3-ActIncidentCode
		accidentType: {
			type: require('./coding.schema'),
			description: 'Type of accident: work, auto, etc.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/intervention
		interventionException: {
			type: new GraphQLList(require('./coding.schema')),
			description: 'A list of intervention and exception codes which may influence the adjudication of the claim.'
		},
		item: {
			type: new GraphQLList(require('./claimitem.schema')),
			description: 'First tier of goods and services.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/additionalmaterials
		additionalMaterials: {
			type: new GraphQLList(require('./coding.schema')),
			description: 'Code to indicate that Xrays, images, emails, documents, models or attachments are being sent in support of this submission.'
		},
		missingTeeth: {
			type: new GraphQLList(require('./claimmissingteeth.schema')),
			description: 'A list of teeth which would be expected but are not found due to having been previously  extracted or for other reasons.'
		}
	})
});

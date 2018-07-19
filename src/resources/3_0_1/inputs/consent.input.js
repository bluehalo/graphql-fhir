const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const UriScalar = require('../scalars/uri.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

// TODO: Verify this is the correct resourceType
let ConsentResourceInputType = new GraphQLEnumType({
	name: 'ConsentResourceInputType',
	values: {
		Consent: { value: 'Consent' }
	}
});

/**
 * @name exports
 * @summary Consent Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Consent_Input',
	description: 'Base StructureDefinition for Consent Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(ConsentResourceInputType),
			description: 'Type of this resource'
		},
		identifier: {
			type: require('./identifier.input'),
			description: 'Unique identifier for this copy of the Consent Statement.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/consent-state-codes
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Indicates the current state of this consent.'
		},
		_status: {
			type: require('./element.input'),
			description: 'Indicates the current state of this consent.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/consent-category
		category: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'A classification of the type of consents found in the statement. This element supports indexing and retrieval of consent statements.'
		},
		patient: {
			type: new GraphQLNonNull(require('./reference.input')),
			description: 'The patient/healthcare consumer to whom this consent applies.'
		},
		period: {
			type: require('./period.input'),
			description: 'Relevant time or time-period when this Consent is applicable.'
		},
		dateTime: {
			type: DateTimeScalar,
			description: 'When this  Consent was issued / created / indexed.'
		},
		_dateTime: {
			type: require('./element.input'),
			description: 'When this  Consent was issued / created / indexed.'
		},
		consentingParty: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Either the Grantor, which is the entity responsible for granting the rights listed in a Consent Directive or the Grantee, which is the entity responsible for complying with the Consent Directive, including any obligations or limitations on authorizations and enforcement of prohibitions.'
		},
		actor: {
			type: new GraphQLList(require('./consentactor.input')),
			description: 'Who or what is controlled by this consent. Use group to identify a set of actors by some property they share (e.g. \'admitting officers\').'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/consent-action
		action: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'Actions controlled by this consent.'
		},
		organization: {
			type: new GraphQLList(require('./reference.input')),
			description: 'The organization that manages the consent, and the framework within which it is executed.'
		},
		sourceAttachment: {
			type: require('./attachment.input'),
			description: 'The source on which this consent statement is based. The source might be a scanned original paper form, or a reference to a consent that links back to such a source, a reference to a document repository (e.g. XDS) that stores the original consent document.'
		},
		sourceIdentifier: {
			type: require('./identifier.input'),
			description: 'The source on which this consent statement is based. The source might be a scanned original paper form, or a reference to a consent that links back to such a source, a reference to a document repository (e.g. XDS) that stores the original consent document.'
		},
		sourceReference: {
			type: require('./reference.input'),
			description: 'The source on which this consent statement is based. The source might be a scanned original paper form, or a reference to a consent that links back to such a source, a reference to a document repository (e.g. XDS) that stores the original consent document.'
		},
		policy: {
			type: new GraphQLList(require('./consentpolicy.input')),
			description: 'The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law.'
		},
		policyRule: {
			type: UriScalar,
			description: 'A referece to the specific computable policy.'
		},
		_policyRule: {
			type: require('./element.input'),
			description: 'A referece to the specific computable policy.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/security-labels
		securityLabel: {
			type: new GraphQLList(require('./coding.input')),
			description: 'A set of security labels that define which resources are controlled by this consent. If more than one label is specified, all resources must have all the specified labels.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/v3-PurposeOfUse
		purpose: {
			type: new GraphQLList(require('./coding.input')),
			description: 'The context of the activities a user is taking - why the user is accessing the data - that are controlled by this consent.'
		},
		dataPeriod: {
			type: require('./period.input'),
			description: 'Clinical or Operational Relevant period of time that bounds the data controlled by this consent.'
		},
		data: {
			type: new GraphQLList(require('./consentdata.input')),
			description: 'The resources controlled by this consent, if specific resources are referenced.'
		},
		except: {
			type: new GraphQLList(require('./consentexcept.input')),
			description: 'An exception to the base policy of this consent. An exception can be an addition or removal of access permissions.'
		}
	})
});

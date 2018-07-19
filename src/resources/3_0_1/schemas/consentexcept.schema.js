const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary ConsentExcept Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ConsentExcept',
	description: 'An exception to the base policy of this consent. An exception can be an addition or removal of access permissions.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/consent-except-type
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Action  to take - permit or deny - when the exception conditions are met.'
		},
		_type: {
			type: require('./element.schema'),
			description: 'Action  to take - permit or deny - when the exception conditions are met.'
		},
		period: {
			type: require('./period.schema'),
			description: 'The timeframe in this exception is valid.'
		},
		actor: {
			type: new GraphQLList(require('./consentexceptactor.schema')),
			description: 'Who or what is controlled by this Exception. Use group to identify a set of actors by some property they share (e.g. \'admitting officers\').'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/consent-action
		action: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Actions controlled by this Exception.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/security-labels
		securityLabel: {
			type: new GraphQLList(require('./coding.schema')),
			description: 'A set of security labels that define which resources are controlled by this exception. If more than one label is specified, all resources must have all the specified labels.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/v3-PurposeOfUse
		purpose: {
			type: new GraphQLList(require('./coding.schema')),
			description: 'The context of the activities a user is taking - why the user is accessing the data - that are controlled by this exception.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/consent-content-class
		class: {
			type: new GraphQLList(require('./coding.schema')),
			description: 'The class of information covered by this exception. The type can be a FHIR resource type, a profile on a type, or a CDA document, or some other type that indicates what sort of information the consent relates to.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/consent-content-code
		code: {
			type: new GraphQLList(require('./coding.schema')),
			description: 'If this code is found in an instance, then the exception applies.'
		},
		dataPeriod: {
			type: require('./period.schema'),
			description: 'Clinical or Operational Relevant period of time that bounds the data controlled by this exception.'
		},
		data: {
			type: new GraphQLList(require('./consentexceptdata.schema')),
			description: 'The resources controlled by this exception, if specific resources are referenced.'
		}
	})
});

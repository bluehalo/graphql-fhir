const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

let DiagnosticOrderResourceType = new GraphQLEnumType({
	name: 'DiagnosticOrderResourceType',
	values: {
		DiagnosticOrder: { value: 'DiagnosticOrder' }
	}
});

/**
 * @name exports
 * @summary DiagnosticOrder Schema
 */
module.exports = new GraphQLObjectType({
	name: 'DiagnosticOrder',
	description: 'Base StructureDefinition for DiagnosticOrder Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(DiagnosticOrderResourceType),
			description: 'Type of this resource'
		},
		subject: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'Who or what the investigation is to be performed on. This is usually a human patient, but diagnostic tests can also be requested on animals, groups of humans or animals, devices such as dialysis machines, or even locations (typically for environmental scans).'
		},
		orderer: {
			type: require('./reference.schema'),
			description: 'The practitioner that holds legal responsibility for ordering the investigation.'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'Identifiers assigned to this order instance by the orderer and/or  the receiver and/or order fulfiller.'
		},
		encounter: {
			type: require('./reference.schema'),
			description: 'An encounter that provides additional information about the healthcare context in which this request is made.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/condition-code
		reason: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'An explanation or justification for why this diagnostic investigation is being requested.   This is often for billing purposes.  May relate to the resources referred to in supportingInformation.'
		},
		supportingInformation: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'Additional clinical information about the patient or specimen that may influence test interpretations.  This includes observations explicitly requested by the producer(filler) to provide context or supporting information needed to complete the order.'
		},
		specimen: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'One or more specimens that the diagnostic investigation is about.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/diagnostic-order-status
		status: {
			type: CodeScalar,
			description: 'The status of the order.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'The status of the order.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/diagnostic-order-priority
		priority: {
			type: CodeScalar,
			description: 'The clinical priority associated with this order.'
		},
		_priority: {
			type: require('./element.schema'),
			description: 'The clinical priority associated with this order.'
		},
		event: {
			type: new GraphQLList(require('./diagnosticorderevent.schema')),
			description: 'A summary of the events of interest that have occurred as the request is processed; e.g. when the order was made, various processing steps (specimens received), when it was completed.'
		},
		item: {
			type: new GraphQLList(require('./diagnosticorderitem.schema')),
			description: 'The specific diagnostic investigations that are requested as part of this request. Sometimes, there can only be one item per request, but in most contexts, more than one investigation can be requested.'
		},
		note: {
			type: new GraphQLList(require('./annotation.schema')),
			description: 'Any other notes associated with this patient, specimen or order (e.g. \'patient hates needles\').'
		}
	})
});

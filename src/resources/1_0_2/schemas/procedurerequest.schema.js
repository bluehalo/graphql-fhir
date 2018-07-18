const DateTimeScalar = require('../scalars/datetime.scalar');
const CodeScalar = require('../scalars/code.scalar');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLList, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary ProcedureRequest Schema
 */
module.exports = new GraphQLObjectType({
	name: 'ProcedureRequest',
	description: 'Base StructureDefinition for ProcedureRequest Resource.',
	fields: () => extendSchema({
		// TODO: Make enum as this can only be one type
		resourceType: {
			type: new GraphQLNonNull(GraphQLString),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'Identifiers assigned to this order by the order or by the receiver.'
		},
		subject: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'The person, animal or group that should receive the procedure.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/procedure-code
		code: {
			type: new GraphQLNonNull(require('./codeableconcept.schema')),
			description: 'The specific procedure that is ordered. Use text if the exact nature of the procedure cannot be coded.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/body-site
		bodySite: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'Indicates the sites on the subject\'s body where the procedure should be performed (I.e. the target sites).'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/procedure-reason
		reasonCodeableConcept: {
			type: require('./codeableconcept.schema'),
			description: 'The reason why the procedure is being proposed or ordered. This procedure request may be motivated by a Condition for instance.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/procedure-reason
		reasonReference: {
			type: require('./reference.schema'),
			description: 'The reason why the procedure is being proposed or ordered. This procedure request may be motivated by a Condition for instance.'
		},
		scheduledDateTime: {
			type: DateTimeScalar,
			description: 'The timing schedule for the proposed or ordered procedure. The Schedule data type allows many different expressions.  E.g. \'Every 8 hours\'; \'Three times a day\'; \'1/2 an hour before breakfast for 10 days from 23-Dec 2011:\'; \'15 Oct 2013, 17 Oct 2013 and 1 Nov 2013\'.'
		},
		_scheduledDateTime: {
			type: require('./element.schema'),
			description: 'The timing schedule for the proposed or ordered procedure. The Schedule data type allows many different expressions.  E.g. \'Every 8 hours\'; \'Three times a day\'; \'1/2 an hour before breakfast for 10 days from 23-Dec 2011:\'; \'15 Oct 2013, 17 Oct 2013 and 1 Nov 2013\'.'
		},
		scheduledPeriod: {
			type: require('./period.schema'),
			description: 'The timing schedule for the proposed or ordered procedure. The Schedule data type allows many different expressions.  E.g. \'Every 8 hours\'; \'Three times a day\'; \'1/2 an hour before breakfast for 10 days from 23-Dec 2011:\'; \'15 Oct 2013, 17 Oct 2013 and 1 Nov 2013\'.'
		},
		scheduledTiming: {
			type: require('./timing.schema'),
			description: 'The timing schedule for the proposed or ordered procedure. The Schedule data type allows many different expressions.  E.g. \'Every 8 hours\'; \'Three times a day\'; \'1/2 an hour before breakfast for 10 days from 23-Dec 2011:\'; \'15 Oct 2013, 17 Oct 2013 and 1 Nov 2013\'.'
		},
		encounter: {
			type: require('./reference.schema'),
			description: 'The encounter within which the procedure proposal or request was created.'
		},
		performer: {
			type: require('./reference.schema'),
			description: 'For example, the surgeon, anaethetist, endoscopist, etc.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/procedure-request-status
		status: {
			type: CodeScalar,
			description: 'The status of the order.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'The status of the order.'
		},
		notes: {
			type: new GraphQLList(require('./annotation.schema')),
			description: 'Any other notes associated with this proposal or order - e.g. provider instructions.'
		},
		asNeededBoolean: {
			type: GraphQLBoolean,
			description: 'If a CodeableConcept is present, it indicates the pre-condition for performing the procedure.'
		},
		_asNeededBoolean: {
			type: require('./element.schema'),
			description: 'If a CodeableConcept is present, it indicates the pre-condition for performing the procedure.'
		},
		asNeededCodeableConcept: {
			type: require('./codeableconcept.schema'),
			description: 'If a CodeableConcept is present, it indicates the pre-condition for performing the procedure.'
		},
		orderedOn: {
			type: DateTimeScalar,
			description: 'The time when the request was made.'
		},
		_orderedOn: {
			type: require('./element.schema'),
			description: 'The time when the request was made.'
		},
		orderer: {
			type: require('./reference.schema'),
			description: 'The healthcare professional responsible for proposing or ordering the procedure.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/procedure-request-priority
		priority: {
			type: CodeScalar,
			description: 'The clinical priority associated with this order.'
		},
		_priority: {
			type: require('./element.schema'),
			description: 'The clinical priority associated with this order.'
		}
	})
});

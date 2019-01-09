const {
	GraphQLString,
	GraphQLList,
	GraphQLUnionType,
	GraphQLObjectType,
} = require('graphql');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary Specimencollection Schema
 */
module.exports = new GraphQLObjectType({
	name: 'Specimencollection',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.schema.js'),
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.  Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
		},
		collector: {
			type: new GraphQLUnionType({
				name: 'Specimencollectioncollector_collector_Union',
				description: 'Person who collected the specimen.',
				types: () => [
					require('./practitioner.schema.js'),
					require('./practitionerrole.schema.js'),
				],
				resolveType(data) {
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
					}
					if (data && data.resourceType === 'PractitionerRole') {
						return require('./practitionerrole.schema.js');
					}
				},
			}),
			description: 'Person who collected the specimen.',
		},
		_collectedDateTime: {
			type: require('./element.schema.js'),
			description:
				'Time when specimen was collected from subject - the physiologically relevant time.',
		},
		collectedDateTime: {
			type: DateTimeScalar,
			description:
				'Time when specimen was collected from subject - the physiologically relevant time.',
		},
		collectedPeriod: {
			type: require('./period.schema.js'),
			description:
				'Time when specimen was collected from subject - the physiologically relevant time.',
		},
		duration: {
			type: require('./duration.schema.js'),
			description:
				'The span of time over which the collection of a specimen occurred.',
		},
		quantity: {
			type: require('./quantity.schema.js'),
			description:
				'The quantity of specimen collected; for instance the volume of a blood sample, or the physical measurement of an anatomic pathology sample.',
		},
		method: {
			type: require('./codeableconcept.schema.js'),
			description:
				'A coded value specifying the technique that is used to perform the procedure.',
		},
		bodySite: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Anatomical location from which the specimen was collected (if subject is a patient). This is the target site.  This element is not used for environmental specimens.',
		},
		fastingStatusCodeableConcept: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Abstinence or reduction from some or all food, drink, or both, for a period of time prior to sample collection.',
		},
		fastingStatusDuration: {
			type: require('./duration.schema.js'),
			description:
				'Abstinence or reduction from some or all food, drink, or both, for a period of time prior to sample collection.',
		},
	}),
});

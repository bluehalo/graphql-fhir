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
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.schema.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		collector: {
			type: new GraphQLUnionType({
				name: 'Specimencollectioncollector_collector_Union',
				description: 'Person who collected the specimen.',
				types: () => [require('./practitioner.schema.js')],
				resolveType(data) {
					if (data && data.resourceType === 'Practitioner') {
						return require('./practitioner.schema.js');
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
		quantity: {
			type: require('./quantity.schema.js'),
			description:
				'The quantity of specimen collected; for instance the volume of a blood sample, or the physical measurement of an anatomic pathology sample.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/specimen-collection-method
		method: {
			type: require('./codeableconcept.schema.js'),
			description:
				'A coded value specifying the technique that is used to perform the procedure.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/body-site
		bodySite: {
			type: require('./codeableconcept.schema.js'),
			description:
				'Anatomical location from which the specimen was collected (if subject is a patient). This is the target site.  This element is not used for environmental specimens.',
		},
	}),
});

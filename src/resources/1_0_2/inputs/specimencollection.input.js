const {
	GraphQLList,
	GraphQLString,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const DateTimeScalar = require('../scalars/datetime.scalar.js');

/**
 * @name exports
 * @summary Specimencollection Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Specimencollection_Input',
	description: '',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references).',
		},
		id: {
			type: IdScalar,
			description:
				'unique id for the element within a resource (for internal references).',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		collector: {
			type: GraphQLString,
			description: 'Person who collected the specimen.',
		},
		_comment: {
			type: require('./element.input.js'),
			description:
				'To communicate any details or issues encountered during the specimen collection procedure.',
		},
		comment: {
			type: new GraphQLList(GraphQLString),
			description:
				'To communicate any details or issues encountered during the specimen collection procedure.',
		},
		_collectedDateTime: {
			type: require('./element.input.js'),
			description:
				'Time when specimen was collected from subject - the physiologically relevant time.',
		},
		collectedDateTime: {
			type: DateTimeScalar,
			description:
				'Time when specimen was collected from subject - the physiologically relevant time.',
		},
		collectedPeriod: {
			type: require('./period.input.js'),
			description:
				'Time when specimen was collected from subject - the physiologically relevant time.',
		},
		quantity: {
			type: require('./quantity.input.js'),
			description:
				'The quantity of specimen collected; for instance the volume of a blood sample, or the physical measurement of an anatomic pathology sample.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/specimen-collection-method
		method: {
			type: require('./codeableconcept.input.js'),
			description:
				'A coded value specifying the technique that is used to perform the procedure.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/body-site
		bodySite: {
			type: require('./codeableconcept.input.js'),
			description:
				'Anatomical location from which the specimen was collected (if subject is a patient). This is the target site.  This element is not used for environmental specimens.',
		},
	}),
});

const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

/**
 * @name exports
 * @summary SpecimenCollection Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'SpecimenCollection_Input',
	description: 'Details concerning the specimen collection.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		collector: {
			type: require('./reference.input'),
			description: 'Person who collected the specimen.'
		},
		collectedDateTime: {
			type: DateTimeScalar,
			description: 'Time when specimen was collected from subject - the physiologically relevant time.'
		},
		_collectedDateTime: {
			type: require('./element.input'),
			description: 'Time when specimen was collected from subject - the physiologically relevant time.'
		},
		collectedPeriod: {
			type: require('./period.input'),
			description: 'Time when specimen was collected from subject - the physiologically relevant time.'
		},
		quantity: {
			type: require('./quantity.input'),
			description: 'The quantity of specimen collected; for instance the volume of a blood sample, or the physical measurement of an anatomic pathology sample.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/specimen-collection-method
		method: {
			type: require('./codeableconcept.input'),
			description: 'A coded value specifying the technique that is used to perform the procedure.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/body-site
		bodySite: {
			type: require('./codeableconcept.input'),
			description: 'Anatomical location from which the specimen was collected (if subject is a patient). This is the target site.  This element is not used for environmental specimens.'
		}
	})
});

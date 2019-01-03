const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLList, GraphQLString } = require('graphql');

const { extendSchema } = require('@asymmetrik/fhir-gql-schema-utils');



/**
 * @name exports
 * @summary Specimen.collection Schema
 */
module.exports = new GraphQLObjectType({
	name: 'SpecimenCollection',
	description: 'Details concerning the specimen collection.',
	fields: () => extendSchema(require('./backboneelement.schema'), {
		collector: {
			type: require('./reference.schema'),
			description: 'Person who collected the specimen.'
		},
		comment: {
			type: new GraphQLList(GraphQLString),
			description: 'To communicate any details or issues encountered during the specimen collection procedure.'
		},
		_comment: {
			type: require('./element.schema'),
			description: 'To communicate any details or issues encountered during the specimen collection procedure.'
		},
		collectedDateTime: {
			type: DateTimeScalar,
			description: 'Time when specimen was collected from subject - the physiologically relevant time.'
		},
		_collectedDateTime: {
			type: require('./element.schema'),
			description: 'Time when specimen was collected from subject - the physiologically relevant time.'
		},
		collectedPeriod: {
			type: require('./period.schema'),
			description: 'Time when specimen was collected from subject - the physiologically relevant time.'
		},
		quantity: {
			type: require('./quantity.schema'),
			description: 'The quantity of specimen collected; for instance the volume of a blood sample, or the physical measurement of an anatomic pathology sample.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/specimen-collection-method
		method: {
			type: require('./codeableconcept.schema'),
			description: 'A coded value specifying the technique that is used to perform the procedure.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/body-site
		bodySite: {
			type: require('./codeableconcept.schema'),
			description: 'Anatomical location from which the specimen was collected (if subject is a patient). This is the target site.  This element is not used for environmental specimens.'
		}
	})
});

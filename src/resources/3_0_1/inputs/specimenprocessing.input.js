const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLInputObjectType, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');



/**
 * @name exports
 * @summary SpecimenProcessing Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'SpecimenProcessing_Input',
	description: 'Details concerning processing and processing steps for the specimen.',
	fields: () => extendSchema(require('./backboneelement.input'), {
		description: {
			type: GraphQLString,
			description: 'Textual description of procedure.'
		},
		_description: {
			type: require('./element.input'),
			description: 'Textual description of procedure.'
		},
		// ValueSetReference: http://hl7.org/fhir/ValueSet/specimen-processing-procedure
		procedure: {
			type: require('./codeableconcept.input'),
			description: 'A coded value specifying the procedure used to process the specimen.'
		},
		additive: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Material used in the processing step.'
		},
		timeDateTime: {
			type: DateTimeScalar,
			description: 'A record of the time or period when the specimen processing occurred.  For example the time of sample fixation or the period of time the sample was in formalin.'
		},
		_timeDateTime: {
			type: require('./element.input'),
			description: 'A record of the time or period when the specimen processing occurred.  For example the time of sample fixation or the period of time the sample was in formalin.'
		},
		timePeriod: {
			type: require('./period.input'),
			description: 'A record of the time or period when the specimen processing occurred.  For example the time of sample fixation or the period of time the sample was in formalin.'
		}
	})
});

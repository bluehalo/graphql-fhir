const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const { GraphQLObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList, GraphQLBoolean } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

// TODO: Verify this is the correct resourceType
let MedicationAdministrationResourceType = new GraphQLEnumType({
	name: 'MedicationAdministrationResourceType',
	values: {
		MedicationAdministration: { value: 'MedicationAdministration' }
	}
});

/**
 * @name exports
 * @summary MedicationAdministration Schema
 */
module.exports = new GraphQLObjectType({
	name: 'MedicationAdministration',
	description: 'Base StructureDefinition for MedicationAdministration Resource.',
	fields: () => extendSchema(require('./domainresource.schema'), {
		resourceType: {
			type: new GraphQLNonNull(MedicationAdministrationResourceType),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.schema')),
			description: 'External identifier - FHIR will generate its own internal identifiers (probably URLs) which do not need to be explicitly managed by the resource.  The identifier here is one that would be used by another non-FHIR system - for example an automated medication pump would provide a record each time it operated; an administration while the patient was off the ward might be made with a different system and entered after the event.  Particularly important if these records have to be updated.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/medication-admin-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'Will generally be set to show that the administration has been completed.  For some long running administrations such as infusions it is possible for an administration to be started but not completed or it may be paused while some other process is under way.'
		},
		_status: {
			type: require('./element.schema'),
			description: 'Will generally be set to show that the administration has been completed.  For some long running administrations such as infusions it is possible for an administration to be started but not completed or it may be paused while some other process is under way.'
		},
		patient: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'The person or animal receiving the medication.'
		},
		practitioner: {
			type: require('./reference.schema'),
			description: 'The individual who was responsible for giving the medication to the patient.'
		},
		encounter: {
			type: require('./reference.schema'),
			description: 'The visit, admission or other contact between patient and health care provider the medication administration was performed as part of.'
		},
		prescription: {
			type: require('./reference.schema'),
			description: 'The original request, instruction or authority to perform the administration.'
		},
		wasNotGiven: {
			type: GraphQLBoolean,
			description: 'Set this to true if the record is saying that the medication was NOT administered.'
		},
		_wasNotGiven: {
			type: require('./element.schema'),
			description: 'Set this to true if the record is saying that the medication was NOT administered.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/reason-medication-not-given-codes
		reasonNotGiven: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'A code indicating why the administration was not performed.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/reason-medication-given-codes
		reasonGiven: {
			type: new GraphQLList(require('./codeableconcept.schema')),
			description: 'A code indicating why the medication was given.'
		},
		effectiveTimeDateTime: {
			type: new GraphQLNonNull(DateTimeScalar),
			description: 'A specific date/time or interval of time during which the administration took place (or did not take place, when the \'notGiven\' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate.'
		},
		_effectiveTimeDateTime: {
			type: require('./element.schema'),
			description: 'A specific date/time or interval of time during which the administration took place (or did not take place, when the \'notGiven\' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate.'
		},
		effectiveTimePeriod: {
			type: new GraphQLNonNull(require('./period.schema')),
			description: 'A specific date/time or interval of time during which the administration took place (or did not take place, when the \'notGiven\' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate.'
		},
		medicationCodeableConcept: {
			type: new GraphQLNonNull(require('./codeableconcept.schema')),
			description: 'Identifies the medication that was administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.'
		},
		medicationReference: {
			type: new GraphQLNonNull(require('./reference.schema')),
			description: 'Identifies the medication that was administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications.'
		},
		device: {
			type: new GraphQLList(require('./reference.schema')),
			description: 'The device used in administering the medication to the patient.  For example, a particular infusion pump.'
		},
		note: {
			type: GraphQLString,
			description: 'Extra information about the medication administration that is not conveyed by the other attributes.'
		},
		_note: {
			type: require('./element.schema'),
			description: 'Extra information about the medication administration that is not conveyed by the other attributes.'
		},
		dosage: {
			type: require('./medicationadministrationdosage.schema'),
			description: 'Describes the medication dosage information details e.g. dose, rate, site, route, etc.'
		}
	})
});

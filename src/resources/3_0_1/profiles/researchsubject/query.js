// Schemas
const ResearchSubjectSchema = require('../../schemas/researchsubject.schema');
const BundleSchema = require('../../schemas/bundle.schema');

// Arguments
const ResearchSubjectArgs = require('../../parameters/researchsubject.parameters');
const CommonArgs = require('../../parameters/common.parameters');

// Resolvers
const {
	researchsubjectResolver,
	researchsubjectListResolver,
	researchsubjectInstanceResolver,
} = require('./resolver');

// Scope Utilities
const { scopeInvariant } = require('../../../../utils/scope.utils');

let scopeOptions = {
	name: 'ResearchSubject',
	action: 'read',
	version: '3_0_1',
};

/**
 * @name exports.ResearchSubjectQuery
 * @summary ResearchSubject Query.
 */
module.exports.ResearchSubjectQuery = {
	args: Object.assign({}, CommonArgs, ResearchSubjectArgs),
	description: 'Query for a single ResearchSubject',
	resolve: scopeInvariant(scopeOptions, researchsubjectResolver),
	type: ResearchSubjectSchema,
};

/**
 * @name exports.ResearchSubjectListQuery
 * @summary ResearchSubjectList Query.
 */
module.exports.ResearchSubjectListQuery = {
	args: Object.assign({}, CommonArgs, ResearchSubjectArgs),
	description: 'Query for multiple ResearchSubjects',
	resolve: scopeInvariant(scopeOptions, researchsubjectListResolver),
	type: BundleSchema,
};

/**
 * @name exports.ResearchSubjectInstanceQuery
 * @summary ResearchSubjectInstance Query.
 */
module.exports.ResearchSubjectInstanceQuery = {
	description: 'Get information about a single ResearchSubject',
	resolve: scopeInvariant(scopeOptions, researchsubjectInstanceResolver),
	type: ResearchSubjectSchema,
};

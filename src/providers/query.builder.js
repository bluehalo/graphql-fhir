const moment = require('moment-timezone');

module.exports.buildR4SearchQuery = (resource_name, args) => {
    // Common search params
    let {id} = args;
    let patient = args['patient'];
    let practitioner = args['practitioner'];
    let organization = args['organization'];
    let location = args['location'];
    let healthcareService = args['healthcareService'];
    let name = args['name'];
    let family = args['family'];
    let address = args['address'];
    let address_city = args['address-city'];
    let address_country = args['address-country'];
    let addressPostalCode = args['address-postalcode'];
    let address_state = args['address-state'];
    let identifier = args['identifier'];
    let gender = args['gender'];
    let email = args['email'];
    let phone = args['phone'];
    let source = args['source'];
    let versionId = args['versionId'];
    let lastUpdated = args['_lastUpdated']; // _lastUpdated=gt2010-10-01
    let security = args['_security'];
    let tag = args['_tag'];
    let active = args['active'];
    let query = {};
    let and_segments = [];

    if (id) {
        // see if this is an array
        if (id.includes(',')) {
            const id_list = id.split(',');
            query.id = {
                $in: id_list
            };
        } else {
            query.id = id;
        }
    }

    if (source) {
        query['meta.source'] = stringQueryBuilder(source);
    }

    if (versionId) {
        query['meta.versionId'] = versionId;
    }

    if (lastUpdated) {
        logInfo('meta.lastUpdated:' + lastUpdated);
        if (Array.isArray(lastUpdated)) {
            for (const lastUpdatedItem of lastUpdated) {
                and_segments.push({'meta.lastUpdated': dateQueryBuilder(lastUpdatedItem, 'instant', '')});
            }
        } else {
            query['meta.lastUpdated'] = dateQueryBuilder(lastUpdated, 'instant', '');
        }
    }
    if (patient || args['patient:missing']) {
        const patient_reference = 'Patient/' + patient;
        /**
         * @type {?boolean}
         */
        let patient_exists_flag = null;
        if (args['patient:missing']) {
            patient_exists_flag = !isTrue(args['patient:missing']);
        }
        // each Resource type has a different place to put the patient info
        if (['Patient'].includes(resource_name)) {
            query.id = patient;
        } else if (['AllergyIntolerance', 'Immunization', 'RelatedPerson', 'Device', 'ExplanationOfBenefit', 'Claim'].includes(resource_name)) {
            and_segments.push(referenceQueryBuilder(patient_reference, 'patient.reference', patient_exists_flag));
        } else if (['Appointment'].includes(resource_name)) {
            //TODO: participant is a list
            and_segments.push(referenceQueryBuilder(patient_reference, 'participant.actor.reference', patient_exists_flag));
        } else if (['CarePlan',
            'Condition',
            'DocumentReference',
            'Encounter',
            'MedicationRequest',
            'Observation',
            'Procedure',
            'ServiceRequest',
            'CareTeam',
            'QuestionnaireResponse'].includes(resource_name)) {
            and_segments.push(referenceQueryBuilder(patient_reference, 'subject.reference', patient_exists_flag));
        } else if (['Coverage'].includes(resource_name)) {
            and_segments.push(referenceQueryBuilder(patient_reference, 'beneficiary.reference', patient_exists_flag));
        } else {
            logger.error(`No mapping for searching by patient for ${resource_name}: `);
        }
    }
    if (practitioner || args['practitioner:missing']) {
        const practitioner_reference = 'Practitioner/' + practitioner;
        /**
         * @type {?boolean}
         */
        let practitioner_exists_flag = null;
        if (args['practitioner:missing']) {
            practitioner_exists_flag = !isTrue(args['practitioner:missing']);
        }

        // each Resource type has a different place to put the patient info
        if (['Practitioner'].includes(resource_name)) {
            query.id = practitioner;
        } else if (['PractitionerRole'].includes(resource_name)) {
            and_segments.push(referenceQueryBuilder(practitioner_reference, 'practitioner.reference', practitioner_exists_flag));
        } else {
            logger.error(`No mapping for searching by practitioner for ${resource_name}: `);
        }
    }
    if (organization || args['organization:missing']) {
        const organization_reference = 'Organization/' + organization;
        /**
         * @type {?boolean}
         */
        let organization_exists_flag = null;
        if (args['organization:missing']) {
            organization_exists_flag = !isTrue(args['organization:missing']);
        }

        // each Resource type has a different place to put the patient info
        if (['Organization'].includes(resource_name)) {
            query.id = organization;
        } else if (['HealthcareService'].includes(resource_name)) {
            and_segments.push(referenceQueryBuilder(organization_reference, 'providedBy.reference', organization_exists_flag));
        } else if (['InsurancePlan'].includes(resource_name)) {
            and_segments.push(referenceQueryBuilder(organization_reference, 'ownedBy.reference', organization_exists_flag));
        } else if (['PractitionerRole'].includes(resource_name)) {
            and_segments.push(referenceQueryBuilder(organization_reference, 'organization.reference', organization_exists_flag));
        } else {
            logger.error(`No mapping for searching by organization for ${resource_name}: `);
        }
    }
    if (location || args['location:missing']) {
        const location_reference = 'Location/' + location;
        /**
         * @type {?boolean}
         */
        let location_exists_flag = null;
        if (args['location:missing']) {
            location_exists_flag = !isTrue(args['location:missing']);
        }

        // each Resource type has a different place to put the patient info
        if (['Location'].includes(resource_name)) {
            query.id = location;
        } else if (['PractitionerRole'].includes(resource_name)) {
            and_segments.push(referenceQueryBuilder(location_reference, 'location.reference', location_exists_flag));
        } else {
            logger.error(`No mapping for searching by location for ${resource_name}: `);
        }
    }
    if (healthcareService || args['healthcareService:missing']) {
        const healthcareService_reference = 'HealthcareService/' + healthcareService;
        /**
         * @type {?boolean}
         */
        let healthcareService_exists_flag = null;
        if (args['healthcareService:missing']) {
            healthcareService_exists_flag = !isTrue(args['healthcareService:missing']);
        }

        // each Resource type has a different place to put the patient info
        if (['HealthcareService'].includes(resource_name)) {
            query.id = healthcareService;
        } else if (['PractitionerRole'].includes(resource_name)) {
            and_segments.push(referenceQueryBuilder(healthcareService_reference, 'healthcareService.reference', healthcareService_exists_flag));
        } else {
            logger.error(`No mapping for searching by healthcareService for ${resource_name}: `);
        }
    }
    if (name) {
        if (['Practitioner'].includes(resource_name)) {
            if (name) {
                let orsName = nameQueryBuilder(name);
                for (let i = 0; i < orsName.length; i++) {
                    and_segments.push(orsName[`${i}`]);
                }
            }
        } else {
            query['name'] = stringQueryBuilder(name);
        }
    }
    if (family) {
        query['name.family'] = stringQueryBuilder(family);
    }

    if (address) {
        let orsAddress = addressQueryBuilder(address);
        for (let i = 0; i < orsAddress.length; i++) {
            and_segments.push(orsAddress[`${i}`]);
        }
    }

    if (address_city) {
        query['address.city'] = stringQueryBuilder(address_city);
    }

    if (address_country) {
        query['address.country'] = stringQueryBuilder(address_country);
    }

    if (addressPostalCode) {
        query['address.postalCode'] = stringQueryBuilder(addressPostalCode);
    }

    if (address_state) {
        query['address.state'] = stringQueryBuilder(address_state);
    }

    if (identifier) {
        let queryBuilder = tokenQueryBuilder(identifier, 'value', 'identifier', '');
        /**
         * @type {string}
         */
        for (let i in queryBuilder) {
            // noinspection JSUnfilteredForInLoop
            query[`${i}`] = queryBuilder[`${i}`];
        }
    }
    if (security) {
        let queryBuilder = tokenQueryBuilder(security, 'code', 'meta.security', '');
        /**
         * @type {string}
         */
        for (let i in queryBuilder) {
            // noinspection JSUnfilteredForInLoop
            query[`${i}`] = queryBuilder[`${i}`];
        }
    }
    if (tag) {
        let queryBuilder = tokenQueryBuilder(tag, 'code', 'meta.tag', '');
        /**
         * @type {string}
         */
        for (let i in queryBuilder) {
            // noinspection JSUnfilteredForInLoop
            query[`${i}`] = queryBuilder[`${i}`];
        }
    }
    if (active) {
        query.active = active === 'true';
    }

    if (gender) {
        query.gender = gender;
    }

    // Forces system = 'email'
    if (email) {
        let queryBuilder = tokenQueryBuilder(email, 'value', 'telecom', 'email');
        for (let i in queryBuilder) {
            // noinspection JSUnfilteredForInLoop
            query[`${i}`] = queryBuilder[`${i}`];
        }
    }

    // Forces system = 'phone'
    if (phone) {
        let queryBuilder = tokenQueryBuilder(phone, 'value', 'telecom', 'phone');
        for (let i in queryBuilder) {
            // noinspection JSUnfilteredForInLoop
            query[`${i}`] = queryBuilder[`${i}`];
        }
    }

    if (and_segments.length !== 0) {
        query.$and = and_segments;
    }
    return query;
};

module.exports.buildDstu2SearchQuery  = (args) => {
    let {id} = args;
    let active = args['active'];
    let query = {};
    if (id) {
        query.id = id;
    }

    if (active) {
        query.active = active === 'true';
    }
    return query;
}


module.exports.buildStu3SearchQuery = (resource_name, args) => {
    let {id} = args;
    let active = args['active'];
    let query = {};

    if (id) {
        query.id = id;
    }

    if (active) {
        query.active = active === 'true';
    }
    return query;
}

/**
 * @name stringQueryBuilder
 * @description builds mongo default query for string inputs, no modifiers
 * @param {string} target what we are querying for
 * @return a mongo regex query
 */
 let stringQueryBuilder = function (target) {
    // noinspection RegExpDuplicateCharacterInClass
    const t2 = target.replace(/[\\(\\)\\-\\_\\+\\=\\/\\.]/g, '\\$&');
    // eslint-disable-next-line security/detect-non-literal-regexp
    return {$regex: new RegExp('^' + t2, 'i')};
};

/**
 * @name tokenQueryBuilder
 * @param {string} target what we are searching for
 * @param {string} type codeable concepts use a code field and identifiers use a value
 * @param {string} field path to system and value from field
 * @param {string} required the required system if specified
 * @return {JSON} queryBuilder
 * Using to assign a single variable:
 *      let queryBuilder = tokenQueryBuilder(identifier, 'value', 'identifier');
 for (let i in queryBuilder) {
			 query[i] = queryBuilder[i];
		}
 * Use in an or query
 *      query.$or = [tokenQueryBuilder(identifier, 'value', 'identifier'), tokenQueryBuilder(type, 'code', 'type.coding')];
 */
let tokenQueryBuilder = function (target, type, field, required) {
    let queryBuilder = {};
    let system = '';
    let value;

    if (target.includes('|')) {
        [system, value] = target.split('|');

        if (required) {
            system = required;
        }
    } else {
        value = target;
    }

    if (system) {
        queryBuilder[`${field}.system`] = system;
    }
    if (value) {
        queryBuilder[`${field}.${type}`] = value;
    }

    return queryBuilder;
};

/**
 * @name nameQueryBuilder
 * @description brute force method of matching human names. Splits the input and checks to see if every piece matches to
 * at least 1 part of the name field using regexs. Ignores case
 * @param {string} target
 * @return {array} ors
 */
 let nameQueryBuilder = function (target) {
    let split = target.split(/[\s.,]+/);
    let ors = [];

    for (let i in split) {
        ors.push({
            $or: [
                // eslint-disable-next-line security/detect-non-literal-regexp
                {'name.text': {$regex: new RegExp(`${split[`${i}`]}`, 'i')}},
                // eslint-disable-next-line security/detect-non-literal-regexp
                {'name.family': {$regex: new RegExp(`${split[`${i}`]}`, 'i')}},
                // eslint-disable-next-line security/detect-non-literal-regexp
                {'name.given': {$regex: new RegExp(`${split[`${i}`]}`, 'i')}},
                // eslint-disable-next-line security/detect-non-literal-regexp
                {'name.suffix': {$regex: new RegExp(`${split[`${i}`]}`, 'i')}},
                // eslint-disable-next-line security/detect-non-literal-regexp
                {'name.prefix': {$regex: new RegExp(`${split[`${i}`]}`, 'i')}},
            ],
        });
    }
    return ors;
};

/**
 * @name referenceQueryBuilder
 * @param {string} target
 * @param {string} field
 * @param {?boolean} exists_flag
 * @return {JSON} queryBuilder
 */
 let referenceQueryBuilder = function (target, field, exists_flag) {
    let queryBuilder = {};
    // noinspection JSIncompatibleTypesComparison
    if (target === null || exists_flag === false) {
        queryBuilder[`${field}`] = {$exists: false};
        return queryBuilder;
    }
    if (exists_flag === true) {
        queryBuilder[`${field}`] = {$exists: true};
        return queryBuilder;
    }
    // eslint-disable-next-line security/detect-unsafe-regex
    const regex = /http(.*)?\/(\w+\/.+)$/;
    const match = target.match(regex);

    // Check if target is a url
    if (match) {
        queryBuilder[`${field}`] = match[2];
    }
    // target = type/id
    else if (target.includes('/')) {
        let [type, id] = target.split('/');
        queryBuilder[`${field}`] = `${type}/${id}`;
    }
    // target = id The type may be there so we need to check the end of the field for the id
    else {
        // eslint-disable-next-line security/detect-non-literal-regexp
        queryBuilder[`${field}`] = {$regex: new RegExp(`${target}$`)};
    }

    return queryBuilder;
};

/**
 * @name addressQueryBuilder
 * @description brute force method of matching addresses. Splits the input and checks to see if every piece matches to
 * at least 1 part of the address field using regexs. Ignores case
 * @param {string} target
 * @return {array} ors
 */
 let addressQueryBuilder = function (target) {
    // Tokenize the input as mush as possible
    let totalSplit = target.split(/[\s,]+/);
    let ors = [];
    for (let index in totalSplit) {
        ors.push({
            $or: [
                // eslint-disable-next-line security/detect-non-literal-regexp
                {'address.line': {$regex: new RegExp(`${totalSplit[`${index}`]}`, 'i')}},
                // eslint-disable-next-line security/detect-non-literal-regexp
                {'address.city': {$regex: new RegExp(`${totalSplit[`${index}`]}`, 'i')}},
                // eslint-disable-next-line security/detect-non-literal-regexp
                {'address.district': {$regex: new RegExp(`${totalSplit[`${index}`]}`, 'i')}},
                // eslint-disable-next-line security/detect-non-literal-regexp
                {'address.state': {$regex: new RegExp(`${totalSplit[`${index}`]}`, 'i')}},
                // eslint-disable-next-line security/detect-non-literal-regexp
                {'address.postalCode': {$regex: new RegExp(`${totalSplit[`${index}`]}`, 'i')}},
                // eslint-disable-next-line security/detect-non-literal-regexp
                {'address.country': {$regex: new RegExp(`${totalSplit[`${index}`]}`, 'i')}},
            ],
        });
    }
    return ors;
};

let dateQueryBuilder = function (date, type, path) {
    // noinspection RegExpSingleCharAlternation
    // eslint-disable-next-line security/detect-unsafe-regex
    let regex = /^(\D{2})?(\d{4})(-\d{2})?(-\d{2})?(?:(T\d{2}:\d{2})(:\d{2})?)?(Z|(\+|-)(\d{2}):(\d{2}))?$/;
    let match = date.match(regex);
    let str = '';
    let toRet = [];
    let pArr = []; //will have other possibilities such as just year, just year and month, etc
    let prefix = '$eq';
    if (match && match.length >= 1) {
        if (match[1]) {
            // replace prefix with mongo specific comparators
            prefix = '$' + match[1].replace('ge', 'gte').replace('le', 'lte');
        }
        if (type === 'date') {
            //if its just a date, we don't have to worry about time components
            //add parts of date that are available
            for (let i = 2; i < 5; i++) {
                //add up the date parts in a string
                if (match[`${i}`]) {
                    str = str + match[`${i}`];
                    pArr[i - 2] = str + '$';
                }
            }
            if (prefix === '$eq') {

                //below we have to check if the search gave more information than what is actually stored
                return {
                    // eslint-disable-next-line security/detect-non-literal-regexp
                    $regex: new RegExp(
                        '^' + '(?:' + str + ')|(?:' + pArr[0] + ')|(?:' + pArr[1] + ')|(?:' + pArr[2] + ')',
                        'i'
                    ),
                };
            } else {
                return {
                    [prefix]: str
                };
            }
        }

        if (type === 'dateTime' || type === 'instant' || type === 'period' || type === 'timing') {
            //now we have to worry about hours, minutes, seconds, and TIMEZONES
            if (prefix === '$eq') {
                if (match[5]) {
                    //to see if time is included
                    for (let i = 2; i < 6; i++) {
                        str = str + match[`${i}`];
                        if (i === 5) {
                            pArr[i - 2] = str + 'Z?$';
                        } else {
                            pArr[i - 2] = str + '$';
                        }
                    }
                    if (type === 'instant') {
                        if (match[6]) {
                            //to check if seconds were included or not
                            str = str + match[6];
                        }
                    }
                    if (match[9]) {
                        // we know there is a +|-hh:mm at the end
                        let mins;
                        let hrs;
                        if (match[8] === '+') {
                            //time is ahead of UTC so we must subtract
                            let hM = match[5].split(':');
                            hM[0] = hM[0].replace('T', '');
                            mins = Number(hM[1]) - Number(match[10]);
                            hrs = Number(hM[0]) - Number(match[9]);
                            if (mins < 0) {
                                //when we subtract the minutes and go below zero, we need to remove an hour
                                mins = mod(mins, 60);
                                hrs = hrs - 1;
                            }
                            if (hrs < 0) {
                                //when hours goes below zero, we have to adjust the date
                                hrs = mod(hrs, 24);
                                str = getDateFromNum(
                                    getDayNum(
                                        Number(match[2]),
                                        Number(match[3].replace('-', '')),
                                        Number(match[4].replace('-', ''))
                                    ) - 1
                                );
                            } else {
                                str = getDateFromNum(
                                    getDayNum(
                                        Number(match[2]),
                                        Number(match[3].replace('-', '')),
                                        Number(match[4].replace('-', ''))
                                    )
                                );
                            }
                        } else {
                            //time is behind UTC so we add
                            let hM = match[5].split(':');
                            hM[0] = hM[0].replace('T', '');
                            mins = Number(hM[1]) + Number(match[10]);
                            hrs = Number(hM[0]) + Number(match[9]);
                            if (mins > 59) {
                                //if we go above 59, we need to increase hours
                                mins = mod(mins, 60);
                                hrs = hrs + 1;
                            }
                            if (hrs > 23) {
                                //if we go above 23 hours, new day
                                hrs = mod(hrs, 24);
                                str = getDateFromNum(
                                    getDayNum(
                                        Number(match[2]),
                                        Number(match[3].replace('-', '')),
                                        Number(match[4].replace('-', ''))
                                    ) + 1
                                );
                            } else {
                                str = getDateFromNum(
                                    getDayNum(
                                        Number(match[2]),
                                        Number(match[3].replace('-', '')),
                                        Number(match[4].replace('-', ''))
                                    )
                                );
                            }
                        }
                        pArr[5] = str + '$';
                        str = str + 'T' + ('0' + hrs).slice(-2) + ':' + ('0' + mins).slice(-2); //proper formatting for leading 0's
                        // eslint-disable-next-line security/detect-unsafe-regex
                        let match2 = str.match(/^(\d{4})(-\d{2})?(-\d{2})(?:(T\d{2}:\d{2})(:\d{2})?)?/);
                        if (match2 && match2.length >= 1) {
                            pArr[0] = match2[1] + '$'; //YYYY
                            pArr[1] = match2[1] + match2[2] + '$'; //YYYY-MM
                            pArr[2] = match2[1] + match2[2] + match2[3] + '$'; //YYYY-MM-DD
                            pArr[3] =
                                match2[1] +
                                match2[2] +
                                match2[3] +
                                'T' +
                                ('0' + hrs).slice(-2) +
                                ':' +
                                ('0' + mins).slice(-2) +
                                'Z?$';
                        }
                        if (match[6]) {
                            //to check if seconds were included or not
                            pArr[4] = str + ':' + ('0' + match[6]).slice(-2) + 'Z?$';
                            str = str + match[6];
                        }
                        if (!pArr[4]) {
                            //fill empty spots in pArr with ^$ to make sure it can't just match with nothing
                            pArr[4] = '^$';
                        }
                    }
                } else {
                    for (let i = 2; i < 5; i++) {
                        //add up the date parts in a string, done to make sure to update anything if timezone changed anything
                        if (match[`${i}`]) {
                            str = str + match[`${i}`];
                            pArr[i - 2] = str + '$';
                        }
                    }
                }
                let regPoss = {
                    // eslint-disable-next-line security/detect-non-literal-regexp
                    $regex: new RegExp(
                        '^' +
                        '(?:' +
                        pArr[0] +
                        ')|(?:' +
                        pArr[1] +
                        ')|(?:' +
                        pArr[2] +
                        ')|(?:' +
                        pArr[3] +
                        ')|(?:' +
                        pArr[4] +
                        ')'
                    ),
                };
                if (type === 'period') {
                    str = str + 'Z';
                    let pS = path + '.start';
                    let pE = path + '.end';
                    toRet = [
                        {
                            $and: [
                                {[pS]: {$lte: str}},
                                {$or: [{[pE]: {$gte: str}}, {[pE]: regPoss}]},
                            ],
                        },
                        {$and: [{[pS]: {$lte: str}}, {[pE]: undefined}]},
                        {$and: [{$or: [{[pE]: {$gte: str}}, {[pE]: regPoss}]}, {[pS]: undefined}]},
                    ];
                    return toRet;
                }
                let tempFill = pArr.toString().replace(/,/g, ')|(?:') + ')'; //turning the pArr to a string that can be used as a regex
                if (type === 'timing') {
                    let pDT = path + '.event';
                    let pBPS = path + '.repeat.boundsPeriod.start';
                    let pBPE = path + '.repeat.boundsPeriod.end';
                    toRet = [
                        {
                            [pDT]: {
                                // eslint-disable-next-line security/detect-non-literal-regexp
                                $regex: new RegExp(
                                    '^' + '(?:' + str + ')|(?:' + match[0].replace('+', '\\+') + ')|(?:' + tempFill,
                                    'i'
                                ),
                            },
                        },
                        {
                            $and: [
                                {[pBPS]: {$lte: str}},
                                {$or: [{[pBPE]: {$gte: str}}, {[pBPE]: regPoss}]},
                            ],
                        },
                        {$and: [{[pBPS]: {$lte: str}}, {[pBPE]: undefined}]},
                        {
                            $and: [
                                {$or: [{[pBPE]: {$gte: str}}, {[pBPE]: regPoss}]},
                                {[pBPS]: undefined},
                            ],
                        },
                    ];
                    return toRet;
                }
                return {
                    // eslint-disable-next-line security/detect-non-literal-regexp
                    $regex: new RegExp(
                        '^' + '(?:' + str + ')|(?:' + match[0].replace('+', '\\+') + ')|(?:' + tempFill,
                        'i'
                    ),
                };
            } else {
                for (let i = 2; i < 10; i++) {
                    if (match[`${i}`]) {
                        str = str + match[`${i}`];
                    }
                }
                const moment_dt = moment(str);
                // convert to format that mongo uses to store
                const datetime_utc = moment_dt.utc().format('YYYY-MM-DDTHH:mm:ssZ');
                return {
                    [prefix]: datetime_utc
                };
            }
        }
    }
};
//returns a date given the number of days from year 0;
let getDateFromNum = function (days) {
    let year = Math.floor((10000 * days + 14780) / 3652425);
    let day2 =
        days - (365 * year + Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400));
    if (day2 < 0) {
        year = year - 1;
        day2 =
            days - (365 * year + Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400));
    }
    let m1 = Math.floor((100 * day2 + 52) / 3060);
    let month = mod(m1 + 2, 12) + 1;
    year = year + Math.floor((m1 + 2) / 12);
    let rDay = day2 - Math.floor((m1 * 306 + 5) / 10) + 1;
    return year.toString() + '-' + ('0' + month).slice(-2) + '-' + ('0' + rDay).slice(-2);
};

//gives the number of days from year 0, used for adding or subtracting days from a date
let getDayNum = function (year, month, day) {
    month = mod(month + 9, 12);
    year = year - Math.floor(month / 10);
    return (
        365 * year +
        Math.floor(year / 4) -
        Math.floor(year / 100) +
        Math.floor(year / 400) +
        Math.floor((month * 306 + 5) / 10) +
        (day - 1)
    );
};

function mod(n, m) {
    return ((n % m) + m) % m;
}

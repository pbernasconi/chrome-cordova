/****************************************************************
 * Contacts
 */

var contacts = {};

var ContactError = function(err) {
    this.code = (typeof err != 'undefined' ? err : null);
};

ContactError.UNKNOWN_ERROR = 0;
ContactError.INVALID_ARGUMENT_ERROR = 1;
ContactError.TIMEOUT_ERROR = 2;
ContactError.PENDING_OPERATION_ERROR = 3;
ContactError.IO_ERROR = 4;
ContactError.NOT_SUPPORTED_ERROR = 5;
ContactError.PERMISSION_DENIED_ERROR = 20;

var ContactName = function(formatted, familyName, givenName, middle, prefix, suffix) {
    this.formatted = formatted || null;
    this.familyName = familyName || null;
    this.givenName = givenName || null;
    this.middleName = middle || null;
    this.honorificPrefix = prefix || null;
    this.honorificSuffix = suffix || null;
};

var ContactField = function(type, value, pref) {
    this.id = null;
    this.type = (type && type.toString()) || null;
    this.value = (value && value.toString()) || null;
    this.pref = (typeof pref != 'undefined' ? pref : false);
};

var ContactAddress = function(pref, type, formatted, streetAddress, locality, region, postalCode, country) {
    this.id = null;
    this.pref = (typeof pref != 'undefined' ? pref : false);
    this.type = type || null;
    this.formatted = formatted || null;
    this.streetAddress = streetAddress || null;
    this.locality = locality || null;
    this.region = region || null;
    this.postalCode = postalCode || null;
    this.country = country || null;
};

var ContactOrganization = function(pref, type, name, dept, title) {
    this.id = null;
    this.pref = (typeof pref != 'undefined' ? pref : false);
    this.type = type || null;
    this.name = name || null;
    this.department = dept || null;
    this.title = title || null;
};

var Contact = function(id, displayName, name, nickname, phoneNumbers, emails, addresses, ims, organizations, birthday, note, photos, categories, urls) {
    this.id = id || null;
    this.rawId = null;
    this.displayName = displayName || null;
    this.name = name || null; // ContactName
    this.nickname = nickname || null;
    this.phoneNumbers = phoneNumbers || null; // ContactField[]
    this.emails = emails || null; // ContactField[]
    this.addresses = addresses || null; // ContactAddress[]
    this.ims = ims || null; // ContactField[]
    this.organizations = organizations || null; // ContactOrganization[]
    this.birthday = birthday || null;
    this.note = note || null;
    this.photos = photos || null; // ContactField[]
    this.categories = categories || null; // ContactField[]
    this.urls = urls || null; // ContactField[]
};


contacts.fieldType = {
    addresses:      "addresses",
    birthday:       "birthday",
    categories:     "categories",
    country:        "country",
    department:     "department",
    displayName:    "displayName",
    emails:         "emails",
    familyName:     "familyName",
    formatted:      "formatted",
    givenName:      "givenName",
    honorificPrefix: "honorificPrefix",
    honorificSuffix: "honorificSuffix",
    id:             "id",
    ims:            "ims",
    locality:       "locality",
    middleName:     "middleName",
    name:           "name",
    nickname:       "nickname",
    note:           "note",
    organizations:  "organizations",
    phoneNumbers:   "phoneNumbers",
    photos:         "photos",
    postalCode:     "postalCode",
    region:         "region",
    streetAddress:  "streetAddress",
    title:          "title",
    urls:           "urls"
};

contacts.create = function (properties) {

    var contact = {
        id: 0,
        rawId: 0,
        displayName: 'John',
        name: new ContactName(null, 'Doe', 'John'),
        nickname: 'Johnny',
        phoneNumbers: [new ContactField('Number', 12345678)],
        emails: new ContactField('Array', [ 'john@doe.com' ]),
        addresses: new ContactAddress(null, 'home', null, 'Street Address', null, 'South', 12345, 'US'),
        ims: new ContactField(),
        organizations: new ContactOrganization(false, false, 'Organization', 'Department', 'Title'),
        birthday: null,
        note: null,
        photos: new ContactField(),
        categories: new ContactField(),
        urls: new ContactField()
    };

    var params = Object.keys(contact).map(function (data) {
        return contact[data];
    });

    return new (Contact.bind.apply(Contact, params))();
};

contacts.find = function (fields, successCB, errorCB, options) {

    if (!fields.length) {
        return errorCB && errorCB(new ContactError(ContactError.INVALID_ARGUMENT_ERROR));
    }

    options = options || { filter: '', multiple: true };

    console.log('Searching for a contact with fields %s using options %O', fields, options);

    successCB([ this.create() ]);

};

contacts.pickContact = function (successCB, errorCB) {

    if (successCB && typeof successCB === 'function') {
        return successCB(this.create());
    }

    errorCB();
};

window.navigator.contacts = window.navigator.contacts || {};
window.navigator.contacts.create = contacts.create;
window.navigator.contacts.find = contacts.find;
window.navigator.contacts.pickContact = contacts.pickContact;
window.navigator.contacts.fieldType = contacts.fieldType;

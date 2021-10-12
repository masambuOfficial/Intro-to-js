const faker = require('faker');
//Generating random company details. 

const randomSuffixes = faker.company.suffixes();
const randmonCompanyName = faker.company.companyName();
const randomCompanySuffix = faker.company.companySuffix();
const randomcatchPhrase = faker.company.catchPhrase();
const randombs = faker.company.bs();
const randomcatchPhraseAdjective = faker.company.catchPhraseAdjective();
const randomcatchPhraseDescriptor = faker.company.catchPhraseDescriptor();
const randomcatchPhraseNoun = faker.company.catchPhraseNoun();
const randombsAdjective = faker.company.bsAdjective();
const randombsBuzz = faker.company.bsBuzz();
const randombsNoun = faker.company.bsNoun();

const companyData = randomSuffixes + randmonCompanyName + randomCompanySuffix + randomcatchPhrase + randombs + randomcatchPhraseAdjective + randomcatchPhraseDescriptor + randomcatchPhraseNoun + randombsAdjective + randombsBuzz + randombsNoun;

console.log(companyData);
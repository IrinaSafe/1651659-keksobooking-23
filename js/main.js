import {generateOffers} from './data.js';
import {generateCard} from './card.js';

const NUMBERS_OF_OFFERS = 10;

const offers = generateOffers(NUMBERS_OF_OFFERS);
// eslint-disable-next-line no-unused-vars
const testOffer = generateCard(offers[0]);

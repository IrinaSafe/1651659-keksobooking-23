import {generateOffers} from './data.js';
import {addElement} from './card.js';
import './form.js';
import {map} from './form.js';

const NUMBERS_OF_OFFERS = 10;

const offers = generateOffers(NUMBERS_OF_OFFERS);
const [firstOffer] = offers;
const {author, offer} = firstOffer;

addElement(map, author, offer);

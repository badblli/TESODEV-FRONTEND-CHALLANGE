import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const news = [...Array(5)].map(() => ({
    img: faker.image.city(),
    title: 'A Plan to Rebuild the Bus Terminal Everyone Loves to Hate',
    writer: sample([
        'by Troy Corlson',
        'by Busenur Adıbelli',
        'by Emre Çakır',

    ]),
    posted: faker.date.past(),
}));

export default news;
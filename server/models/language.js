import mongoose from 'mongoose';

const languageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    creator: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    subLanguages: {
        type: [Object],
        default: []
    },
});

const Language = new mongoose.model('Language', languageSchema);

export default Language;
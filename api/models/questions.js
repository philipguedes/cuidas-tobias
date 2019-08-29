import mongoose from 'mongoose';

// @ts-ignore
const QuestionSchema = mongoose.Schema({
  description: String,
});

let QuestionModel = mongoose.model('Question', QuestionSchema);

QuestionModel.methods = {

};

export { QuestionModel }
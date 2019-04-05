// issues-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const issues = new Schema({

    productsId: {
      type: Schema.Types.ObjectId,
      ref: 'products',
      required: true
    },
    boardsId: {
      type: Schema.Types.ObjectId,
      ref: 'boards',
      required: true
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true
    },
    name: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true,
      default: 'Open'
    },
    description: {
      type: String
    },
    priority: {
      type: Number,
      required: true,
      default: 1
    },
    vstsBugId: {
      type: String,
      required: true,
      unique: true
    },
    vstsPbiId: {
      type: String
    },
    archived: {
      type: Boolean,
      default: false
    }

  }, {
    timestamps: true
  });

  return mongooseClient.model('issues', issues);
};

// issues-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const issues = new Schema({

    listsId: {
      type: Schema.Types.ObjectId,
      ref: 'lists',
    },
    ownerId: {
      type: Schema.Types.ObjectId,
      ref: 'users',
    },
    name: {
      type: String,
      required: true
    },
    status: {
      type: String,
      default: 'Open'
    },
    order: {
      type: String
    },
    description: {
      type: String
    },
    vstsBugId: {
      type: String,
      required: true,
      unique: true
    }


  }, {
    timestamps: true
  });

  return mongooseClient.model('issues', issues);
};

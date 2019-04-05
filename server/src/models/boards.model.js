// boards-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const boards = new Schema({

    name: {
      type: String,
      required: true
    },
    productsId: {
      type: Schema.Types.ObjectId,
      ref: 'products',
      required: true
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    },
    active: {
      type: Boolean,
      default: true
    }

  }, {
    timestamps: true
  });

  return mongooseClient.model('boards', boards);
};

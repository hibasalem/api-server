'use strict';

class Collection {
  constructor(model) {
    this.model = model;
  }

  create(obj) {
    const item = new this.model(obj);
    return item.save();
  }

  read(_id) {
    if (_id) {
      return this.model.find({ _id });
    } else {
      return this.model.find({});
    }
  }

  update(_id, obj) {
    return this.model.findByIdAndUpdate(_id, obj, { new: true });
  }

  delete(_id) {
    return this.model.findByIdAndDelete(_id);
  }
}

module.exports = Collection;

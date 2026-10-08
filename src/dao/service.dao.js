import { serviceModel } from './models/service.model.js';

class ServiceDAO {
  async getAll(filter, options) {
    return await serviceModel.paginate(filter, options);
  }

  async getById(id) {
    return await serviceModel.findById(id);
  }

  async create(serviceData) {
    return await serviceModel.create(serviceData);
  }

  async update(id, serviceData) {
    return await serviceModel.findByIdAndUpdate(id, serviceData, { new: true });
  }

  async delete(id) {
    return await serviceModel.findByIdAndDelete(id);
  }
}

export const serviceDAO = new ServiceDAO();

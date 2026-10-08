import { serviceDAO } from '../dao/service.dao.js';

class ServiceRepository {
  async getServices(filter, options) {
    return await serviceDAO.getAll(filter, options);
  }

  async getServiceById(id) {
    return await serviceDAO.getById(id);
  }

  async createService(serviceData) {
    return await serviceDAO.create(serviceData);
  }

  async updateService(id, serviceData) {
    return await serviceDAO.update(id, serviceData);
  }

  async deleteService(id) {
    return await serviceDAO.delete(id);
  }
}

export const serviceRepository = new ServiceRepository();

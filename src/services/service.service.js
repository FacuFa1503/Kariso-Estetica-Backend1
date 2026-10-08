import { serviceRepository } from '../repositories/service.repository.js';

class ServiceService {
  async getAllServices(queryParams) {
    const { limit = 10, page = 1, sort, query } = queryParams;
    const filter = {};
    if (query) {
      filter.$or = [
        { title: { $regex: query, $options: 'i' } },
        { description: { $regex: query, $options: 'i' } }
      ];
    }
    const options = {
      limit: parseInt(limit),
      page: parseInt(page),
      lean: true
    };
    if (sort) {
      options.sort = { price: sort === 'asc' ? 1 : -1 };
    }
    return await serviceRepository.getServices(filter, options);
  }

  async getServiceById(id) {
    return await serviceRepository.getServiceById(id);
  }

  async createService(serviceData) {
    return await serviceRepository.createService(serviceData);
  }

  async updateService(id, serviceData) {
    return await serviceRepository.updateService(id, serviceData);
  }

  async deleteService(id) {
    return await serviceRepository.deleteService(id);
  }
}

export const serviceService = new ServiceService();

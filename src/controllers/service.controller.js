import { serviceService } from '../services/service.service.js';

class ServiceController {
  async getServices(req, res) {
    try {
      const result = await serviceService.getAllServices(req.query);
      return res.status(200).json({
        status: 'success',
        payload: result.docs,
        totalPages: result.totalPages,
        prevPage: result.prevPage,
        nextPage: result.nextPage,
        page: result.page,
        hasPrevPage: result.hasPrevPage,
        hasNextPage: result.hasNextPage,
        prevLink: result.hasPrevPage ? `/api/services?page=${result.prevPage}` : null,
        nextLink: result.hasNextPage ? `/api/services?page=${result.nextPage}` : null
      });
    } catch (error) {
      return res.status(500).json({ status: 'error', error: error.message });
    }
  }

  async getServiceById(req, res) {
    try {
      const { id } = req.params;
      const service = await serviceService.getServiceById(id);
      if (!service) {
        return res.status(404).json({ status: 'error', message: 'Servicio no encontrado' });
      }
      return res.status(200).json({ status: 'success', payload: service });
    } catch (error) {
      return res.status(500).json({ status: 'error', error: error.message });
    }
  }

  async createService(req, res) {
    try {
      const newService = await serviceService.createService(req.body);
      
      if (req.app.get('socketio')) {
        const io = req.app.get('socketio');
        const updatedServices = await serviceService.getAllServices({ limit: 50 });
        io.emit('services_updated', updatedServices.docs);
      }

      return res.status(201).json({ status: 'success', payload: newService });
    } catch (error) {
      return res.status(500).json({ status: 'error', error: error.message });
    }
  }

  async updateService(req, res) {
    try {
      const { id } = req.params;
      const updatedService = await serviceService.updateService(id, req.body);
      if (!updatedService) {
        return res.status(404).json({ status: 'error', message: 'Servicio no encontrado' });
      }

      if (req.app.get('socketio')) {
        const io = req.app.get('socketio');
        const updatedServices = await serviceService.getAllServices({ limit: 50 });
        io.emit('services_updated', updatedServices.docs);
      }

      return res.status(200).json({ status: 'success', payload: updatedService });
    } catch (error) {
      return res.status(500).json({ status: 'error', error: error.message });
    }
  }

  async deleteService(req, res) {
    try {
      const { id } = req.params;
      const deletedService = await serviceService.deleteService(id);
      if (!deletedService) {
        return res.status(404).json({ status: 'error', message: 'Servicio no encontrado' });
      }

      if (req.app.get('socketio')) {
        const io = req.app.get('socketio');
        const updatedServices = await serviceService.getAllServices({ limit: 50 });
        io.emit('services_updated', updatedServices.docs);
      }

      return res.status(200).json({ status: 'success', message: 'Servicio eliminado correctamente' });
    } catch (error) {
      return res.status(500).json({ status: 'error', error: error.message });
    }
  }
}

export const serviceController = new ServiceController();

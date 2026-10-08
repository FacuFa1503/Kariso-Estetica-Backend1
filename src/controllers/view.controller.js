import { serviceService } from '../services/service.service.js';

class ViewController {
  async renderHome(req, res) {
    try {
      const result = await serviceService.getAllServices({ limit: 50 });
      return res.render('home', {
        title: 'Servicios de Estética',
        services: result.docs
      });
    } catch (error) {
      return res.status(500).render('home', { title: 'Error', error: error.message });
    }
  }

  async renderRealTimeServices(req, res) {
    try {
      const result = await serviceService.getAllServices({ limit: 50 });
      return res.render('realTimeServices', {
        title: 'Servicios en Tiempo Real',
        services: result.docs
      });
    } catch (error) {
      return res.status(500).render('realTimeServices', { title: 'Error', error: error.message });
    }
  }
}

export const viewController = new ViewController();

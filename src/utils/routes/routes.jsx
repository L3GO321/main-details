import { Services, ServiceDetails } from '../../pages'

export const routesPath = {
  services: '/',
  service: '/:id/details'
}

export const routes = [
  {
    path: routesPath.services,
    element: <Services />
  },
  {
    path: routesPath.service,
    element: <ServiceDetails />
  }
]
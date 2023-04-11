import { useCallback, useEffect, useState } from "react";
import { createContext } from "use-context-selector";
import { api } from "../lib/axios";

// Creating interface for services
interface Service {
  id: string;
  description: string;
  code: string;
  unity: string;
  price: number;
  createdAt: string
}

// Creating interface for creating services
interface CreateServiceInput {
  description: string;
  code: string;
  unity: string;
  price: number;
}

// Creating a context for services
interface ServiceContextType {
  services: Service[];
  fetchServices: (query?: string) => Promise<void>;
  createService: (service: CreateServiceInput) => Promise<void>;
  deleteService: (id: string) => Promise<void>;
  updateService: (id: string, service: CreateServiceInput) => Promise<void>;
}

interface ServiceProviderProps {
  children: React.ReactNode;
}

// Creating and exporting a context for services
export const ServicesContext = createContext({} as ServiceContextType);

// Creating a component that will provide the context for services
export function ServicesProvider({ children}: ServiceProviderProps) {
  const [services, setServices] = useState<Service[]>([]);

  // Fetching services
 const fetchServices = useCallback(async (query?: string) => {
    const response = await api.get('services', {
      params: {
        _sort: 'id',
        _order: 'asce',
        q: query,
      }
    })

    setServices(response.data);
 }, [])

  // Creating services

  const createService = useCallback(
    async (data: CreateServiceInput) => {
      const { description, code, price, unity } = data
      const randomCode = Math.floor(Math.random() * 10000).toString().padStart(4, '0')
      const response = await api.post('services', {
        description,
        code: randomCode,
        price,
        unity,
        createdAt: new Date(),
      })

      setServices((state => [response.data, ...state]))
    },
    [],
  )

  // Deleting services

  const deleteService = useCallback(
    async (id: string) => {
      await api.delete(`services/${id}`)

      setServices(state => state.filter(service => service.id !== id))
    },
    [],
  )

  // Updating services

  const updateService = useCallback(
    async (id: string, data: CreateServiceInput) => {
      const { description, code, price, unity } = data

      const response = await api.put(`services/${id}`, {
        description,
        code,
        price,
        unity,
      })

      setServices(state => state.map(service => service.id === id ? response.data : service))
    },
    [],
  )

  useEffect(() => {
    fetchServices()
  }, [fetchServices])


  return (
    <ServicesContext.Provider value={{
      services,
      fetchServices,
      createService,
      deleteService,
      updateService,
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
}
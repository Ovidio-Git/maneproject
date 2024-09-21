'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip';
import clsx from 'clsx';

interface Device {
  id: number;
  name: string;
  company: string;
  model: string;
  installdate: string;
  ubication: string;
  mesures: string;
  status: 'online' | 'pending' | 'offline' | 'unknown';
}

const plaindb: Device[] = [
  { id: 1, name: 'Sensor de Temperatura', company: 'General Electric', model: 'TX-100', installdate: '2023-01-10', ubication: 'Planta 1', mesures: '0°C - 100°C', status: 'online' },
  { id: 2, name: 'Cámara de Seguridad HD', company: 'Bosch', model: 'HDX-720', installdate: '2023-02-15', ubication: 'Oficina Principal', mesures: '1080p, 120° ángulo', status: 'online' },
  { id: 3, name: 'Termostato Inteligente', company: 'Honeywell', model: 'T1000', installdate: '2022-12-20', ubication: 'Edificio B', mesures: '15°C - 30°C', status: 'pending' },
  { id: 4, name: 'Control de Acceso', company: 'Schneider Electric', model: 'Acc-50', installdate: '2022-10-05', ubication: 'Entrada Principal', mesures: 'RFID, Huella Digital' , status: 'unknown' },
  { id: 5, name: 'Luz LED Industrial', company: 'Philips', model: 'LED-IX150', installdate: '2023-03-12', ubication: 'Almacén', mesures: '1500 lm, 6500K' , status: 'offline' },
  { id: 6, name: 'Aire Acondicionado', company: 'Carrier', model: 'CA-220', installdate: '2023-04-08', ubication: 'Oficina Principal', mesures: '18°C - 24°C', status: 'online' },
  { id: 7, name: 'Sensor de Humedad', company: 'Siemens', model: 'HMX-500', installdate: '2023-01-25', ubication: 'Planta 2', mesures: '0% - 100% HR' , status: 'offline' },
  { id: 8, name: 'Cámara de Visión Nocturna', company: 'Sony', model: 'NV-3000', installdate: '2023-05-14', ubication: 'Estacionamiento', mesures: '720p, Infrarrojo' , status: 'online' },
];

export default function AdminPage() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {plaindb.map((device) => (
          <DeviceCard key={device.id} device={device} />
        ))}
      </div>
    </div>
  );
}

function DeviceCard({ device }: { device: Device }) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
        return 'bg-green-500';
      case 'pending':
        return 'bg-yellow-500';
      case 'offline':
        return 'bg-red-500';
      default:
        return 'bg-gray-400';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'online':
        return 'activo';
      case 'pending':
        return 'pendiente';
      case 'offline':
        return 'apagado';
      default:
        return 'desconocido';
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between">

      <div className=" flex justify-between">
        <div>
          <h3 className="text-lg font-semibold">{device.name}</h3>
          <p className="text-gray-500">ID: {device.id}</p>
        </div>
        <div className="top-2 right-2">

        <Tooltip>
          <TooltipTrigger asChild>
            <span className={`inline-block w-3 h-3 rounded-full cursor-pointer ${getStatusColor(device.status)}`}></span>
          </TooltipTrigger>
          <TooltipContent side="right">{`${getStatusLabel(device.status)}`}</TooltipContent>
        </Tooltip>


        </div>
      </div>
      <div className="mt-6 flex justify-between">
        <Button size="sm" variant="outline" className="w-1/4 mr-2 text-green-600 border-green-600">
          Encender
        </Button>
        <Button size="sm" variant="outline" className="w-1/4 text-red-600 border-red-600">
          Apagar
        </Button>
      </div>
      <div className="mt-4 flex justify-between space-x-2">
        <Button size="sm" variant="outline" className="w-full">
          Visualizar Información
        </Button>
      </div>
      <div className="mt-2 flex justify-between space-x-2">
        <Button size="sm" variant="outline" className="w-full">
          Visualizar Alertas
        </Button>
      </div>
      <div className="mt-2 flex justify-between space-x-2">
        <Button size="sm" variant="outline" className="w-full">
          Visualizar Logs
        </Button>
      </div>
    </div>
  );
}

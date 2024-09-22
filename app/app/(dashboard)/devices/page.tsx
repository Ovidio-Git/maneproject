'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip';
import { devicesPartial } from '@/constants/devices'; 
import { Device } from '@/types/devices';
import { getStatusColor, getStatusLabel } from '@/utils/helpers'; 


export default function AdminPage() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {devicesPartial.map((device:Device) => (
          <DeviceCard device={device} />
        ))}
      </div>
    </div>
  );
}

function DeviceCard({ device }: { device: Device }) {
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

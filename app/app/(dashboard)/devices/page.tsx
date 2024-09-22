'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip';
import { devicesPartial } from '@/constants/devices'; 
import { Device } from '@/types/devices';
import { getStatusColor, getStatusLabel } from '@/utils/helpers'; 
import { Modal } from '@/components/modal-visualizer-data';

export default function AdminPage() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {devicesPartial.map((device: Device) => (
          <DeviceCard key={device.id} device={device} />
        ))}
      </div>
    </div>
  );
}

function DeviceCard({ device }: { device: Device }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');

  const openModal = (type: string) => {
    setModalType(type);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalType('');
  };

  const [deviceState, setDeviceState] = useState(device.status === 'online');

  // Función para manejar el cambio de estado del interruptor
  const handleToggle = () => {
    setDeviceState((prevState) => !prevState);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between">
      <div className=" flex justify-between">
        <div>
          <h3 className="text-md">{device.name}</h3>
          <p className="text-sm text-gray-500">ID: {device.id}</p>
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

      {/* Switch para encender/apagar */}
      <div className="mt-6 flex justify-end items-center">
        <Switch isOn={deviceState} handleToggle={handleToggle} />
      </div>

      {/* Botones para ver más detalles */}
      <div className="mt-4 flex justify-between space-x-2">
        <Button onClick={() => openModal('info')} size="sm" variant="outline" className="w-full">
          Visualizar Información
        </Button>
      </div>
      <div className="mt-2 flex justify-between space-x-2">
        <Button onClick={() => openModal('alert')} size="sm" variant="outline" className="w-full">
          Visualizar Alertas
        </Button>
      </div>
      <div className="mt-2 flex justify-between space-x-2">
        <Button onClick={() => openModal('logs')} size="sm" variant="outline" className="w-full">
          Visualizar Logs
        </Button>
      </div>

      {/* Modal para visualizar datos */}
      {isModalOpen && <Modal type={modalType} onClose={closeModal} />}
    </div>
  );
}

const Switch = ({ isOn, handleToggle }: { isOn: boolean; handleToggle: () => void }) => {
  return (
    <div
      className={`relative inline-block w-16 h-8 transition duration-200 ease-in ${
        isOn ? 'bg-green-500' : 'bg-red-500'
      } rounded-full cursor-pointer`}
      onClick={handleToggle}
    >
      {/* Texto dentro del switch */}
      <span
        className={`absolute inset-y-0 left-1/2 transform -translate-x-2/2 flex items-center justify-end text-xs text-white ${
          isOn ? 'translate-x-[-130%]' : 'translate-x-[5%]'
        }`}
      >
        {isOn ? 'ON' : 'OFF'}
      </span>

      <div
        className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow transform transition ${
          isOn ? 'translate-x-[135%]' : ''
        }`}
      ></div>
    </div>
  );
};

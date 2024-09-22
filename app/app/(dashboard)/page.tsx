'use client';

import React from 'react';
import { Scatter, Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement } from 'chart.js';
import { devicesPartial } from '@/constants/devices'; 
import { Device } from '@/types/devices';
import { countDevicesByStatus } from '@/utils/helpers'; 
import { devicesTotal } from '@/constants/devices'; 

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement);

const scatterData = {
  datasets: [
    {
      label: 'Temperatura por Fecha de Instalación',
      data: devicesPartial.map((device:Device) => ({
        x: device.installdate,
        y: device.mesures,
      })),
      backgroundColor: '#FF6384',
    },
  ],
};

const areaData = {
  labels: devicesPartial.map((device:Device) => device.model),
  datasets: [
    {
      label: 'Modelos más Utilizados',
      data: [3, 2, 1, 2, 1, 1],
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: 'rgba(75,192,192,1)',
      borderWidth: 1,
    },
  ],
};

const barData = {
  labels: ['General Electric', 'Bosch', 'Honeywell', 'Schneider Electric', 'Philips', 'Carrier'],
  datasets: [
    {
      label: 'Temperatura Promedio por Empresa',
      data: [25, 22, 20, 28, 24, 18],
      backgroundColor: 'rgba(153, 102, 255, 0.6)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1,
    },
  ],
};

export default function Dashboard() {
  const deviceStatusCount = countDevicesByStatus(devicesTotal);
  const totalDevices = devicesTotal.length;
  const getPercentage = (count: number) => (count / totalDevices) * 100;
  
  return (
    <div className="p-4">
      {/* Distribución 3x1 para las primeras 3 gráficas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Gráfica Circular */}
        <div className="bg-white shadow-lg rounded-lg p-4 border">
          <h3 className="text-md mb-4">Estado Dispositivos</h3>

          <div className="mb-4">
            <span className="block text-sm font-medium text-gray-700">Activo ({deviceStatusCount.online})</span>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div
                className="bg-green-500 mt-1 h-2 rounded-full"
                style={{ width: `${getPercentage(deviceStatusCount.online)}%` }}
              ></div>
            </div>
          </div>

          <div className="mb-4">
            <span className="block text-sm font-medium text-gray-700">Apagado ({deviceStatusCount.offline})</span>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div
                className="bg-red-500 m-1 h-2 rounded-full"
                style={{ width: `${getPercentage(deviceStatusCount.offline)}%` }}
              ></div>
            </div>
          </div>

          <div className="mb-4">
            <span className="block text-sm font-medium text-gray-700">Pendiente ({deviceStatusCount.pending})</span>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div
                className="bg-yellow-500 m-1 h-2 rounded-full"
                style={{ width: `${getPercentage(deviceStatusCount.pending)}%` }}
              ></div>
            </div>
          </div>

          <div className="mb-4">
            <span className="block text-sm font-medium text-gray-700">Desconocido ({deviceStatusCount.unknown})</span>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div
                className="bg-gray-400 m-1 h-2 rounded-full"
                style={{ width: `${getPercentage(deviceStatusCount.unknown)}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Gráfica de Puntos */}
        <div className="bg-white shadow-lg rounded-lg p-4 border">
          <h3 className="text-md mb-4">Temperatura por Fecha de Instalación</h3>
          <Scatter data={scatterData} />
        </div>

        {/* Gráfica de Área */}
        <div className="bg-white shadow-lg rounded-lg p-4 border">
          <h3 className="text-md mb-4">Modelos Más Utilizados</h3>
          <Line data={areaData} />
        </div>
      </div>

      {/* Gráfica de Barras (1x1 grande) */}
      <div className="bg-white shadow-lg rounded-lg p-4 mt-8 border">
        <h3 className="text-md mb-4">Temperatura Promedio por Empresa</h3>
        <Bar data={barData} />
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import { Bubble, Scatter, Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement } from 'chart.js';
import { devicesPartial } from '@/constants/devices'; 
import { Device } from '@/types/devices';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement);


const bubbleData = {
  datasets: [
    {
      label: 'Dispositivos',
      data: devicesPartial.map((device:Device) => ({
        x: device.installdate.split('-')[1],
        y: device.mesures,
        r: Math.random() * 20 + 5, 
      })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'rgba(255, 99, 132, 1)',
    },
  ],
};

const bubbleOptions = {
  scales: {
    x: {
      title: {
        display: true,
        text: 'Mes de Instalación',
      },
    },
    y: {
      title: {
        display: true,
        text: 'Medidas',
      },
    },
  },
};

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
  return (
    <div className="p-4">
      {/* Distribución 3x1 para las primeras 3 gráficas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Gráfica Circular */}
        <div className="bg-white shadow-lg rounded-lg p-4 border">
          <h3 className="text-lg font-semibold mb-4">Distribución por Empresa</h3>
          <Bubble data={bubbleData} options={bubbleOptions} />
        </div>

        {/* Gráfica de Puntos */}
        <div className="bg-white shadow-lg rounded-lg p-4 border">
          <h3 className="text-lg font-semibold mb-4">Temperatura por Fecha de Instalación</h3>
          <Scatter data={scatterData} />
        </div>

        {/* Gráfica de Área */}
        <div className="bg-white shadow-lg rounded-lg p-4 border">
          <h3 className="text-lg font-semibold mb-4">Modelos Más Utilizados</h3>
          <Line data={areaData} />
        </div>
      </div>

      {/* Gráfica de Barras (1x1 grande) */}
      <div className="bg-white shadow-lg rounded-lg p-4 mt-8 border">
        <h3 className="text-lg font-semibold mb-4">Temperatura Promedio por Empresa</h3>
        <Bar data={barData} />
      </div>
    </div>
  );
}

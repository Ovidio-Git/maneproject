'use client';

import React from 'react';
import { Bubble, Scatter, Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement);

const devices = [
  { id: 1, name: 'Sensor de Temperatura', company: 'General Electric', model: 'TX-100', installdate: '2023-01-10', ubication: 'Planta 1', mesures: 25 },
  { id: 2, name: 'Cámara de Seguridad HD', company: 'Bosch', model: 'HDX-720', installdate: '2023-02-15', ubication: 'Oficina Principal', mesures: 22 },
  { id: 3, name: 'Termostato Inteligente', company: 'Honeywell', model: 'T1000', installdate: '2022-12-20', ubication: 'Edificio B', mesures: 20 },
  { id: 4, name: 'Control de Acceso', company: 'Schneider Electric', model: 'Acc-50', installdate: '2022-10-05', ubication: 'Entrada Principal', mesures: 28 },
  { id: 5, name: 'Luz LED Industrial', company: 'Philips', model: 'LED-IX150', installdate: '2023-03-12', ubication: 'Almacén', mesures: 24 },
  { id: 6, name: 'Aire Acondicionado', company: 'Carrier', model: 'CA-220', installdate: '2023-04-08', ubication: 'Oficina Principal', mesures: 18 },
];

const bubbleData = {
  datasets: [
    {
      label: 'Dispositivos',
      data: devices.map((device) => ({
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
      data: devices.map((device) => ({
        x: device.installdate,
        y: device.mesures,
      })),
      backgroundColor: '#FF6384',
    },
  ],
};

const areaData = {
  labels: devices.map((device) => device.model),
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

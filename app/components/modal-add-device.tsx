// /app/components/Modal.tsx

import React from 'react';
import { Button } from '@/components/ui/button';

// Tipos de props que el modal necesita
interface ModalProps {
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Fondo oscuro */}
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>

      {/* Contenido del modal */}
      <div className="bg-white p-6 rounded-lg shadow-lg z-10 w-full max-w-lg">
        <h2 className="text-xl font-semibold mb-4">Agregar Nuevo Dispositivo</h2>

        {/* Formulario simulado */}
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Nombre del Dispositivo</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Nombre"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Compañía</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Compañía"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Modelo</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Modelo"
            />
          </div>

          {/* Botones de acción */}
          <div className="flex justify-end">
            <Button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded mr-2">
              Cancelar
            </Button>
            <Button className="bg-green-500 text-white px-4 py-2 rounded">
              Guardar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

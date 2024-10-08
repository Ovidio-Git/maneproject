'use client';

import React, {useState} from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { File, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Device } from '@/types/devices';
import { DevicesTable } from './device-table';
import { devicesTotal } from '@/constants/devices'; 
import { SearchInput } from '../search';
import { Modal } from '@/components/modal-add-device';

export default  function AdminPage() {
  const search: string=  '';
  const offset: number =  0;

  const filteredDevices = search
  ? devicesTotal.filter((device:Device) =>
    device.name.toLowerCase().includes(search.toLowerCase())
    )
  : devicesTotal;

  const itemsPerPage:number = 10;
  const paginatedDevices = filteredDevices.slice(
    offset * itemsPerPage,
    (offset + 1) * itemsPerPage
  );

  const [isModalOpen, setModalOpen] = useState(false);

  // Función para abrir el modal
  const openModal = () => {
    setModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Tabs defaultValue="all">
      <div className="flex items-center">
        <TabsList>
          <TabsTrigger value="all">Todo</TabsTrigger>
          <TabsTrigger value="active">Activos</TabsTrigger>
        </TabsList>
        <div className="ml-auto flex items-center gap-2">
          <SearchInput />
          <Button size="sm" variant="outline" className="h-8 gap-1">
            <File className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Exportar Tabla
            </span>
          </Button>
          <Button onClick={openModal} size="sm" className="h-8 gap-1">
            <PlusCircle className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Agregar Dispositivo
            </span>
          </Button>
          {isModalOpen && <Modal onClose={closeModal} />}
        </div>
      </div>
      <TabsContent value="all">
      <DevicesTable
          devices={paginatedDevices}
          devicesPerPage={itemsPerPage}
          offset={offset}
          totalDevices={filteredDevices.length}
        />
      </TabsContent>
    </Tabs>
  );
}

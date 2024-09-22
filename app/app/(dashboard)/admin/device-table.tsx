'use client';

import {
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  Table
} from '@/components/ui/table';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { DeviceComponent } from './device';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Device } from '@/types/devices';

export function DevicesTable({
  devices,
  devicesPerPage,
  offset,
  totalDevices
}: {
  devices: Device[];
  devicesPerPage: number;
  offset: number;
  totalDevices: number;
}) {
  const router = useRouter();

  function prevPage() {
    const newOffset = Math.max(0, offset - devicesPerPage);
    router.push(`/?offset=${newOffset}`, { scroll: false });
  }

  function nextPage() {
    const newOffset = offset + devicesPerPage;
    if (newOffset < totalDevices) {
      router.push(`/?offset=${newOffset}`, { scroll: false });
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Administrar Dispositivos</CardTitle>
        <CardDescription>
          Gestiona tus dispositivos.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                ID
              </TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Nombre</TableHead>
              <TableHead>Empresa</TableHead>
              <TableHead>Modelo</TableHead>
              <TableHead>Fecha Instalacion</TableHead>
              <TableHead>Ubicacion</TableHead>
              <TableHead>Medidas</TableHead>
              <TableHead>Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {devices.map((device:Device) => (
              <DeviceComponent key={device.id} device={device} />
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <div className="flex items-center justify-between w-full">
          <div className="text-xs text-muted-foreground">
            Mostrando{' '}
            <strong>
              {offset + 1}-{Math.min(offset + devicesPerPage, totalDevices)}
            </strong>{' '}
            de <strong>{totalDevices}</strong> dispositivos
          </div>
          <div className="flex">
            <Button
              onClick={prevPage}
              variant="ghost"
              size="sm"
              disabled={offset === 0}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Prev
            </Button>
            <Button
              onClick={nextPage}
              variant="ghost"
              size="sm"
              disabled={offset + devicesPerPage >= totalDevices}
            >
              Siguiente
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

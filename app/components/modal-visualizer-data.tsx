
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  TableHead,
  TableRow,
  TableCell,
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


interface ModalProps {
  type: string;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ type, onClose }) => {
  // Datos simulados para cada sección
  const deviceInfo = [
    { id: 1, name: 'Sensor de Temperatura', company: 'General Electric', model: 'TX-100', ubicacion: 'Planta 1' },
    { id: 2, name: 'Cámara de Seguridad HD', company: 'Bosch', model: 'HDX-720', ubicacion: 'Oficina Principal' },
  ];

  const deviceAlerts = [
    { id: 1, type: 'Error', message: 'Fallo de temperatura', date: '2023-01-12' },
    { id: 2, type: 'Advertencia', message: 'Batería baja', date: '2023-02-15' },
  ];

  const deviceLogs = [
    { id: 1, action: 'Encendido', user: 'Admin', date: '2023-01-10 10:00' },
    { id: 2, action: 'Reiniciado', user: 'Admin', date: '2023-02-18 14:30' },
  ];

  // Función para renderizar la tabla según el tipo
  const renderContent = () => {
    if (type === 'info') {
      return (
        <>
          <CardHeader>
              <CardTitle>Información del Dispositivo</CardTitle>
              <CardDescription>
                data de los ultimos 24 horas del dispositivo.
              </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Nombre</TableHead>
                  <TableHead>Compañía</TableHead>
                  <TableHead>Modelo</TableHead>
                  <TableHead>Ubicacion</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {deviceInfo.map((info) => (
                  <TableRow key={info.id}>
                    <TableCell className="font-medium">{info.id}</TableCell>
                    <TableCell className="font-medium">{info.name}</TableCell>
                    <TableCell className="font-medium">{info.company}</TableCell>
                    <TableCell className="font-medium">{info.model}</TableCell>
                    <TableCell className="font-medium">{info.ubicacion}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </>
      );
    } else if (type === 'alert') {
      return (
        <>
          <CardHeader>
              <CardTitle>Alertas del Dispositivo</CardTitle>
              <CardDescription>
                data de los ultimos 24 horas del dispositivo.
              </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Mensaje</TableHead>
                  <TableHead>Fecha</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {deviceAlerts.map((alert) => (
                  <TableRow key={alert.id}>
                    <TableCell className="font-medium">{alert.id}</TableCell>
                    <TableCell className="font-medium">{alert.type}</TableCell>
                    <TableCell className="font-medium">{alert.message}</TableCell>
                    <TableCell className="font-medium">{alert.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </>
      );
    } else if (type === 'logs') {
      return (
        <>
          <CardHeader>
              <CardTitle>Logs del Dispositivo</CardTitle>
              <CardDescription>
                data de los ultimos 24 horas del dispositivo.
              </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Acción</TableHead>
                  <TableHead>Usuario</TableHead>
                  <TableHead>Fecha</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {deviceLogs.map((log) => (
                  <TableRow key={log.id}>
                    <TableCell className="font-medium">{log.id}</TableCell>
                    <TableCell className="font-medium">{log.action}</TableCell>
                    <TableCell className="font-medium">{log.user}</TableCell>
                    <TableCell className="font-medium">{log.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </>
      );
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-60" onClick={onClose}></div>
      {/* Contenido del modal */}
      <Card className="bg-white p-4 rounded-lg shadow-lg z-10 w-full max-w-lg">
        {renderContent()}
        <div className="flex justify-end mt-4 mr-4">
          <Button onClick={onClose} className="bg-white-500 text-red-700 border border-red-600 px-4 py-2 rounded hover:bg-red-100">
            Cerrar
          </Button>
        </div>
      </Card>
    </div>
  );
};

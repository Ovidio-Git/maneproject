import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';
import { TableCell, TableRow } from '@/components/ui/table';
import { Device } from '@/types/devices';
import { getStatusColor, getStatusLabel } from '@/utils/helpers'; 

export function DeviceBody({ device }: { device: Device }) {
  return (
    <TableRow>
      <TableCell className="font-medium">{device.id}</TableCell>
      <TableCell className="font-medium">
        <div className="flex justify-start items-center">
        <span className={`mr-2 inline-block w-3 h-3 rounded-full ${getStatusColor(device.status)}`}></span>
        <span>{getStatusLabel(device.status)}</span>
        </div>

      </TableCell>
      <TableCell className="font-medium">{device.name}</TableCell>
      <TableCell className="font-medium">{device.company}</TableCell>
      <TableCell>
        <Badge variant="outline" className="capitalize border text-red">
          {device.model}
        </Badge>
      </TableCell>
      <TableCell className="font-medium">{device.installdate}</TableCell>
      <TableCell className="font-medium">{device.ubication}</TableCell>
      <TableCell className="font-medium">{device.mesures}</TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup="true" size="icon" variant="ghost">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
            <DropdownMenuItem>Editar</DropdownMenuItem>
            <DropdownMenuItem>
              <form>
                <button type="submit">Eliminar</button>
              </form>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}

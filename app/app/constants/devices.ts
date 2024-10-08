import { Device } from '@/types/devices';

export const devicesTotal: Device[] = [
    { id: 1, name: 'Sensor de Temperatura', company: 'General Electric', model: 'TX-100', installdate: '2023-01-10', ubication: 'Planta 1', mesures: '0°C - 100°C', status: 'online' },
    { id: 2, name: 'Cámara de Seguridad HD', company: 'Bosch', model: 'HDX-720', installdate: '2023-02-15', ubication: 'Oficina Principal', mesures: '1080p, 120° ángulo' , status: 'offline' },
    { id: 3, name: 'Termostato Inteligente', company: 'Honeywell', model: 'T1000', installdate: '2022-12-20', ubication: 'Edificio B', mesures: '15°C - 30°C' , status: 'pending' },
    { id: 4, name: 'Control de Acceso', company: 'Schneider Electric', model: 'Acc-50', installdate: '2022-10-05', ubication: 'Entrada Principal', mesures: 'RFID, Huella Digital' , status: 'unknown' },
    { id: 5, name: 'Luz LED Industrial', company: 'Philips', model: 'LED-IX150', installdate: '2023-03-12', ubication: 'Almacén', mesures: '1500 lm, 6500K' , status: 'online' },
    { id: 6, name: 'Aire Acondicionado', company: 'Carrier', model: 'CA-220', installdate: '2023-04-08', ubication: 'Oficina Principal', mesures: '18°C - 24°C' , status: 'online' },
    { id: 7, name: 'Sensor de Humedad', company: 'Siemens', model: 'HMX-500', installdate: '2023-01-25', ubication: 'Planta 2', mesures: '0% - 100% HR' , status: 'offline' },
    { id: 8, name: 'Cámara de Visión Nocturna', company: 'Sony', model: 'NV-3000', installdate: '2023-05-14', ubication: 'Estacionamiento', mesures: '720p, Infrarrojo', status: 'online'},
    { id: 9, name: 'Alarma de Incendios', company: 'ADT', model: 'FireX-900', installdate: '2022-09-30', ubication: 'Edificio A', mesures: '100 dB' , status: 'offline' },
    { id: 10, name: 'Cerradura Electrónica', company: 'Kwikset', model: 'SmartKey 888', installdate: '2023-02-18', ubication: 'Sala de Reuniones', mesures: 'Cierre Automático', status: 'unknown' },
    { id: 11, name: 'Sensor de Gas', company: 'Honeywell', model: 'GasX-200', installdate: '2023-01-15', ubication: 'Cocina Industrial', mesures: '0 - 1000 ppm' , status: 'unknown' },
    { id: 12, name: 'Cámara de Exterior', company: 'Bosch', model: 'OutdoorX-750', installdate: '2022-11-20', ubication: 'Patio', mesures: '1080p, Resistente al Agua', status: 'unknown' },
    { id: 13, name: 'Iluminación LED', company: 'Philips', model: 'LED-PX500', installdate: '2023-02-22', ubication: 'Pasillos', mesures: '1000 lm, 5000K' , status: 'online' },
    { id: 14, name: 'Control de Acceso Biométrico', company: 'Schneider Electric', model: 'Bio-Access 200', installdate: '2023-03-30', ubication: 'Entrada Planta Baja', mesures: 'Huella Digital, PIN' , status: 'online' },
    { id: 15, name: 'Termostato Wi-Fi', company: 'Nest', model: 'Nest T3000', installdate: '2023-04-05', ubication: 'Oficina Ejecutiva', mesures: '15°C - 30°C' , status: 'pending' },
    { id: 16, name: 'Cerradura con Bluetooth', company: 'August', model: 'SmartLock Pro', installdate: '2023-05-01', ubication: 'Laboratorio', mesures: 'Conexión Bluetooth', status: 'online' },
    { id: 17, name: 'Aire Acondicionado Split', company: 'Daikin', model: 'DX20VC', installdate: '2022-12-18', ubication: 'Área de Producción', mesures: '18°C - 26°C' , status: 'pending' },
    { id: 18, name: 'Sensor de Movimiento', company: 'Honeywell', model: 'MotionX-400', installdate: '2023-01-20', ubication: 'Entrada Principal', mesures: 'Rango 15m, 90°', status: 'online'},
    { id: 19, name: 'Cámara de Seguridad 4K', company: 'Sony', model: 'UltraCam 4K', installdate: '2022-10-10', ubication: 'Lobby', mesures: '4K, Ángulo 130°', status: 'online'},
    { id: 20, name: 'Termostato Automático', company: 'Carrier', model: 'AutoT-600', installdate: '2023-03-05', ubication: 'Sala de Control', mesures: '16°C - 28°C', status: 'online'},
];



export const devicesPartial: Device[] = [
    { id: 1, name: 'Sensor de Temperatura', company: 'General Electric', model: 'TX-100', installdate: '2023-01-10', ubication: 'Planta 1', mesures: "25" , status: 'online' },
    { id: 2, name: 'Cámara de Seguridad HD', company: 'Bosch', model: 'HDX-720', installdate: '2023-02-15', ubication: 'Oficina Principal', mesures: "22" , status: 'online' },
    { id: 3, name: 'Termostato Inteligente', company: 'Honeywell', model: 'T1000', installdate: '2022-12-20', ubication: 'Edificio B', mesures: "20" , status: 'pending' },
    { id: 4, name: 'Control de Acceso', company: 'Schneider Electric', model: 'Acc-50', installdate: '2022-10-05', ubication: 'Entrada Principal', mesures: "28", status: 'unknown' },
    { id: 5, name: 'Luz LED Industrial', company: 'Philips', model: 'LED-IX150', installdate: '2023-03-12', ubication: 'Almacén', mesures: "24", status: 'offline' },
    { id: 6, name: 'Aire Acondicionado', company: 'Carrier', model: 'CA-220', installdate: '2023-04-08', ubication: 'Oficina Principal', mesures: "18" , status: 'offline' },
];
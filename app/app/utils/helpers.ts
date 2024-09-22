export function getStatusColor(status: string): string {
    switch (status) {
        case 'online':
        return 'bg-green-400';
        case 'pending':
        return 'bg-yellow-400';
        case 'offline':
        return 'bg-red-400';
        default:
        return 'bg-gray-400';
    }
};

export function getStatusLabel(status: string): string {
    switch (status) {
        case 'online':
        return 'activo';
        case 'pending':
        return 'pendiente';
        case 'offline':
        return 'apagado';
        default:
        return 'desconocido';
    }
};
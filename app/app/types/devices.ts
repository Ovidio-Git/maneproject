export interface Device {
    id: number;
    name: string;
    company: string;
    model: string;
    installdate: string;
    ubication: string;
    mesures: string;
    status: 'online' | 'pending' | 'offline' | 'unknown';
}

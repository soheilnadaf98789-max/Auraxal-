
export enum LeadStatus {
  NEW = 'New',
  CONTACTED = 'Contacted',
  QUALIFIED = 'Qualified',
  DISQUALIFIED = 'Disqualified',
  CONVERTED = 'Converted'
}

export interface Lead {
  id: string;
  name: string;
  source: string;
  status: LeadStatus;
  assignedTo: string; // Team member ID
}

export interface Client {
  id: string;
  name: string;
  services: string[]; // Service IDs
  progress: number;
  deliveryWindow?: string;
}

export enum TaskStatus {
  PENDING = 'Pending',
  IN_PROGRESS = 'In Progress',
  COMPLETED = 'Completed',
  DELAYED = 'Delayed'
}

export interface Task {
  id: string;
  clientId: string;
  serviceId: string;
  assignedTo: string;
  deadline: string;
  status: TaskStatus;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  activeTasks: number;
  permissions: {
    viewLeads: boolean;
    editLeads: boolean;
    uploadLeads: boolean;
    downloadCSV: boolean;
    updateTasks: boolean;
    scheduleMeetings: boolean;
  };
}

export interface Service {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
}

export enum RequestType {
  SERVICE = 'Service',
  MEETING = 'Meeting'
}

export interface UserRequest {
  id: string;
  clientId: string;
  serviceId?: string;
  type: RequestType;
  message: string;
  date: string;
}

export type View = 'dashboard' | 'leads' | 'clients' | 'tasks' | 'team' | 'services' | 'requests' | 'settings';

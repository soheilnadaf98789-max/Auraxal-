
import { LeadStatus, Lead, Client, TaskStatus, Task, TeamMember, Service, UserRequest, RequestType } from './types';

export const INITIAL_LEADS: Lead[] = [
  { id: '1', name: 'Sarah Johnson', source: 'TechCorp Solutions', status: LeadStatus.NEW, assignedTo: 't1' },
  { id: '2', name: 'David Martinez', source: 'Global Innovations Inc', status: LeadStatus.CONTACTED, assignedTo: 't2' },
  { id: '3', name: 'Jennifer Lee', source: 'StartUp Ventures', status: LeadStatus.QUALIFIED, assignedTo: 't1' },
  { id: '4', name: 'Robert Taylor', source: 'Enterprise Systems Ltd', status: LeadStatus.CONVERTED, assignedTo: 't3' },
  { id: '5', name: 'Amanda White', source: 'Digital Marketing Pro', status: LeadStatus.NEW, assignedTo: 'unassigned' },
  { id: '6', name: 'Michael Chen', source: 'Innovate AI', status: LeadStatus.QUALIFIED, assignedTo: 't2' },
  { id: '7', name: 'Kevin Adams', source: 'Cloud Scale', status: LeadStatus.NEW, assignedTo: 't4' },
  { id: '8', name: 'Rachel Green', source: 'Central Perk Designs', status: LeadStatus.CONTACTED, assignedTo: 't3' },
  { id: '9', name: 'Steve Rogers', source: 'Shield Security', status: LeadStatus.QUALIFIED, assignedTo: 't1' },
  { id: '10', name: 'Natasha Romanoff', source: 'Black Widow Logistics', status: LeadStatus.CONVERTED, assignedTo: 't2' },
];

export const INITIAL_CLIENTS: Client[] = [
  { id: 'c1', name: 'Creative Studios', services: ['s1', 's2'], progress: 55, deliveryWindow: 'Jan 13, 2025' },
  { id: 'c2', name: 'Digital Innovations Inc', services: ['s3', 's4'], progress: 65, deliveryWindow: 'Jan 12, 2025' },
  { id: 'c3', name: 'Enterprise Systems Co', services: ['s1', 's2', 's3'], progress: 78, deliveryWindow: 'Jan 16, 2025' },
  { id: 'c4', name: 'Global Marketing Group', services: ['s4'], progress: 45, deliveryWindow: 'Feb 01, 2025' },
  { id: 'c5', name: 'Stark Industries', services: ['s1', 's3'], progress: 92, deliveryWindow: 'Jan 20, 2025' },
  { id: 'c6', name: 'Wayne Enterprises', services: ['s2', 's4'], progress: 30, deliveryWindow: 'Feb 15, 2025' },
];

export const INITIAL_TEAM: TeamMember[] = [
  { 
    id: 't1', 
    name: 'Sarah Johnson', 
    role: 'Admin', 
    activeTasks: 8, 
    permissions: { viewLeads: true, editLeads: true, uploadLeads: true, downloadCSV: true, updateTasks: true, scheduleMeetings: true }
  },
  { 
    id: 't2', 
    name: 'Michael Chen', 
    role: 'Manager', 
    activeTasks: 12, 
    permissions: { viewLeads: true, editLeads: true, uploadLeads: true, downloadCSV: false, updateTasks: true, scheduleMeetings: true }
  },
  { 
    id: 't3', 
    name: 'Emily Rodriguez', 
    role: 'Member', 
    activeTasks: 5, 
    permissions: { viewLeads: true, editLeads: false, uploadLeads: false, downloadCSV: false, updateTasks: true, scheduleMeetings: false }
  },
  { 
    id: 't4', 
    name: 'David Thompson', 
    role: 'Manager', 
    activeTasks: 9, 
    permissions: { viewLeads: true, editLeads: true, uploadLeads: false, downloadCSV: false, updateTasks: true, scheduleMeetings: true }
  },
  { 
    id: 't5', 
    name: 'Chris Evans', 
    role: 'Member', 
    activeTasks: 3, 
    permissions: { viewLeads: true, editLeads: false, uploadLeads: false, downloadCSV: false, updateTasks: true, scheduleMeetings: false }
  },
];

export const INITIAL_SERVICES: Service[] = [
  { id: 's1', name: 'Website Development', description: 'Full-stack web applications and sites.', enabled: true },
  { id: 's2', name: 'Mobile App Development', description: 'iOS and Android native or cross-platform apps.', enabled: true },
  { id: 's3', name: 'SEO Optimization', description: 'Search engine visibility and growth strategies.', enabled: true },
  { id: 's4', name: 'Brand Identity', description: 'Logos, colors, and full brand guidelines.', enabled: true },
];

export const INITIAL_TASKS: Task[] = [
  { id: 'tk1', clientId: 'c1', serviceId: 's1', assignedTo: 't1', deadline: '2 days', status: TaskStatus.IN_PROGRESS },
  { id: 'tk2', clientId: 'c2', serviceId: 's2', assignedTo: 't2', deadline: 'Overdue', status: TaskStatus.DELAYED },
  { id: 'tk3', clientId: 'c3', serviceId: 's3', assignedTo: 't3', deadline: '4 days', status: TaskStatus.PENDING },
  { id: 'tk4', clientId: 'c1', serviceId: 's4', assignedTo: 't4', deadline: '1 week', status: TaskStatus.COMPLETED },
  { id: 'tk5', clientId: 'c5', serviceId: 's1', assignedTo: 't1', deadline: '3 days', status: TaskStatus.IN_PROGRESS },
  { id: 'tk6', clientId: 'c6', serviceId: 's2', assignedTo: 't5', deadline: '10 days', status: TaskStatus.PENDING },
  { id: 'tk7', clientId: 'c4', serviceId: 's4', assignedTo: 't2', deadline: 'Overdue', status: TaskStatus.DELAYED },
];

export const INITIAL_REQUESTS: UserRequest[] = [
  { id: 'r1', clientId: 'c1', serviceId: 's3', type: RequestType.SERVICE, message: 'Interested in upgrading our SEO package for the new quarter.', date: 'Just now' },
  { id: 'r2', clientId: 'c3', type: RequestType.MEETING, message: 'Need to discuss the progress on the mobile app redesign.', date: '2 hours ago' },
  { id: 'r3', clientId: 'c5', type: RequestType.SERVICE, message: 'We need an emergency security audit of our web presence.', date: '1 day ago' },
];

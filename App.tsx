
import React, { useState, useMemo, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Briefcase, 
  CheckSquare, 
  UserCircle, 
  ChevronRight,
  Plus,
  LogOut,
  Settings as SettingsIcon,
  Bell,
  Layers,
  Search,
  CheckCircle2,
  Clock,
  AlertCircle,
  UserPlus,
  Target,
  Activity,
  AlertTriangle,
  MessageSquare,
  ArrowLeft,
  Filter,
  MoreVertical,
  Calendar,
  TrendingUp,
  TrendingDown,
  X,
  Check,
  Moon,
  Sun
} from 'lucide-react';

import { 
  View, Lead, LeadStatus, Client, TeamMember, Task, Service, UserRequest, TaskStatus, RequestType 
} from './types';
import { 
  INITIAL_LEADS, INITIAL_CLIENTS, INITIAL_TEAM, INITIAL_TASKS, INITIAL_SERVICES, INITIAL_REQUESTS 
} from './constants';

// Branding Assets
const LOGO_IMG = "https://images.smart.co/7d4e410f-f17b-4021-9964-b8be4d856001.png";
const ICON_IMG = "https://images.smart.co/8372605e-f00e-4360-9345-eb642cc97223.png";

// --- Shared Components ---

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  isDarkMode: boolean;
}

const Card: React.FC<CardProps> = ({ children, className, onClick, isDarkMode }) => (
  <div 
    onClick={onClick}
    style={{ backgroundColor: isDarkMode ? '#190229' : '#ffffff' }}
    className={`border rounded-[32px] p-6 shadow-sm transition-all duration-300 active:scale-[0.98] 
      ${isDarkMode ? 'border-[#2d0a45]' : 'border-slate-200'} 
      ${onClick ? 'cursor-pointer' : ''} ${className}`}
  >
    {children}
  </div>
);

const Badge: React.FC<{ children: React.ReactNode; color: string; isDarkMode: boolean }> = ({ children, color, isDarkMode }) => {
  const colors: Record<string, string> = {
    purple: isDarkMode ? 'bg-indigo-900/40 text-indigo-300 border-indigo-800' : 'bg-indigo-50 text-indigo-600 border-indigo-100',
    green: isDarkMode ? 'bg-emerald-900/40 text-emerald-300 border-emerald-800' : 'bg-emerald-50 text-emerald-600 border-emerald-100',
    blue: isDarkMode ? 'bg-blue-900/40 text-blue-300 border-blue-800' : 'bg-blue-50 text-blue-600 border-blue-100',
    yellow: isDarkMode ? 'bg-amber-900/40 text-amber-300 border-amber-800' : 'bg-amber-50 text-amber-600 border-amber-100',
    red: isDarkMode ? 'bg-rose-900/40 text-rose-300 border-rose-800' : 'bg-rose-50 text-rose-600 border-rose-100',
    slate: isDarkMode ? 'bg-slate-800 text-slate-400 border-slate-700' : 'bg-slate-50 text-slate-500 border-slate-100',
  };
  return (
    <span className={`px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider border transition-colors duration-300 ${colors[color] || colors.slate}`}>
      {children}
    </span>
  );
};

const FAB: React.FC<{ icon: React.ReactNode; label?: string; onClick: () => void }> = ({ icon, label, onClick }) => (
  <button 
    onClick={(e) => { e.stopPropagation(); onClick(); }}
    className="fixed bottom-28 right-6 bg-indigo-600 text-white p-4 rounded-2xl shadow-xl shadow-indigo-200 flex items-center gap-2 font-bold transition-transform active:scale-90 z-[40]"
  >
    {icon}
    {label && <span className="text-sm pr-1">{label}</span>}
  </button>
);

// --- Screen Components ---

const Dashboard: React.FC<{ stats: any; setView: (v: View) => void; isDarkMode: boolean }> = ({ stats, setView, isDarkMode }) => (
  <div className="space-y-6">
    <div className="flex justify-between items-start">
      <div>
        <h2 className={`text-3xl font-black tracking-tight transition-colors duration-300 ${isDarkMode ? 'text-slate-50' : 'text-slate-900'}`}>Business Overview</h2>
        <div className="flex items-center gap-2 text-xs font-bold text-slate-400 mt-1 uppercase tracking-widest">
          <Clock className="w-3.5 h-3.5" /> Last updated: Just now
        </div>
      </div>
      <button 
        className={`p-3 rounded-2xl shadow-sm transition-colors duration-300 ${isDarkMode ? 'bg-[#190229] text-indigo-400 border border-[#2d0a45]' : 'bg-indigo-50 text-indigo-600'}`} 
        onClick={() => setView('settings')}
      >
        <Bell className="w-6 h-6" />
      </button>
    </div>

    <div className="grid grid-cols-2 gap-4">
      <Card onClick={() => setView('leads')} isDarkMode={isDarkMode}>
        <div className="flex justify-between items-start mb-4">
          <div className={`p-2 rounded-xl transition-colors ${isDarkMode ? 'bg-indigo-900/30 text-indigo-400' : 'bg-indigo-50 text-indigo-600'}`}><Users className="w-5 h-5" /></div>
          <div className="flex items-center gap-1 text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-lg text-[10px] font-black uppercase">
            <TrendingUp className="w-3 h-3" /> 12%
          </div>
        </div>
        <div className={`text-3xl font-black leading-none mb-1 transition-colors ${isDarkMode ? 'text-slate-50' : 'text-slate-900'}`}>{stats.totalLeads}</div>
        <div className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Total Leads</div>
      </Card>

      <Card onClick={() => setView('leads')} isDarkMode={isDarkMode}>
        <div className="flex justify-between items-start mb-4">
          <div className={`p-2 rounded-xl transition-colors ${isDarkMode ? 'bg-amber-900/30 text-amber-400' : 'bg-amber-50 text-amber-600'}`}><Activity className="w-5 h-5" /></div>
          <div className="flex items-center gap-1 text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-lg text-[10px] font-black uppercase">
            <TrendingUp className="w-3 h-3" /> 8%
          </div>
        </div>
        <div className={`text-3xl font-black leading-none mb-1 transition-colors ${isDarkMode ? 'text-slate-50' : 'text-slate-900'}`}>{stats.newLeads}</div>
        <div className={`text-xs font-bold uppercase tracking-tighter transition-colors ${isDarkMode ? 'text-rose-400/80' : 'text-rose-400'}`}>New Uncontacted</div>
      </Card>
    </div>

    <div className="grid grid-cols-2 gap-4">
      <Card onClick={() => setView('leads')} isDarkMode={isDarkMode}>
        <div className="flex justify-between items-start mb-4">
          <div className={`p-2 rounded-xl transition-colors ${isDarkMode ? 'bg-emerald-900/30 text-emerald-400' : 'bg-emerald-50 text-emerald-600'}`}><Target className="w-5 h-5" /></div>
        </div>
        <div className={`text-3xl font-black leading-none mb-1 transition-colors ${isDarkMode ? 'text-slate-50' : 'text-slate-900'}`}>{stats.qualifiedLeads}</div>
        <div className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Qualified</div>
      </Card>

      <Card onClick={() => setView('leads')} isDarkMode={isDarkMode}>
        <div className="flex justify-between items-start mb-4">
          <div className={`p-2 rounded-xl transition-colors ${isDarkMode ? 'bg-indigo-900/30 text-indigo-400' : 'bg-indigo-50 text-indigo-600'}`}><TrendingUp className="w-5 h-5" /></div>
        </div>
        <div className={`text-3xl font-black leading-none mb-1 transition-colors ${isDarkMode ? 'text-slate-50' : 'text-slate-900'}`}>{stats.conversionRate}%</div>
        <div className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Conversion</div>
      </Card>
    </div>

    <Card onClick={() => setView('tasks')} isDarkMode={isDarkMode} className="flex items-center justify-between">
      <div>
        <div className={`text-3xl font-black leading-none mb-1 transition-colors ${isDarkMode ? 'text-slate-50' : 'text-slate-900'}`}>{stats.pendingTasks}</div>
        <div className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Pending Tasks</div>
      </div>
      <div className={`p-4 rounded-3xl transition-colors ${isDarkMode ? 'bg-indigo-900/30 text-indigo-400' : 'bg-indigo-50 text-indigo-600'}`}><CheckSquare className="w-8 h-8" /></div>
    </Card>

    <Card onClick={() => setView('tasks')} isDarkMode={isDarkMode} className={`flex items-center justify-between ${isDarkMode ? 'border-rose-900/30' : 'border-rose-100'}`}>
      <div>
        <div className={`text-3xl font-black leading-none mb-1 transition-colors ${isDarkMode ? 'text-slate-50' : 'text-slate-900'}`}>{stats.overdueTasks}</div>
        <div className={`text-xs font-bold uppercase tracking-tighter transition-colors ${isDarkMode ? 'text-rose-400/80' : 'text-rose-400'}`}>Overdue Work</div>
      </div>
      <div className={`p-4 rounded-3xl transition-colors ${isDarkMode ? 'bg-rose-900/30 text-rose-400' : 'bg-rose-50 text-rose-600'}`}><AlertTriangle className="w-8 h-8" /></div>
    </Card>
  </div>
);

const Leads: React.FC<{ leads: Lead[]; team: TeamMember[]; isDarkMode: boolean; onAdd: () => void }> = ({ leads, team, isDarkMode, onAdd }) => {
  const [filter, setFilter] = useState<LeadStatus | 'All'>('All');
  return (
    <div className="space-y-6">
      <h2 className={`text-3xl font-black tracking-tight transition-colors ${isDarkMode ? 'text-slate-50' : 'text-slate-900'}`}>Leads</h2>
      <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
        {['All', ...Object.values(LeadStatus)].map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s as any)}
            className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-tight transition-all whitespace-nowrap 
              ${filter === s 
                ? 'bg-indigo-600 text-white shadow-lg' 
                : isDarkMode ? 'bg-[#190229] border border-[#2d0a45] text-slate-400' : 'bg-white border border-slate-200 text-slate-400'
              }`}
          >
            {s}
          </button>
        ))}
      </div>
      <div className="space-y-4">
        {leads.filter(l => filter === 'All' || l.status === filter).map(lead => (
          <Card key={lead.id} isDarkMode={isDarkMode}>
            <div className="flex justify-between items-start mb-2">
              <div className={`text-xl font-black transition-colors ${isDarkMode ? 'text-slate-50' : 'text-slate-900'}`}>{lead.name}</div>
              <Badge color={lead.status === LeadStatus.CONVERTED ? 'green' : 'blue'} isDarkMode={isDarkMode}>{lead.status}</Badge>
            </div>
            <div className="text-sm font-bold text-slate-400 mb-6">{lead.source}</div>
            <div className={`flex items-center gap-2 pt-4 border-t ${isDarkMode ? 'border-slate-800' : 'border-slate-50'}`}>
              <div className={`w-7 h-7 rounded-full flex items-center justify-center font-black text-[10px] border transition-colors 
                ${isDarkMode ? 'bg-slate-800 text-slate-500 border-slate-700' : 'bg-slate-100 text-slate-400 border-slate-200'}`}>
                {team.find(t => t.id === lead.assignedTo)?.name.charAt(0)}
              </div>
              <span className={`text-xs font-bold transition-colors ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{team.find(t => t.id === lead.assignedTo)?.name || 'Unassigned'}</span>
            </div>
          </Card>
        ))}
      </div>
      <FAB icon={<Plus />} label="Add Lead" onClick={onAdd} />
    </div>
  );
};

const Clients: React.FC<{ clients: Client[]; isDarkMode: boolean; onAdd: () => void }> = ({ clients, isDarkMode, onAdd }) => (
  <div className="space-y-6">
    <h2 className={`text-3xl font-black tracking-tight transition-colors ${isDarkMode ? 'text-slate-50' : 'text-slate-900'}`}>Active Clients</h2>
    <div className="space-y-4">
      {clients.map(client => (
        <Card key={client.id} isDarkMode={isDarkMode}>
          <div className="flex justify-between items-center mb-6">
            <div className={`text-xl font-black transition-colors ${isDarkMode ? 'text-slate-50' : 'text-slate-900'}`}>{client.name}</div>
            <div className={`text-sm font-black px-3 py-1 rounded-xl transition-colors ${isDarkMode ? 'bg-indigo-900/30 text-indigo-400' : 'bg-indigo-50 text-indigo-600'}`}>{client.progress}%</div>
          </div>
          <div className={`w-full h-2 rounded-full overflow-hidden mb-4 transition-colors ${isDarkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
            <div className="bg-indigo-600 h-full transition-all duration-1000" style={{ width: `${client.progress}%` }} />
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
            <Briefcase className="w-4 h-4" /> {client.services.length} Active Services
          </div>
        </Card>
      ))}
    </div>
    <FAB icon={<Plus />} label="New Client" onClick={onAdd} />
  </div>
);

const Tasks: React.FC<{ tasks: Task[]; team: TeamMember[]; clients: Client[]; services: Service[]; isDarkMode: boolean; onAdd: () => void }> = ({ tasks, team, clients, services, isDarkMode, onAdd }) => {
  const [statusFilter, setStatusFilter] = useState<TaskStatus | 'All'>('All');
  const [memberFilter, setMemberFilter] = useState<string | 'All'>('All');

  const filtered = tasks.filter(t => 
    (statusFilter === 'All' || t.status === statusFilter) &&
    (memberFilter === 'All' || t.assignedTo === memberFilter)
  );

  return (
    <div className="space-y-6">
      <h2 className={`text-3xl font-black tracking-tight transition-colors ${isDarkMode ? 'text-slate-50' : 'text-slate-900'}`}>Operations</h2>
      <div className="space-y-2 overflow-x-auto hide-scrollbar">
        <div className="flex gap-2 pb-1">
          {['All', ...Object.values(TaskStatus)].map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s as any)}
              className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-tight transition-all whitespace-nowrap 
                ${statusFilter === s ? 'bg-indigo-600 text-white' : isDarkMode ? 'bg-[#190229] border border-[#2d0a45] text-slate-400' : 'bg-white border border-slate-200 text-slate-400'}`}
            >
              {s}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setMemberFilter('All')}
            className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase transition-all whitespace-nowrap 
              ${memberFilter === 'All' ? 'bg-slate-800 text-white' : isDarkMode ? 'bg-[#190229] border border-[#2d0a45] text-slate-400' : 'bg-white border border-slate-200 text-slate-400'}`}
          >
            All Members
          </button>
          {team.map(m => (
            <button
              key={m.id}
              onClick={() => setMemberFilter(m.id)}
              className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase transition-all whitespace-nowrap 
                ${memberFilter === m.id ? 'bg-slate-800 text-white' : isDarkMode ? 'bg-[#190229] border border-[#2d0a45] text-slate-400' : 'bg-white border border-slate-200 text-slate-400'}`}
            >
              {m.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        {filtered.map(task => {
          const client = clients.find(c => c.id === task.clientId);
          const service = services.find(s => s.id === task.serviceId);
          const member = team.find(tm => tm.id === task.assignedTo);
          return (
            <Card key={task.id} isDarkMode={isDarkMode} className={task.status === TaskStatus.DELAYED ? isDarkMode ? 'border-rose-900/40' : 'border-rose-100' : ''}>
              <div className="flex justify-between items-start mb-2">
                <Badge color={task.status === TaskStatus.DELAYED ? 'red' : 'purple'} isDarkMode={isDarkMode}>{task.status}</Badge>
                <div className={`text-[10px] font-black uppercase ${task.deadline === 'Overdue' ? 'text-rose-500' : 'text-slate-400'}`}>{task.deadline}</div>
              </div>
              <div className={`text-lg font-black leading-tight mb-1 transition-colors ${isDarkMode ? 'text-slate-50' : 'text-slate-900'}`}>{service?.name || 'Task'}</div>
              <div className="text-xs font-bold text-slate-400 mb-6 uppercase tracking-wider">{client?.name || 'Client'}</div>
              <div className={`flex items-center gap-2 pt-4 border-t ${isDarkMode ? 'border-slate-800' : 'border-slate-50'}`}>
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs border transition-colors 
                  ${isDarkMode ? 'bg-slate-800 text-slate-500 border-slate-700' : 'bg-slate-100 text-slate-400 border-slate-200'}`}>
                  {member?.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className={`text-xs font-black leading-none transition-colors ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>{member?.name || 'Unassigned'}</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Assignee</div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
      <FAB icon={<Plus />} label="New Task" onClick={onAdd} />
    </div>
  );
};

const Team: React.FC<{ team: TeamMember[]; isDarkMode: boolean }> = ({ team, isDarkMode }) => (
  <div className="space-y-6">
    <h2 className={`text-3xl font-black tracking-tight transition-colors ${isDarkMode ? 'text-slate-50' : 'text-slate-900'}`}>Team</h2>
    <div className="space-y-4">
      {team.map(member => (
        <Card key={member.id} isDarkMode={isDarkMode} className="flex items-center gap-4">
          <div className={`w-14 h-14 rounded-3xl border-2 flex items-center justify-center font-black text-xl transition-colors 
            ${isDarkMode ? 'bg-indigo-900/20 border-[#2d0a45] text-indigo-400' : 'bg-indigo-50 border-white text-indigo-400 shadow-sm'}`}>
            {member.name.charAt(0)}
          </div>
          <div className="flex-1">
            <div className={`text-xl font-black leading-tight transition-colors ${isDarkMode ? 'text-slate-50' : 'text-slate-900'}`}>{member.name}</div>
            <div className="flex items-center gap-2 mt-1">
              <Badge color="purple" isDarkMode={isDarkMode}>{member.role}</Badge>
              <span className="text-[10px] font-bold text-slate-400 uppercase">{member.activeTasks} Tasks</span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  </div>
);

// --- Main Application ---

const App: React.FC = () => {
  const [view, setView] = useState<View>('dashboard');
  const [showMenu, setShowMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('auraxal-theme');
    return saved === 'dark';
  });

  useEffect(() => {
    localStorage.setItem('auraxal-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const stats = useMemo(() => {
    const totalLeads = INITIAL_LEADS.length;
    const newLeads = INITIAL_LEADS.filter(l => l.status === LeadStatus.NEW).length;
    const qualifiedLeads = INITIAL_LEADS.filter(l => l.status === LeadStatus.QUALIFIED).length;
    const pendingTasks = INITIAL_TASKS.filter(t => t.status !== TaskStatus.COMPLETED).length;
    const overdueTasks = INITIAL_TASKS.filter(t => t.deadline === 'Overdue').length;
    const conversionRate = totalLeads > 0 ? Math.round((INITIAL_LEADS.filter(l => l.status === LeadStatus.CONVERTED).length / totalLeads) * 100) : 0;
    return { totalLeads, newLeads, qualifiedLeads, pendingTasks, overdueTasks, conversionRate };
  }, []);

  const renderContent = () => {
    switch (view) {
      case 'dashboard': return <Dashboard stats={stats} setView={setView} isDarkMode={isDarkMode} />;
      case 'leads': return <Leads leads={INITIAL_LEADS} team={INITIAL_TEAM} isDarkMode={isDarkMode} onAdd={() => {}} />;
      case 'clients': return <Clients clients={INITIAL_CLIENTS} isDarkMode={isDarkMode} onAdd={() => {}} />;
      case 'tasks': return <Tasks tasks={INITIAL_TASKS} team={INITIAL_TEAM} clients={INITIAL_CLIENTS} services={INITIAL_SERVICES} isDarkMode={isDarkMode} onAdd={() => {}} />;
      case 'team': return <Team team={INITIAL_TEAM} isDarkMode={isDarkMode} />;
      default: return (
        <div className="flex flex-col items-center justify-center py-24 text-slate-300">
          <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-colors ${isDarkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
            <SettingsIcon className="w-10 h-10 opacity-20" />
          </div>
          <p className="font-bold text-slate-400 text-lg uppercase tracking-widest">Under Construction</p>
          <button onClick={() => setView('dashboard')} className="mt-6 px-8 py-3 bg-indigo-600 text-white rounded-2xl font-black text-sm shadow-xl shadow-indigo-100 uppercase tracking-tighter">Home</button>
        </div>
      );
    }
  };

  return (
    <div 
      style={{ backgroundColor: isDarkMode ? '#0c0014' : '#F8F9FB' }}
      className="min-h-screen flex flex-col font-sans selection:bg-indigo-100 transition-colors duration-500"
    >
      {/* HEADER */}
      <header className={`fixed top-0 left-0 right-0 h-20 backdrop-blur-xl z-50 px-6 flex items-center justify-between transition-colors duration-300 ${isDarkMode ? 'bg-[#0c0014]/80' : 'bg-[#F8F9FB]/80'}`}>
        <div className="flex items-center">
          <img 
            src={LOGO_IMG} 
            alt="Auraxal" 
            className={`h-9 w-auto object-contain cursor-pointer transition-opacity ${isDarkMode ? 'opacity-90 brightness-110' : ''}`}
            onClick={() => setView('dashboard')}
          />
        </div>
        <div className="relative">
          <button 
            onClick={() => setShowMenu(!showMenu)}
            className={`w-12 h-12 rounded-[20px] flex items-center justify-center shadow-sm active:scale-95 transition-all 
              ${isDarkMode ? 'bg-[#190229] border border-[#2d0a45]' : 'bg-white border border-slate-200'}`}
          >
            <img 
              src={ICON_IMG} 
              alt="Profile" 
              className="w-8 h-8 object-contain"
            />
          </button>
          
          {showMenu && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setShowMenu(false)} />
              <div className={`absolute right-0 mt-3 w-56 border rounded-[32px] shadow-2xl py-4 z-20 animate-in fade-in zoom-in-95 duration-200 
                ${isDarkMode ? 'bg-[#190229] border-[#2d0a45] shadow-black/40' : 'bg-white border-slate-100 shadow-slate-900/10'}`}>
                
                <div className="px-6 py-2 mb-2 flex items-center justify-between">
                  <span className={`text-[10px] font-black uppercase tracking-widest ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>Appearance</span>
                  <button 
                    onClick={(e) => { e.stopPropagation(); setIsDarkMode(!isDarkMode); }}
                    className={`p-1.5 rounded-lg transition-colors ${isDarkMode ? 'bg-indigo-500/20 text-indigo-400' : 'bg-slate-100 text-slate-600'}`}
                  >
                    {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  </button>
                </div>

                <div className={`h-px my-2 mx-6 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-50'}`} />

                <button className={`w-full flex items-center gap-4 px-6 py-4 text-sm font-black uppercase tracking-tight transition-colors 
                  ${isDarkMode ? 'text-slate-300 hover:bg-white/5' : 'text-slate-600 hover:bg-slate-50'}`}>
                  <Layers className="w-5 h-5 text-indigo-500" /> Services
                </button>
                <button className={`w-full flex items-center gap-4 px-6 py-4 text-sm font-black uppercase tracking-tight transition-colors 
                  ${isDarkMode ? 'text-slate-300 hover:bg-white/5' : 'text-slate-600 hover:bg-slate-50'}`}>
                  <MessageSquare className="w-5 h-5 text-indigo-500" /> Requests
                </button>
                <button className={`w-full flex items-center gap-4 px-6 py-4 text-sm font-black uppercase tracking-tight transition-colors 
                  ${isDarkMode ? 'text-slate-300 hover:bg-white/5' : 'text-slate-600 hover:bg-slate-50'}`}>
                  <SettingsIcon className="w-5 h-5 text-indigo-500" /> Settings
                </button>
                <div className={`h-px my-2 mx-6 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-50'}`} />
                <button className="w-full flex items-center gap-4 px-6 py-4 text-sm font-black text-rose-500 hover:bg-rose-500/10 uppercase tracking-tight">
                  <LogOut className="w-5 h-5" /> Logout
                </button>
              </div>
            </>
          )}
        </div>
      </header>

      <main className="flex-1 pt-24 pb-36 px-6 max-w-lg mx-auto w-full">
        {renderContent()}
      </main>

      {/* BOTTOM NAV */}
      <nav className={`fixed bottom-6 left-6 right-6 backdrop-blur-2xl rounded-[36px] p-2 flex justify-between items-center z-50 shadow-2xl transition-all duration-300
        ${isDarkMode ? 'bg-white/5 border border-white/10 shadow-black/40' : 'bg-slate-900/95 shadow-slate-900/30'}`}>
        {[
          { id: 'dashboard', icon: LayoutDashboard, label: 'Dash' },
          { id: 'leads', icon: Target, label: 'Leads' },
          { id: 'clients', icon: Briefcase, label: 'Clients' },
          { id: 'tasks', icon: CheckSquare, label: 'Tasks' },
          { id: 'team', icon: Users, label: 'Team' }
        ].map((item) => {
          const Icon = item.icon;
          const isActive = view === item.id;
          return (
            <button 
              key={item.id}
              onClick={() => setView(item.id as View)}
              className={`flex items-center gap-2 px-4 py-3 rounded-[28px] transition-all duration-300 
                ${isActive 
                  ? isDarkMode ? 'bg-white text-slate-900 shadow-md scale-105' : 'bg-white text-slate-900 shadow-md scale-105'
                  : isDarkMode ? 'text-slate-400 hover:text-slate-100' : 'text-slate-500 hover:text-slate-300'
                }`}
            >
              <Icon className={`w-5 h-5 transition-transform ${isActive ? 'stroke-[2.5px]' : 'stroke-2'}`} />
              {isActive && <span className="text-xs font-black tracking-tighter uppercase">{item.label}</span>}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default App;

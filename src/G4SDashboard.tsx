import React, { useState } from 'react';
import { 
  Home,
  Calendar,
  FileText,
  Users,
  DollarSign,
  BarChart3,
  Bell,
  Settings,
  LogOut,
  Menu,
  X,
  Plus,
  Clock,
  Shield,
  Activity,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  UserCheck,
  Briefcase,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  Eye
} from 'lucide-react';

export default function G4SDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('calendar');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 6)); // July 2025

  const menuItems = [
    { id: 'dashboard', label: 'My Dashboard', icon: Home, color: 'text-blue-600' },
    { id: 'actions', label: 'My Actions', icon: CheckCircle, color: 'text-green-600' },
    { id: 'calendar', label: 'My Calendar', icon: Calendar, color: 'text-purple-600' },
    { id: 'queries', label: 'My Queries', icon: HelpCircle, color: 'text-orange-600' },
    { id: 'absence', label: 'Request Absence', icon: Clock, color: 'text-orange-600' },
    { id: 'approvals', label: 'My Approvals', icon: UserCheck, color: 'text-indigo-600' },
    { id: 'financial', label: 'Financial Documents', icon: DollarSign, color: 'text-emerald-600' },
    { id: 'documents', label: 'My Documents', icon: FileText, color: 'text-blue-600' },
    { id: 'hr', label: 'My HR', icon: Users, color: 'text-pink-600' },
    { id: 'details', label: 'My Details', icon: UserCheck, color: 'text-cyan-600' },
    { id: 'expenses', label: 'Expenses', icon: Briefcase, color: 'text-amber-600' },
    { id: 'hub', label: 'Employee Hub', icon: Shield, color: 'text-slate-600' },
  ];

  // Calendar data
  const calendarData = {
    1: { type: 'shift', hours: '10h 0m', status: 'completed' },
    2: { type: 'shift', hours: '10h 0m', status: 'completed' },
    3: { type: 'shift', hours: '10h 0m', status: 'completed' },
    4: { type: 'shift', hours: '10h 0m', status: 'completed' },
    5: { type: 'weekend', label: '' },
    6: { type: 'weekend', label: '' },
    7: { type: 'unavailable', label: '' },
    8: { type: 'shift', hours: '8h 0m', status: 'scheduled' },
    9: { type: 'shift', hours: '12h 0m', status: 'scheduled' },
    10: { type: 'shift', hours: '12h 0m', status: 'scheduled' },
    11: { type: 'shift', hours: '12h 0m', status: 'scheduled' },
    12: { type: 'weekend', label: '' },
    13: { type: 'weekend', label: '' },
    14: { type: 'unavailable', label: '' },
    15: { type: 'shift', hours: '10h 0m', status: 'scheduled' },
    16: { type: 'shift', hours: '10h 0m', status: 'scheduled' },
    17: { type: 'shift', hours: '10h 0m', status: 'scheduled' },
    18: { type: 'shift', hours: '12h 0m', status: 'scheduled' },
    19: { type: 'weekend', label: '' },
    20: { type: 'weekend', label: '' },
    21: { type: 'unavailable', label: '' },
    22: { type: 'shift', hours: '10h 0m', status: 'scheduled' },
    23: { type: 'shift', hours: '10h 0m', status: 'scheduled' },
    24: { type: 'shift', hours: '10h 0m', status: 'scheduled' },
    25: { type: 'shift', hours: '9h 30m', status: 'scheduled' },
    26: { type: 'weekend', label: '' },
    27: { type: 'weekend', label: '' },
    28: { type: 'shift', hours: '10h 0m', status: 'completed' },
    29: { type: 'shift', hours: '10h 0m', status: 'completed' },
    30: { type: 'shift', hours: '10h 0m', status: 'completed' },
    31: { type: 'shift', hours: '10h 0m', status: 'completed' },
  };

  const legendItems = [
    { label: 'Unavailable', color: 'bg-gray-300 dark:bg-gray-600' },
    { label: 'Public Holiday', color: 'bg-blue-200 dark:bg-blue-800' },
    { label: 'Scheduled Shift', color: 'bg-orange-100 dark:bg-orange-900/30' },
    { label: 'Completed Shift', color: 'bg-green-500' },
    { label: 'Confirmed Scheduled Shift', color: 'bg-green-100 dark:bg-green-900/30' },
    { label: 'UnConfirmed Scheduled Shift', color: 'bg-yellow-100 dark:bg-yellow-900/30' },
    { label: 'Absence', color: 'bg-red-200 dark:bg-red-900/30' },
    { label: 'Requested Absence', color: 'bg-pink-200 dark:bg-pink-900/30' },
    { label: 'Requested Unavailability', color: 'bg-purple-200 dark:bg-purple-900/30' },
    { label: 'Unable To Contact', color: 'bg-gray-400 dark:bg-gray-500' },
  ];

  const hoursStats = [
    { label: 'Contracted Hours', value: '173H49M', color: 'text-gray-600' },
    { label: 'Scheduled Hours', value: '205H30M', color: 'text-orange-600' },
    { label: 'Absence Hours', value: '0H0M', color: 'text-red-600' },
    { label: 'Contracted Hours Balance', value: '-31H41M', color: 'text-blue-600' },
    { label: 'Unpaid Break Hours', value: '0H0M', color: 'text-purple-600' },
    { label: 'Working Hours', value: '205H30M', color: 'text-green-600' },
  ];

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const getDayClass = (dayData) => {
    if (!dayData) return 'bg-gray-50 dark:bg-gray-800';
    
    switch (dayData.type) {
      case 'shift':
        if (dayData.status === 'completed') return 'bg-green-500 text-white';
        if (dayData.status === 'scheduled') return 'bg-orange-100 dark:bg-orange-900/30 text-gray-900 dark:text-white border-2 border-orange-300 dark:border-orange-700';
        return 'bg-orange-100 dark:bg-orange-900/30';
      case 'weekend':
        return 'bg-blue-100 dark:bg-blue-900/20';
      case 'unavailable':
        return 'bg-gray-200 dark:bg-gray-700';
      default:
        return 'bg-gray-50 dark:bg-gray-800';
    }
  };

  return (
    <div className={`min-h-screen bg-gray-50 ${isDarkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 rounded-md text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <div className="ml-4 flex items-center">
                <div className="bg-orange-600 text-black px-4 py-2 rounded font-black text-xl border-2 border-black shadow-md">G4S</div>
                <span className="ml-3 text-xl font-semibold text-gray-900 dark:text-white">Employee Portal</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {isDarkMode ? (
                  <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 relative">
                <Bell size={20} className="text-gray-600 dark:text-gray-300" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-orange-500 rounded-full"></span>
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
                <Settings size={20} className="text-gray-600 dark:text-gray-300" />
              </button>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Suleman Mazhar</p>
                  <p className="text-xs text-gray-500">Security Officer</p>
                </div>
                <img
                  src="https://ui-avatars.com/api/?name=Suleman+Mazhar&background=f97316&color=fff"
                  alt="Profile"
                  className="h-10 w-10 rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex h-screen pt-16">
        {/* Sidebar */}
        <aside className={`${isSidebarOpen ? 'w-64' : 'w-0'} transition-all duration-300 bg-white dark:bg-gray-800 shadow-lg overflow-hidden`}>
          <nav className="mt-5 px-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg mb-1 transition-all ${
                    activeTab === item.id
                      ? 'bg-orange-100 dark:bg-orange-900/20 text-orange-900 dark:text-orange-100 border-l-4 border-orange-600'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  <Icon size={20} className={item.color} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
          <div className="absolute bottom-0 w-full p-4 border-t border-gray-200 dark:border-gray-700">
            <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-lg">
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          {activeTab === 'calendar' ? (
            <div className="p-6">
              {/* Header Section */}
              <div className="mb-6 flex justify-between items-center">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Suleman Mazhar</h1>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">Shift Calendar View</p>
                </div>
                <div className="flex gap-4">
                  <select className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                    <option>HOME / PEOPLE /CALENDAR VIEW</option>
                  </select>
                  <button className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 flex items-center gap-2 font-medium">
                    <Plus size={20} />
                    NEW EVENT
                  </button>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
                {hoursStats.map((stat, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                    <p className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</p>
                    <p className={`text-xl font-bold ${stat.color}`}>{stat.value}</p>
                  </div>
                ))}
              </div>

              {/* Calendar View */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                {/* Calendar Header */}
                <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <button onClick={previousMonth} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                      <ChevronLeft size={20} className="text-gray-600 dark:text-gray-300" />
                    </button>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </h2>
                    <button onClick={nextMonth} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                      <ChevronRight size={20} className="text-gray-600 dark:text-gray-300" />
                    </button>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 text-sm bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600">TODAY</button>
                    <button className="px-4 py-2 text-sm bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600">DAY</button>
                    <button className="px-4 py-2 text-sm bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600">WEEK</button>
                    <button className="px-4 py-2 text-sm bg-orange-600 text-white rounded-lg">MONTH</button>
                  </div>
                </div>

                {/* Calendar Grid */}
                <div className="p-4">
                  {/* Weekday Headers */}
                  <div className="grid grid-cols-7 gap-2 mb-2">
                    {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day) => (
                      <div key={day} className="text-center text-sm font-medium text-gray-600 dark:text-gray-400 py-2">
                        {day}
                      </div>
                    ))}
                  </div>

                  {/* Calendar Days */}
                  <div className="grid grid-cols-7 gap-2">
                    {/* Empty cells for days before month starts */}
                    {Array.from({ length: getFirstDayOfMonth(currentMonth) }, (_, i) => (
                      <div key={`empty-${i}`} className="h-24"></div>
                    ))}
                    
                    {/* Days of the month */}
                    {Array.from({ length: getDaysInMonth(currentMonth) }, (_, i) => {
                      const day = i + 1;
                      const dayData = calendarData[day];
                      
                      return (
                        <div
                          key={day}
                          className={`h-24 rounded-lg p-2 ${getDayClass(dayData)} cursor-pointer hover:shadow-md transition-all`}
                        >
                          <div className="flex justify-between items-start">
                            <span className={`text-sm font-medium ${dayData?.type === 'shift' && dayData?.status === 'completed' ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                              {day}
                            </span>
                            {dayData?.hours && (
                              <Eye size={14} className={dayData?.status === 'completed' ? 'text-white' : 'text-gray-500'} />
                            )}
                          </div>
                          {dayData?.hours && (
                            <div className="mt-2">
                              <p className={`text-xs font-medium ${dayData?.status === 'completed' ? 'text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                                {dayData.hours}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Legend */}
                <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Legend</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                    {legendItems.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded ${item.color}`}></div>
                        <span className="text-xs text-gray-600 dark:text-gray-400">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Dashboard View (Previous Content) */
            <div className="p-6">
              {/* Welcome Section */}
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Welcome back, Suleman! 👋
                </h1>
                <p className="text-gray-600 dark:text-gray-300">
                  Here's what's happening with your account today.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[
                  { label: 'Pending Actions', value: '5', trend: '+2', color: 'bg-orange-500' },
                  { label: 'Leave Balance', value: '12 days', trend: '-3', color: 'bg-green-500' },
                  { label: 'Open Incidents', value: '2', trend: '0', color: 'bg-orange-600' },
                  { label: 'Pending Approvals', value: '3', trend: '+1', color: 'bg-purple-500' },
                ].map((stat, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between mb-2">
                      <div className={`h-12 w-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                        <TrendingUp size={24} className="text-white" />
                      </div>
                      <span className={`text-sm font-medium ${stat.trend.startsWith('+') ? 'text-green-600' : 'text-orange-600'}`}>
                        {stat.trend}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Quick Actions Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {/* Daily Activity */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Daily Activity</h2>
                    <Activity className="text-orange-600" size={24} />
                  </div>
                  <div className="space-y-3">
                    <button className="w-full text-left p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors">
                      <p className="font-medium text-orange-900 dark:text-orange-100">Log Daily Report</p>
                      <p className="text-sm text-orange-700 dark:text-orange-300">Submit your daily activity log</p>
                    </button>
                    <button className="w-full text-left p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                      <p className="font-medium text-gray-900 dark:text-white">View History</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Check previous submissions</p>
                    </button>
                  </div>
                </div>

                {/* Incident Management */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Incident Management</h2>
                    <Shield className="text-gray-800 dark:text-gray-200" size={24} />
                  </div>
                  <div className="space-y-3">
                    <button className="w-full text-left p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                      <p className="font-medium text-gray-900 dark:text-white">Create Incident</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">Report a new incident</p>
                    </button>
                    <button className="w-full text-left p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                      <p className="font-medium text-gray-900 dark:text-white">My Incidents</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">View and manage reports</p>
                    </button>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h2>
                  <div className="space-y-3">
                    {[
                      { type: 'leave', message: 'Annual leave approved for Dec 25-27', time: '2 hours ago', icon: CheckCircle, color: 'text-green-600' },
                      { type: 'incident', message: 'Incident #1234 assigned to you', time: '5 hours ago', icon: AlertCircle, color: 'text-orange-600' },
                      { type: 'document', message: 'Payslip for November available', time: '1 day ago', icon: FileText, color: 'text-blue-600' },
                      { type: 'training', message: 'Safety training due by Dec 30', time: '2 days ago', icon: Clock, color: 'text-orange-600' },
                    ].map((activity, index) => {
                      const Icon = activity.icon;
                      return (
                        <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                          <Icon size={20} className={activity.color} />
                          <div className="flex-1">
                            <p className="text-sm text-gray-900 dark:text-white">{activity.message}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{activity.time}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Featured Resources */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white cursor-pointer hover:shadow-lg transition-shadow">
                  <Briefcase size={32} className="mb-3" />
                  <h3 className="font-semibold">Training Portal</h3>
                  <p className="text-sm opacity-90 mt-1">Access courses</p>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white cursor-pointer hover:shadow-lg transition-shadow">
                  <Users size={32} className="mb-3" />
                  <h3 className="font-semibold">Team Directory</h3>
                  <p className="text-sm opacity-90 mt-1">Find colleagues</p>
                </div>
                <div className="bg-gradient-to-br from-gray-800 to-black rounded-xl p-6 text-white cursor-pointer hover:shadow-lg transition-shadow">
                  <FileText size={32} className="mb-3" />
                  <h3 className="font-semibold">Policies</h3>
                  <p className="text-sm opacity-90 mt-1">Company guidelines</p>
                </div>
                <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl p-6 text-white cursor-pointer hover:shadow-lg transition-shadow">
                  <BarChart3 size={32} className="mb-3" />
                  <h3 className="font-semibold">Performance</h3>
                  <p className="text-sm opacity-90 mt-1">View metrics</p>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
      </div>
    </div>
  );
}
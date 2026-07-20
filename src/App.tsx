import React, { useState, useMemo } from "react";
import {
  Wallet,
  TrendingUp,
  TrendingDown,
  Plus,
  X,
  Lightbulb,
  AlertCircle,
  ShoppingBag,
  Home,
  Coffee,
  Car,
  Monitor,
  Sparkles,
  ArrowUpRight,
  ArrowDownRight,
  LayoutDashboard,
  PieChart as PieIcon,
  Target,
  CreditCard,
  Bell,
  Search,
  Settings,
  User,
  Menu,
  ChevronLeft,
  Brain,
  MessageCircle,
  Send,
  Trophy,
  Zap,
  Shield,
  Star,
  Calendar,
  DollarSign,
  PiggyBank,
  Briefcase,
  ChevronRight,
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  BarChart,
  Bar,
} from "recharts";

// ==================== TIPOS ====================
type TransactionType = "income" | "expense";
type PageType = "dashboard" | "budget" | "goals" | "cards" | "ai" | "insights";

interface Transaction {
  id: string;
  description: string;
  amount: number;
  type: TransactionType;
  category: string;
  date: string;
  tags?: string[];
}

interface Budget {
  category: string;
  limit: number;
  spent: number;
  icon: React.ElementType;
}

interface Goal {
  id: string;
  name: string;
  target: number;
  current: number;
  deadline: string;
  icon: React.ElementType;
  color: string;
}

interface Notification {
  id: string;
  title: string;
  message: string;
  type: "warning" | "success" | "info";
  time: string;
  read: boolean;
}

// ==================== DADOS MOCK ====================
const INITIAL_TRANSACTIONS: Transaction[] = [
  {
    id: "1",
    description: "Salário Mensal",
    amount: 5000,
    type: "income",
    category: "Salário",
    date: "2026-07-01",
    tags: ["fixo", "principal"],
  },
  {
    id: "2",
    description: "Aluguel",
    amount: 1500,
    type: "expense",
    category: "Moradia",
    date: "2026-07-05",
    tags: ["fixo", "essencial"],
  },
  {
    id: "3",
    description: "Supermercado",
    amount: 450,
    type: "expense",
    category: "Alimentação",
    date: "2026-07-10",
    tags: ["essencial"],
  },
  {
    id: "4",
    description: "Uber",
    amount: 35,
    type: "expense",
    category: "Transporte",
    date: "2026-07-12",
    tags: ["variável"],
  },
  {
    id: "5",
    description: "Netflix",
    amount: 55,
    type: "expense",
    category: "Lazer",
    date: "2026-07-15",
    tags: ["assinatura", "recorrente"],
  },
  {
    id: "6",
    description: "iFood",
    amount: 180,
    type: "expense",
    category: "Alimentação",
    date: "2026-07-18",
    tags: ["delivery", "variável"],
  },
  {
    id: "7",
    description: "Freelance",
    amount: 1200,
    type: "income",
    category: "Extra",
    date: "2026-07-20",
    tags: ["variável"],
  },
];

const BUDGETS: Budget[] = [
  { category: "Alimentação", limit: 1000, spent: 630, icon: ShoppingBag },
  { category: "Moradia", limit: 1600, spent: 1500, icon: Home },
  { category: "Transporte", limit: 400, spent: 180, icon: Car },
  { category: "Lazer", limit: 300, spent: 280, icon: Coffee },
  { category: "Saúde", limit: 500, spent: 120, icon: Shield },
];

const GOALS: Goal[] = [
  {
    id: "1",
    name: "Reserva de Emergência",
    target: 30000,
    current: 24000,
    deadline: "2026-12-31",
    icon: Shield,
    color: "from-emerald-500 to-cyan-500",
  },
  {
    id: "2",
    name: "Viagem Europa",
    target: 15000,
    current: 6500,
    deadline: "2027-06-30",
    icon: Briefcase,
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: "3",
    name: "Notebook Novo",
    target: 8000,
    current: 5200,
    deadline: "2026-10-31",
    icon: Monitor,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "4",
    name: "Entrada Apartamento",
    target: 80000,
    current: 22000,
    deadline: "2028-12-31",
    icon: Home,
    color: "from-amber-500 to-orange-500",
  },
];

const NOTIFICATIONS: Notification[] = [
  {
    id: "1",
    title: "Conta próxima do vencimento",
    message: "Cartão Nubank vence em 3 dias",
    type: "warning",
    time: "2h atrás",
    read: false,
  },
  {
    id: "2",
    title: "Meta quase atingida!",
    message: "Reserva de Emergência: 80% concluído",
    type: "success",
    time: "5h atrás",
    read: false,
  },
  {
    id: "3",
    title: "Orçamento excedido",
    message: "Você gastou 93% do orçamento de Lazer",
    type: "warning",
    time: "1d atrás",
    read: true,
  },
  {
    id: "4",
    title: "Nova análise da IA",
    message: "Detectamos padrão de economia positivo",
    type: "info",
    time: "2d atrás",
    read: true,
  },
];

const CASH_FLOW_DATA = {
  "7d": [
    { name: "Seg", receitas: 200, despesas: 150, saldo: 50 },
    { name: "Ter", receitas: 0, despesas: 80, saldo: -80 },
    { name: "Qua", receitas: 500, despesas: 200, saldo: 300 },
    { name: "Qui", receitas: 0, despesas: 120, saldo: -120 },
    { name: "Sex", receitas: 150, despesas: 90, saldo: 60 },
    { name: "Sáb", receitas: 0, despesas: 250, saldo: -250 },
    { name: "Dom", receitas: 0, despesas: 180, saldo: -180 },
  ],
  "30d": [
    { name: "Sem 1", receitas: 5000, despesas: 2100, saldo: 2900 },
    { name: "Sem 2", receitas: 1200, despesas: 1800, saldo: -600 },
    { name: "Sem 3", receitas: 800, despesas: 1500, saldo: -700 },
    { name: "Sem 4", receitas: 500, despesas: 900, saldo: -400 },
  ],
};

const COLORS = [
  "#10B981",
  "#F59E0B",
  "#EF4444",
  "#8B5CF6",
  "#3B82F6",
  "#EC4899",
];

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  Moradia: Home,
  Alimentação: ShoppingBag,
  Transporte: Car,
  Lazer: Coffee,
  Salário: Wallet,
  Extra: DollarSign,
  Outros: Monitor,
};

// ==================== COMPONENTES BASE ====================

const StatCard = ({
  title,
  value,
  icon: Icon,
  colorClass,
  trend,
  trendUp = true,
}: any) => (
  <div className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl p-5 rounded-2xl border border-slate-700/50 shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 hover:scale-[1.02] overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="relative flex items-start justify-between">
      <div className="flex-1 min-w-0">
        <p className="text-slate-400 text-xs font-medium mb-1 truncate">
          {title}
        </p>
        <p className="text-white text-xl font-bold tracking-tight truncate">
          {value}
        </p>
        {trend && (
          <div className="flex items-center gap-1 mt-1.5">
            {trendUp ? (
              <ArrowUpRight className="w-3 h-3 text-emerald-400" />
            ) : (
              <ArrowDownRight className="w-3 h-3 text-rose-400" />
            )}
            <span
              className={`text-xs font-medium ${trendUp ? "text-emerald-400" : "text-rose-400"}`}
            >
              {trend}
            </span>
          </div>
        )}
      </div>
      <div
        className={`p-2.5 rounded-xl bg-gradient-to-br ${colorClass} shadow-lg flex-shrink-0`}
      >
        <Icon className="w-5 h-5 text-white" />
      </div>
    </div>
  </div>
);

const BudgetItem = ({ budget }: { budget: Budget }) => {
  const percentage = (budget.spent / budget.limit) * 100;
  const isOver = percentage >= 100;
  const isWarning = percentage >= 80 && percentage < 100;
  const Icon = budget.icon;

  const barColor = isOver
    ? "from-rose-500 to-pink-500"
    : isWarning
      ? "from-amber-500 to-orange-500"
      : "from-emerald-500 to-cyan-500";

  return (
    <div className="bg-slate-800/50 backdrop-blur-xl p-4 rounded-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-slate-700/50">
            <Icon className="w-4 h-4 text-slate-300" />
          </div>
          <div>
            <p className="text-white font-semibold text-sm">
              {budget.category}
            </p>
            <p className="text-slate-400 text-xs">
              R$ {budget.spent.toFixed(0)} / R$ {budget.limit.toFixed(0)}
            </p>
          </div>
        </div>
        <span
          className={`text-sm font-bold ${isOver ? "text-rose-400" : isWarning ? "text-amber-400" : "text-emerald-400"}`}
        >
          {percentage.toFixed(0)}%
        </span>
      </div>
      <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${barColor} rounded-full transition-all duration-500`}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        />
      </div>
      {isOver && (
        <p className="text-rose-400 text-xs mt-2 flex items-center gap-1">
          <AlertCircle className="w-3 h-3" />
          Orçamento excedido em R$ {(budget.spent - budget.limit).toFixed(0)}
        </p>
      )}
    </div>
  );
};

const GoalCard = ({ goal }: { goal: Goal }) => {
  const percentage = (goal.current / goal.target) * 100;
  const monthsLeft = Math.ceil(
    (new Date(goal.deadline).getTime() - Date.now()) /
      (1000 * 60 * 60 * 24 * 30),
  );
  const monthlyNeeded = (goal.target - goal.current) / Math.max(monthsLeft, 1);
  const Icon = goal.icon;

  return (
    <div className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl p-5 rounded-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:scale-[1.02]">
      <div className="flex items-start justify-between mb-4">
        <div
          className={`p-3 rounded-xl bg-gradient-to-br ${goal.color} shadow-lg`}
        >
          <Icon className="w-5 h-5 text-white" />
        </div>
        <span className="text-xs text-slate-400 bg-slate-700/50 px-2 py-1 rounded-full">
          {monthsLeft} meses
        </span>
      </div>
      <h4 className="text-white font-bold mb-1">{goal.name}</h4>
      <p className="text-slate-400 text-xs mb-3">
        R$ {goal.current.toLocaleString("pt-BR")} / R${" "}
        {goal.target.toLocaleString("pt-BR")}
      </p>
      <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden mb-3">
        <div
          className={`h-full bg-gradient-to-r ${goal.color} rounded-full transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="flex justify-between text-xs">
        <span className="text-slate-400">
          {percentage.toFixed(0)}% concluído
        </span>
        <span className="text-emerald-400 font-semibold">
          R$ {monthlyNeeded.toFixed(0)}/mês
        </span>
      </div>
    </div>
  );
};

// ==================== SIDEBAR ====================

const Sidebar = ({ currentPage, setPage, collapsed, setCollapsed }: any) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "budget", label: "Orçamentos", icon: PieIcon },
    { id: "goals", label: "Metas", icon: Target },
    { id: "ai", label: "IA Financeira", icon: Brain },
    { id: "insights", label: "Insights", icon: Sparkles },
  ];

  return (
    <aside
      className={`${collapsed ? "w-20" : "w-64"} bg-slate-900/80 backdrop-blur-xl border-r border-slate-800/50 transition-all duration-300 flex flex-col`}
    >
      <div className="p-4 flex items-center justify-between border-b border-slate-800/50">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500 rounded-lg blur-md opacity-50" />
              <div className="relative bg-gradient-to-br from-emerald-400 to-cyan-500 p-2 rounded-lg">
                <Wallet className="w-5 h-5 text-white" />
              </div>
            </div>
            <h1 className="text-lg font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              FinVibe AI
            </h1>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
        >
          {collapsed ? (
            <ChevronRight className="w-4 h-4 text-slate-400" />
          ) : (
            <ChevronLeft className="w-4 h-4 text-slate-400" />
          )}
        </button>
      </div>

      <nav className="flex-1 p-3 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${
                isActive
                  ? "bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-400 border border-emerald-500/30"
                  : "text-slate-400 hover:bg-slate-800/50 hover:text-white"
              } ${collapsed ? "justify-center" : ""}`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              {!collapsed && (
                <span className="text-sm font-medium">{item.label}</span>
              )}
            </button>
          );
        })}
      </nav>

      <div className="p-3 border-t border-slate-800/50">
        <div
          className={`flex items-center gap-3 p-2 rounded-xl hover:bg-slate-800/50 transition-colors cursor-pointer ${collapsed ? "justify-center" : ""}`}
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
            <User className="w-4 h-4 text-white" />
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-semibold truncate">
                Kelvin
              </p>
              <p className="text-slate-400 text-xs truncate">Plano Pro</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

// ==================== PÁGINAS ====================

const DashboardPage = ({
  transactions,
  balance,
  totalIncome,
  totalExpense,
}: any) => {
  const [cashFlowFilter, setCashFlowFilter] = useState<"7d" | "30d">("7d");

  const investments = 24000;
  const savings = 5000;
  const patrimony = balance + investments + savings;
  const monthlySavings = totalIncome - totalExpense;

  const expensesByCategory = useMemo(() => {
    return transactions
      .filter((t: Transaction) => t.type === "expense")
      .reduce(
        (acc: any, t: Transaction) => {
          acc[t.category] = (acc[t.category] || 0) + t.amount;
          return acc;
        },
        {} as Record<string, number>,
      );
  }, [transactions]);

  const chartData = Object.entries(expensesByCategory).map(
    ([name, value], index) => ({
      name,
      value,
      color: COLORS[index % COLORS.length],
    }),
  );

  return (
    <div className="space-y-6">
      {/* 6 Cards de Métricas */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <StatCard
          title="Saldo Atual"
          value={`R$ ${balance.toFixed(0)}`}
          icon={Wallet}
          colorClass="from-emerald-500 to-cyan-500"
          trend="+12%"
          trendUp={true}
        />
        <StatCard
          title="Receitas"
          value={`R$ ${totalIncome.toFixed(0)}`}
          icon={TrendingUp}
          colorClass="from-blue-500 to-indigo-500"
          trend="+8%"
          trendUp={true}
        />
        <StatCard
          title="Gastos"
          value={`R$ ${totalExpense.toFixed(0)}`}
          icon={TrendingDown}
          colorClass="from-rose-500 to-pink-500"
          trend="-5%"
          trendUp={false}
        />
        <StatCard
          title="Economia"
          value={`R$ ${monthlySavings.toFixed(0)}`}
          icon={PiggyBank}
          colorClass="from-purple-500 to-pink-500"
          trend="+15%"
          trendUp={true}
        />
        <StatCard
          title="Investimentos"
          value={`R$ ${investments.toLocaleString("pt-BR")}`}
          icon={Briefcase}
          colorClass="from-amber-500 to-orange-500"
          trend="+22%"
          trendUp={true}
        />
        <StatCard
          title="Patrimônio"
          value={`R$ ${patrimony.toLocaleString("pt-BR")}`}
          icon={Trophy}
          colorClass="from-cyan-500 to-blue-500"
          trend="+18%"
          trendUp={true}
        />
      </div>

      {/* Gráfico de Fluxo de Caixa */}
      <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl p-6 rounded-3xl border border-slate-700/50 shadow-2xl">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <PieIcon className="w-6 h-6 text-cyan-400" />
            Fluxo de Caixa
          </h3>
          <div className="flex gap-2">
            {["7d", "30d"].map((filter) => (
              <button
                key={filter}
                onClick={() => setCashFlowFilter(filter as any)}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  cashFlowFilter === filter
                    ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg"
                    : "bg-slate-700/50 text-slate-400 hover:bg-slate-700"
                }`}
              >
                {filter === "7d" ? "7 dias" : "30 dias"}
              </button>
            ))}
          </div>
        </div>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={CASH_FLOW_DATA[cashFlowFilter]}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis
                dataKey="name"
                stroke="#94A3B8"
                style={{ fontSize: "12px" }}
              />
              <YAxis stroke="#94A3B8" style={{ fontSize: "12px" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(15, 23, 42, 0.95)",
                  borderColor: "#334155",
                  borderRadius: "12px",
                  backdropFilter: "blur(8px)",
                }}
                itemStyle={{ color: "#F8FAFC" }}
              />
              <Legend wrapperStyle={{ fontSize: "12px" }} />
              <Bar dataKey="receitas" fill="#10B981" radius={[8, 8, 0, 0]} />
              <Bar dataKey="despesas" fill="#EF4444" radius={[8, 8, 0, 0]} />
              <Bar dataKey="saldo" fill="#3B82F6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Score Financeiro */}
      <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl p-6 rounded-3xl border border-slate-700/50 shadow-2xl">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Trophy className="w-6 h-6 text-amber-400" />
          Score Financeiro
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="flex flex-col items-center">
            <div className="relative w-48 h-48">
              <svg className="transform -rotate-90 w-full h-full">
                <circle
                  cx="96"
                  cy="96"
                  r="80"
                  stroke="#1E293B"
                  strokeWidth="16"
                  fill="none"
                />
                <circle
                  cx="96"
                  cy="96"
                  r="80"
                  stroke="url(#scoreGradient)"
                  strokeWidth="16"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 80}`}
                  strokeDashoffset={`${2 * Math.PI * 80 * (1 - 0.78)}`}
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="scoreGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#06B6D4" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  78
                </span>
                <span className="text-xs text-slate-400 mt-1">de 100</span>
              </div>
            </div>
            <p className="text-emerald-400 font-semibold mt-4">Excelente!</p>
          </div>
          <div className="space-y-3">
            {[
              {
                label: "Controle de Gastos",
                value: 85,
                color: "from-emerald-500 to-cyan-500",
              },
              {
                label: "Economia Mensal",
                value: 72,
                color: "from-blue-500 to-indigo-500",
              },
              {
                label: "Investimentos",
                value: 80,
                color: "from-purple-500 to-pink-500",
              },
              {
                label: "Metas Atingidas",
                value: 65,
                color: "from-amber-500 to-orange-500",
              },
            ].map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-300">{item.label}</span>
                  <span className="text-white font-semibold">
                    {item.value}%
                  </span>
                </div>
                <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const BudgetPage = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-bold text-white">Orçamento por Categoria</h2>
      <button className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold px-4 py-2 rounded-xl flex items-center gap-2 hover:scale-105 transition-all">
        <Plus className="w-4 h-4" /> Novo Orçamento
      </button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {BUDGETS.map((budget, idx) => (
        <BudgetItem key={idx} budget={budget} />
      ))}
    </div>
  </div>
);

const GoalsPage = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-bold text-white">Metas Financeiras</h2>
      <button className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold px-4 py-2 rounded-xl flex items-center gap-2 hover:scale-105 transition-all">
        <Plus className="w-4 h-4" /> Nova Meta
      </button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {GOALS.map((goal) => (
        <GoalCard key={goal.id} goal={goal} />
      ))}
    </div>
  </div>
);

const AIPage = () => {
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Olá! Sou sua IA financeira. Pergunte-me sobre seus gastos, economia, metas ou peça recomendações!",
    },
  ]);
  const [input, setInput] = useState("");

  const quickQuestions = [
    "Quanto gastei este mês?",
    "Onde posso economizar?",
    "Quando atingirei minha meta?",
    "Qual categoria mais cresceu?",
  ];

  const getAIResponse = (question: string): string => {
    const q = question.toLowerCase();
    if (q.includes("gastei") || q.includes("gasto"))
      return "Este mês você gastou R$ 2.400 no total. A categoria Alimentação foi a maior, com R$ 630 (26% do total).";
    if (q.includes("economizar"))
      return "Identifiquei 3 oportunidades: 1) Reduza delivery (R$ 180/mês), 2) Renegocie assinaturas (R$ 55/mês), 3) Otimize transporte (R$ 35/mês). Economia potencial: R$ 270/mês.";
    if (q.includes("meta"))
      return "No ritmo atual, você atingirá a Reserva de Emergência em 4 meses. Para o Notebook Novo, faltam 2 meses economizando R$ 1.400/mês.";
    if (q.includes("categoria") || q.includes("cresceu"))
      return "A categoria Alimentação cresceu 35% em relação ao mês passado, principalmente por causa de delivery (iFood).";
    if (q.includes("saldo") || q.includes("posso gastar"))
      return "Você pode gastar até R$ 2.600 até o final do mês mantendo sua meta de economia de R$ 2.400.";
    return "Com base nos seus dados, você está no caminho certo! Continue monitorando seus gastos e mantenha o ritmo de economia.";
  };

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    const userMsg = { role: "user", text };
    const aiMsg = { role: "ai", text: getAIResponse(text) };
    setMessages([...messages, userMsg, aiMsg]);
    setInput("");
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white flex items-center gap-2">
        <Brain className="w-7 h-7 text-purple-400" />
        IA Financeira
      </h2>

      <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl border border-slate-700/50 shadow-2xl overflow-hidden">
        <div className="h-[500px] flex flex-col">
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-4 rounded-2xl ${
                    msg.role === "user"
                      ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white"
                      : "bg-slate-700/50 text-slate-100 border border-slate-600/50"
                  }`}
                >
                  {msg.role === "ai" && (
                    <div className="flex items-center gap-2 mb-2">
                      <Brain className="w-4 h-4 text-purple-400" />
                      <span className="text-xs font-semibold text-purple-400">
                        FinVibe AI
                      </span>
                    </div>
                  )}
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-700/50 p-4 space-y-3">
            <div className="flex flex-wrap gap-2">
              {quickQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(q)}
                  className="text-xs bg-slate-700/50 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded-full transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
                placeholder="Pergunte sobre suas finanças..."
                className="flex-1 bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
              />
              <button
                onClick={() => handleSend(input)}
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white p-3 rounded-xl hover:scale-105 transition-all"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InsightsPage = ({ transactions, totalIncome, totalExpense }: any) => {
  const insights = useMemo(() => {
    const foodSpent = transactions
      .filter((t: Transaction) => t.category === "Alimentação")
      .reduce((a: number, t: Transaction) => a + t.amount, 0);
    const savings = totalIncome - totalExpense;
    const dailyAvg = totalExpense / 30;

    return [
      {
        icon: TrendingUp,
        title: "Delivery em alta",
        text: `Você gastou 35% mais com Delivery este mês (R$ 180).`,
        color: "from-rose-500 to-pink-500",
        bg: "from-rose-500/10 to-pink-500/10",
        border: "border-rose-500/20",
      },
      {
        icon: Trophy,
        title: "Patrimônio crescendo",
        text: "Seu patrimônio cresceu 8% no último trimestre.",
        color: "from-emerald-500 to-cyan-500",
        bg: "from-emerald-500/10 to-cyan-500/10",
        border: "border-emerald-500/20",
      },
      {
        icon: DollarSign,
        title: "Gasto médio diário",
        text: `Seu gasto médio diário é de R$ ${dailyAvg.toFixed(0)}.`,
        color: "from-blue-500 to-indigo-500",
        bg: "from-blue-500/10 to-indigo-500/10",
        border: "border-blue-500/20",
      },
      {
        icon: PiggyBank,
        title: "Economia positiva",
        text: `Você economizou R$ ${savings} este mês, mais que no mês anterior.`,
        color: "from-purple-500 to-pink-500",
        bg: "from-purple-500/10 to-pink-500/10",
        border: "border-purple-500/20",
      },
      {
        icon: Zap,
        title: "Projeção anual",
        text: "Se continuar nesse ritmo, economizará R$ 28.800 este ano.",
        color: "from-amber-500 to-orange-500",
        bg: "from-amber-500/10 to-orange-500/10",
        border: "border-amber-500/20",
      },
      {
        icon: Star,
        title: "Alimentação: maior gasto",
        text: `Alimentação representa ${((foodSpent / totalExpense) * 100).toFixed(0)}% dos seus gastos.`,
        color: "from-cyan-500 to-blue-500",
        bg: "from-cyan-500/10 to-blue-500/10",
        border: "border-cyan-500/20",
      },
    ];
  }, [transactions, totalIncome, totalExpense]);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white flex items-center gap-2">
        <Sparkles className="w-7 h-7 text-yellow-400" />
        Insights Inteligentes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {insights.map((insight, idx) => {
          const Icon = insight.icon;
          return (
            <div
              key={idx}
              className={`group bg-gradient-to-br ${insight.bg} backdrop-blur-xl p-5 rounded-2xl border ${insight.border} hover:scale-[1.02] transition-all duration-300`}
            >
              <div className="flex gap-4 items-start">
                <div
                  className={`p-2.5 rounded-xl bg-gradient-to-br ${insight.color} shadow-lg flex-shrink-0`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-white mb-1.5">
                    {insight.title}
                  </h4>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {insight.text}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ==================== APP PRINCIPAL ====================

export default function App() {
  const [transactions, setTransactions] =
    useState<Transaction[]>(INITIAL_TRANSACTIONS);
  const [currentPage, setCurrentPage] = useState<PageType>("dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState(NOTIFICATIONS);

  // Form State
  const [newDesc, setNewDesc] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newCategory, setNewCategory] = useState("Alimentação");
  const [newType, setNewType] = useState<TransactionType>("expense");
  const [newTags, setNewTags] = useState("");

  const unreadCount = notifications.filter((n) => !n.read).length;

  const { totalIncome, totalExpense, balance } = useMemo(() => {
    const income = transactions
      .filter((t) => t.type === "income")
      .reduce((acc, t) => acc + t.amount, 0);
    const expense = transactions
      .filter((t) => t.type === "expense")
      .reduce((acc, t) => acc + t.amount, 0);
    return {
      totalIncome: income,
      totalExpense: expense,
      balance: income - expense,
    };
  }, [transactions]);

  const handleAddTransaction = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDesc || !newAmount) return;
    const tags = newTags
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t);
    const newTransaction: Transaction = {
      id: Date.now().toString(),
      description: newDesc,
      amount: parseFloat(newAmount),
      type: newType,
      category: newType === "income" ? "Salário" : newCategory,
      date: new Date().toISOString().split("T")[0],
      tags,
    };
    setTransactions([newTransaction, ...transactions]);
    setIsModalOpen(false);
    setNewDesc("");
    setNewAmount("");
    setNewTags("");
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return (
          <DashboardPage
            transactions={transactions}
            balance={balance}
            totalIncome={totalIncome}
            totalExpense={totalExpense}
          />
        );
      case "budget":
        return <BudgetPage />;
      case "goals":
        return <GoalsPage />;
      case "ai":
        return <AIPage />;
      case "insights":
        return (
          <InsightsPage
            transactions={transactions}
            totalIncome={totalIncome}
            totalExpense={totalExpense}
          />
        );
      default:
        return (
          <DashboardPage
            transactions={transactions}
            balance={balance}
            totalIncome={totalIncome}
            totalExpense={totalExpense}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-slate-100 font-sans flex">
      {/* Background decorativo */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <Sidebar
        currentPage={currentPage}
        setPage={setCurrentPage}
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
      />

      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="sticky top-0 z-20 bg-slate-900/70 backdrop-blur-xl border-b border-slate-800/50 px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold text-white capitalize">
                {currentPage === "dashboard"
                  ? "Dashboard"
                  : currentPage === "budget"
                    ? "Orçamentos"
                    : currentPage === "goals"
                      ? "Metas"
                      : currentPage === "ai"
                        ? "IA Financeira"
                        : "Insights"}
              </h2>
              <p className="text-xs text-slate-400">
                Bem-vindo de volta, Kelvin 👋
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative hidden md:block">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Pesquisar..."
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl pl-10 pr-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 w-64"
                />
              </div>
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative p-2.5 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:bg-slate-800 transition-colors"
                >
                  <Bell className="w-5 h-5 text-slate-300" />
                  {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-rose-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                      {unreadCount}
                    </span>
                  )}
                </button>
                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden z-30">
                    <div className="p-4 border-b border-slate-700 flex justify-between items-center">
                      <h3 className="font-bold text-white">Notificações</h3>
                      <button
                        onClick={markAllAsRead}
                        className="text-xs text-emerald-400 hover:text-emerald-300"
                      >
                        Marcar todas como lidas
                      </button>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map((n) => (
                        <div
                          key={n.id}
                          className={`p-4 border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors ${!n.read ? "bg-slate-700/20" : ""}`}
                        >
                          <div className="flex gap-3">
                            <div
                              className={`p-2 rounded-lg flex-shrink-0 ${
                                n.type === "warning"
                                  ? "bg-amber-500/20 text-amber-400"
                                  : n.type === "success"
                                    ? "bg-emerald-500/20 text-emerald-400"
                                    : "bg-blue-500/20 text-blue-400"
                              }`}
                            >
                              {n.type === "warning" ? (
                                <AlertCircle className="w-4 h-4" />
                              ) : n.type === "success" ? (
                                <Trophy className="w-4 h-4" />
                              ) : (
                                <Lightbulb className="w-4 h-4" />
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold text-white truncate">
                                {n.title}
                              </p>
                              <p className="text-xs text-slate-400 mt-0.5">
                                {n.message}
                              </p>
                              <p className="text-xs text-slate-500 mt-1">
                                {n.time}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="group relative bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold px-4 py-2.5 rounded-xl flex items-center gap-2 transition-all shadow-lg shadow-emerald-500/25 hover:scale-105"
              >
                <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform" />
                <span className="hidden sm:inline">Nova Transação</span>
              </button>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-y-auto">{renderPage()}</main>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4">
          <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-3xl w-full max-w-md p-8 shadow-2xl">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="relative">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Nova Transação
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-slate-400 hover:text-white p-2 hover:bg-slate-800 rounded-xl"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <form onSubmit={handleAddTransaction} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setNewType("income")}
                    className={`py-3 rounded-xl font-semibold text-sm transition-all ${newType === "income" ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg" : "bg-slate-800 text-slate-400 border border-slate-700"}`}
                  >
                    Receita
                  </button>
                  <button
                    type="button"
                    onClick={() => setNewType("expense")}
                    className={`py-3 rounded-xl font-semibold text-sm transition-all ${newType === "expense" ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg" : "bg-slate-800 text-slate-400 border border-slate-700"}`}
                  >
                    Despesa
                  </button>
                </div>
                <input
                  type="text"
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  placeholder="Descrição"
                  className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                  required
                />
                <input
                  type="number"
                  step="0.01"
                  value={newAmount}
                  onChange={(e) => setNewAmount(e.target.value)}
                  placeholder="Valor (R$)"
                  className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                  required
                />
                {newType === "expense" && (
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                  >
                    <option>Alimentação</option>
                    <option>Moradia</option>
                    <option>Transporte</option>
                    <option>Lazer</option>
                    <option>Outros</option>
                  </select>
                )}
                <input
                  type="text"
                  value={newTags}
                  onChange={(e) => setNewTags(e.target.value)}
                  placeholder="Tags (separadas por vírgula)"
                  className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold py-3 rounded-xl hover:scale-105 transition-all"
                >
                  Salvar
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import Link from 'next/link'
import { LayoutDashboard, Users, FileText, AlertTriangle } from 'lucide-react'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const navItems = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Members', href: '/admin/members', icon: Users },
    { name: 'Relief Requests', href: '/admin/emergency-relief', icon: AlertTriangle },
    { name: 'Newsletters', href: '/admin/newsletters', icon: FileText },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row font-body">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-gray-900 text-white flex flex-col">
        <div className="p-6 border-b border-gray-800">
          <h2 className="text-xl font-heading font-bold text-gold tracking-widest uppercase">
            AWF Admin
          </h2>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
              >
                <Icon size={20} className="text-gold" />
                <span className="font-semibold">{item.name}</span>
              </Link>
            )
          })}
        </nav>
        <div className="p-4 border-t border-gray-800 text-sm text-gray-500 text-center">
          Anokha Welfare Foundation &copy; {new Date().getFullYear()}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          {children}
        </div>
      </main>
    </div>
  )
}

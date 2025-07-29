export default function AdminDashboard() {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      <p className="mt-4 text-gray-500">
        Willkommen im Admin-Bereich. Hier können Sie Ihre Website verwalten.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h2 className="text-lg font-medium text-gray-900">Kontaktanfragen</h2>
          <p className="mt-2 text-sm text-gray-500">
            Verwalten Sie eingehende Kontaktanfragen
          </p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h2 className="text-lg font-medium text-gray-900">Einstellungen</h2>
          <p className="mt-2 text-sm text-gray-500">
            Konfigurieren Sie Ihre Website-Einstellungen
          </p>
        </div>
      </div>
    </div>
  )
}

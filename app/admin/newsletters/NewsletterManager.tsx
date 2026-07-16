'use client'

import { useState } from 'react'
import { FileText, Link as LinkIcon, Plus, Trash2 } from 'lucide-react'

type NewsletterType = {
  id: string
  title: string
  fileUrl: string
  createdAt: string
}

export default function NewsletterManager({ initialNewsletters }: { initialNewsletters: NewsletterType[] }) {
  const [newsletters, setNewsletters] = useState(initialNewsletters)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ title: '', fileUrl: '' })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/admin/newsletters', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setNewsletters([data.data, ...newsletters])
        setForm({ title: '', fileUrl: '' })
        setShowForm(false)
      } else {
        alert(data.error || 'Failed to add newsletter')
      }
    } catch (error) {
      alert('An error occurred while adding the newsletter')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this newsletter?')) return
    
    try {
      const res = await fetch(`/api/admin/newsletters?id=${id}`, { method: 'DELETE' })
      const data = await res.json()
      if (res.ok && data.success) {
        setNewsletters(newsletters.filter(n => n.id !== id))
      } else {
        alert(data.error || 'Failed to delete newsletter')
      }
    } catch (error) {
      alert('An error occurred while deleting')
    }
  }

  return (
    <div className="space-y-6">
      {/* Action Bar */}
      <div className="flex justify-end">
        <button 
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 bg-gold text-white px-4 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition shadow-sm"
        >
          {showForm ? 'Cancel' : <><Plus size={20} /> Add Newsletter</>}
        </button>
      </div>

      {/* Add Form */}
      {showForm && (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gold/30 animate-fade-in">
          <h2 className="text-xl font-semibold mb-4">Upload New Newsletter</h2>
          <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Newsletter Title *</label>
              <input 
                type="text"
                required
                value={form.title}
                onChange={e => setForm({...form, title: e.target.value})}
                placeholder="e.g. July 2026 Edition"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">File URL *</label>
              <input 
                type="url"
                required
                value={form.fileUrl}
                onChange={e => setForm({...form, fileUrl: e.target.value})}
                placeholder="e.g. https://drive.google.com/..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold outline-none"
              />
              <p className="text-xs text-gray-500 mt-1">Provide a link to the PDF (like Google Drive or Dropbox).</p>
            </div>
            <button 
              type="submit"
              disabled={loading}
              className="bg-gray-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition disabled:opacity-50"
            >
              {loading ? 'Saving...' : 'Save Newsletter'}
            </button>
          </form>
        </div>
      )}

      {/* List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsletters.map(newsletter => (
          <div key={newsletter.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col hover:border-gold/50 transition">
            <div className="flex-1">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                <FileText size={24} />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-1">{newsletter.title}</h3>
              <p className="text-sm text-gray-500 mb-4">Added {new Date(newsletter.createdAt).toLocaleDateString()}</p>
            </div>
            
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
              <a 
                href={newsletter.fileUrl} 
                target="_blank" 
                rel="noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm font-semibold flex items-center gap-1"
              >
                <LinkIcon size={16} /> View File
              </a>
              <button 
                onClick={() => handleDelete(newsletter.id)}
                className="text-red-500 hover:text-red-700 p-1"
                title="Delete Newsletter"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}

        {newsletters.length === 0 && !showForm && (
          <div className="col-span-full py-12 text-center text-gray-500 bg-white rounded-xl border border-dashed border-gray-300">
            No newsletters uploaded yet.
          </div>
        )}
      </div>
    </div>
  )
}

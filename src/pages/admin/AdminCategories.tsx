import { useEffect, useState } from "react";
import { Plus, Edit2, Trash2, Save, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { BlogCategory } from "@/lib/api/types";
import { toast } from "sonner";

function generateSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function AdminCategories() {
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [editing, setEditing] = useState<string | null>(null);
  const [creating, setCreating] = useState(false);
  const [form, setForm] = useState({ name: "", slug: "", description: "" });
  const [loading, setLoading] = useState(true);

  const refresh = async () => {
    const res = await fetch("/api/admin/categories");
    if (res.ok) {
      const data = await res.json();
      setCategories(data);
    }
  };

  useEffect(() => {
    (async () => {
      await refresh();
      setLoading(false);
    })();
  }, []);

  const startCreate = () => {
    setCreating(true);
    setEditing(null);
    setForm({ name: "", slug: "", description: "" });
  };

  const startEdit = (cat: BlogCategory) => {
    setEditing(cat.id);
    setCreating(false);
    setForm({ name: cat.name, slug: cat.slug, description: cat.description });
  };

  const cancel = () => { setEditing(null); setCreating(false); };

  const handleSave = () => {
    if (!form.name.trim()) { toast.error("Name is required"); return; }
    const slug = form.slug || generateSlug(form.name);

    (async () => {
      if (creating) {
        const res = await fetch("/api/admin/categories", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.name,
            slug,
            description: form.description,
          }),
        });
        if (!res.ok) {
          toast.error("Failed to create category");
        } else {
          toast.success("Category created");
        }
      } else if (editing) {
        const res = await fetch(`/api/admin/categories/${editing}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.name,
            slug,
            description: form.description,
          }),
        });
        if (!res.ok) {
          toast.error("Failed to update category");
        } else {
          toast.success("Category updated");
        }
      }
      cancel();
      refresh();
    })();
  };

  const handleDelete = (id: string) => {
    if (!confirm("Delete this category?")) return;
    (async () => {
      const res = await fetch(`/api/admin/categories/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        toast.error("Failed to delete category");
      } else {
        toast.success("Category deleted");
        refresh();
      }
    })();
  };

  const inputClass = "w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-body placeholder:text-white/25 focus:outline-none focus:ring-2 focus:ring-accent/30";

  return (
    <div className="space-y-5 max-w-3xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-heading font-bold text-white">Categories</h1>
          <p className="text-sm font-body text-white/40">{categories.length} categories</p>
        </div>
        <button onClick={startCreate} className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent text-accent-foreground text-sm font-body font-semibold hover:opacity-90 transition-all">
          <Plus className="w-4 h-4" /> New Category
        </button>
      </div>

      {/* Create/Edit Form */}
      <AnimatePresence>
        {(creating || editing) && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-5 space-y-3">
              <h3 className="text-sm font-heading font-semibold text-white/70">
                {creating ? "New Category" : "Edit Category"}
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-body text-white/40 mb-1 block">Name</label>
                  <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value, slug: creating ? generateSlug(e.target.value) : form.slug })} placeholder="Category name" className={inputClass} />
                </div>
                <div>
                  <label className="text-xs font-body text-white/40 mb-1 block">Slug</label>
                  <input value={form.slug} onChange={e => setForm({ ...form, slug: e.target.value })} placeholder="category-slug" className={inputClass} />
                </div>
              </div>
              <div>
                <label className="text-xs font-body text-white/40 mb-1 block">Description</label>
                <input value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} placeholder="Brief description" className={inputClass} />
              </div>
              <div className="flex items-center gap-2 pt-2">
                <button onClick={handleSave} className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent text-accent-foreground text-sm font-body font-semibold hover:opacity-90 transition-all">
                  <Save className="w-3.5 h-3.5" /> Save
                </button>
                <button onClick={cancel} className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/5 text-white/50 text-sm font-body hover:bg-white/10 transition-all">
                  <X className="w-3.5 h-3.5" /> Cancel
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* List */}
      <div className="bg-white/[0.03] border border-white/5 rounded-2xl overflow-hidden">
        {loading ? (
          <div className="py-16 text-center">
            <p className="text-sm text-white/30 font-body">Loading categories...</p>
          </div>
        ) : categories.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-sm text-white/30 font-body">No categories yet</p>
          </div>
        ) : (
          <div className="divide-y divide-white/5">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.03 }}
                className="flex items-center justify-between px-5 py-4 hover:bg-white/[0.02] transition-colors"
              >
                <div>
                  <div className="text-sm font-body font-medium text-white/80">{cat.name}</div>
                  <div className="text-xs font-body text-white/30 mt-0.5">/{cat.slug} · {cat.description || "No description"}</div>
                </div>
                <div className="flex items-center gap-1">
                  <button onClick={() => startEdit(cat)} className="p-2 rounded-lg text-white/30 hover:text-accent hover:bg-accent/10 transition-all">
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>
                  <button onClick={() => handleDelete(cat.id)} className="p-2 rounded-lg text-white/30 hover:text-red-400 hover:bg-red-400/10 transition-all">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

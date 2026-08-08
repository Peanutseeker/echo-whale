export function StatusMessage({ title, children }: { title: string; children: string }) {
  return <section className="status-message" aria-live="polite"><strong>{title}</strong><p>{children}</p></section>
}

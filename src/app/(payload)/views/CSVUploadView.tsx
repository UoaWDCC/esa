import type { AdminViewServerProps } from 'payload'
export default function CSVUploadView({ initPageResult }: AdminViewServerProps) {
  const {
      req: { user },
    } = initPageResult
  
  if (!user) {
    return (
      <div>
        <p>You must be logged in to view this page.</p>
        <a href="/admin/login">Login</a>
      </div>
    )
  }

  return (
    <div>
    <h1>Upload CSV</h1>
    <form method="POST" encType="multipart/form-data">
        <input type="file" name="csvFile" accept=".csv" />
        <button type="submit">Upload</button>
    </form>
    </div>
  )
}
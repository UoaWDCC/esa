'use client'

export default function CSVForm() {
    const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault()
      const formData = new FormData(event.target as HTMLFormElement)
  
      try {
        const response = await fetch('/api/members/csv-upload', {
          method: 'POST',
          body: formData,
        })
  
        if (response.ok) {
          alert('CSV file uploaded successfully!')
        } else {
          alert('Failed to upload some rows in the CSV file')
        }
      } catch (error) {
        alert('An error occurred while uploading the file.')
      }
    }
  
    return (
      <div>
        <h1>Member CSV Upload</h1>
        <p>Upload your CSV file here.</p>

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <input type="file" name="file" accept=".csv" required />
          <button type="submit">Upload</button>
        </form>
      </div>
    )
    }
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
        <h3>Member CSV Upload</h3>
        <p>Upload your CSV file here.</p>

        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="flex flex-col gap-4 bg-white p-6 rounded shadow-md max-w-md mx-auto"
        >
          <input
            type="file"
            name="file"
            accept=".csv"
            required
            className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200 font-semibold"
          >
            Upload
          </button>
        </form>
      </div>
    )
    }
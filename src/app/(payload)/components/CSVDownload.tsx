"use client"

export default function CSVDownload() {
    async function handleDownload() {
        // Fetch members data from the API. limit to 10,000 records
        const res = await fetch('/api/members?limit=10000', { cache: 'no-store' });
        if (!res.ok) {
            alert('Failed to fetch members');
            return;
        }
        const data = await res.json();
        
        // Remove id, createdAt, and updatedAt fields from each member
        const members = data.docs.map(({ id, createdAt, updatedAt, ...rest }: any) => rest);

        // Check whether any members were returned
        if (!Array.isArray(members) || members.length === 0) {
            alert('No members found');
            return;
        }

        // Convert members to CSV format
        const keys = Object.keys(members[0]);
        const csvRows = [
            keys.join(','), // header
            ...members.map((row: any) =>
                keys.map(k => {
                    const val = row[k] ?? '';
                    // Escape double quotes
                    return `"${String(val).replace(/"/g, '""')}"`;
                }).join(',')
            )
        ];
        const csvContent = csvRows.join('\r\n');

        // Download CSV
        // Create a new Blob object using the CSV content, specifying the MIME type as 'text/csv'
        const blob = new Blob([csvContent], { type: 'text/csv' });

        // Generate a temporary URL for the Blob object
        const url = URL.createObjectURL(blob);

        // Create a temporary <a> element to trigger the download
        const a = document.createElement('a');
        a.href = url; // Set the href to the Blob URL
        a.download = 'members.csv'; // Set the desired file name

        // Append the <a> element to the document body
        document.body.appendChild(a);

        // Programmatically click the <a> element to start the download
        a.click();

        // Remove the <a> element from the document
        document.body.removeChild(a);

        // Revoke the Blob URL to free up resources
        URL.revokeObjectURL(url);
    }

    return (
        <div className="">
            <h3 className="mt-15">Members CSV Download</h3>
            <button
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={handleDownload}
                type="button"
            >
                Download Members CSV
            </button>
        </div>
    )
}
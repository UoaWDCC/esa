import * as React from 'react'

export interface EmailTemplateProps {
  name: string
  message: string
  email: string
  reason?: string
}

export function EmailPage({
  // parameters for the email
  name,
  message,
  email,
  reason = 'General Inquiry',
}: EmailTemplateProps) {
  const rows = [
    { field: 'Name', value: name },
    { field: 'Email', value: email },
    { field: 'Reason', value: reason },
    { field: 'Message', value: message },
  ]

  return (
    // Im gonna be honest this is AI slop cause I was focusing on getting the API to work
    // but it works and looks fine so I can live with it, although I did have to refine it
    <div
      style={{ fontFamily: 'Arial, sans-serif', fontSize: '13px', color: '#000', lineHeight: 1.4 }}
    >
      <h3 style={{ marginBottom: '12px' }}>
        A Contact Form has been recieved. The sender has submitted the following Information:
      </h3>
      <table
        style={{
          borderCollapse: 'collapse',
          width: '100%',
          maxWidth: '600px',
          marginBottom: '20px',
          fontSize: '13px',
        }}
        cellPadding={6}
        border={1}
      >
        <thead>
          <tr style={{ backgroundColor: '#e0e0e0' }}>
            <th style={{ textAlign: 'left', border: '1px solid #ccc', padding: '6px 12px' }}>
              Field:
            </th>
            <th style={{ textAlign: 'left', border: '1px solid #ccc', padding: '6px 12px' }}>
              Response:
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ field, value }, i) => (
            <tr key={field} style={{ backgroundColor: i % 2 === 0 ? '#fafafa' : 'transparent' }}>
              <td style={{ border: '1px solid #ccc', padding: '6px 12px', verticalAlign: 'top' }}>
                {field}
              </td>
              <td style={{ border: '1px solid #ccc', padding: '6px 12px', verticalAlign: 'top' }}>
                {value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

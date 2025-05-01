import type { AdminViewServerProps } from 'payload'

import { DefaultTemplate } from '@payloadcms/next/templates'
import { Gutter } from '@payloadcms/ui'
import React from 'react'
import { redirect } from 'next/navigation'

export default function CSVUploadView({
  initPageResult,
  params,
  searchParams,
}: AdminViewServerProps) {
  const {
    req: { user },
  } = initPageResult

  if (!user) {
    redirect('/admin/login')
  }
  return (
    <DefaultTemplate
      i18n={initPageResult.req.i18n}
      locale={initPageResult.locale}
      params={params}
      payload={initPageResult.req.payload}
      permissions={initPageResult.permissions}
      searchParams={searchParams}
      user={initPageResult.req.user || undefined}
      visibleEntities={initPageResult.visibleEntities}
    >
      <Gutter>
        <h1>CSV Upload</h1>
        <p>Upload your CSV file here.</p>
        <form method="POST" encType="multipart/form-data" action="/api/members/csv-upload">
          <input type="file" name="file" accept=".csv" required />
          <button type="submit">Upload</button>
        </form>
      </Gutter>
    </DefaultTemplate>
  )
}
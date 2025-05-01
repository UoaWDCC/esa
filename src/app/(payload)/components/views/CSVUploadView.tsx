import { DefaultTemplate } from '@payloadcms/next/templates'
import { Gutter } from '@payloadcms/ui'
import { AdminViewServerProps } from 'payload'
import CSVForm from '../CSVForm'
import { redirect } from 'next/navigation'

export default function CSVUploadView({
  initPageResult,
  params,
  searchParams,
}: AdminViewServerProps) {
  const { req: { user } } = initPageResult

  if (!user) {
    return (
      redirect('/admin/login')
    )
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
        <CSVForm />
      </Gutter>
    </DefaultTemplate>
  )
}

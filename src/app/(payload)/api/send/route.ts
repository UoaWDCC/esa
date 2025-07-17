import { EmailPage } from 'src/app/(frontend)/contact/_components/EmailPage'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY) // this doesnt work for some reason, during testing I had to use the key directly

export async function POST(request: Request) {
  // take the values from the client
  try {
    const values = (await request.json()) as {
      name: string
      message: string
      email: string
      reason?: string
    }
    // send the email
    const { data, error } = await resend.emails.send({
      from: 'Contact Form' + '<onboarding@resend.dev>',
      to: ['jwil862@aucklanduni.ac.nz'],
      subject: 'Contact Form Submission',
      // use the EmailPage component to render the email content
      react: EmailPage({
        name: values.name,
        message: values.message,
        email: values.email,
        reason: values.reason,
      }) as React.ReactElement,
    })

    // error handling
    if (error) {
      return Response.json({ error }, { status: 500 })
    }

    return Response.json(data)
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}

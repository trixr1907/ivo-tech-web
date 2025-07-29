import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name muss mindestens 2 Zeichen lang sein'),
  email: z.string().email('Bitte geben Sie eine gültige E-Mail-Adresse ein'),
  message: z.string().min(10, 'Nachricht muss mindestens 10 Zeichen lang sein'),
})

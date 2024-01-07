import { zodResolver } from '@hookform/resolvers/zod'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signUpForm = z.object({
  email: z.string().email()
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: {
      isSubmitting
    }
  } = useForm<SignUpForm>({
    resolver: zodResolver(signUpForm)
  })


  async function handleSignUp(data: SignUpForm) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast.success('Enviamos um link de autenticação para seu email.', {
        action: {
          label: 'Reenviar',
          onClick: () => handleSignUp(data)
        }
      })
    } catch (e) {
      toast.error('Não foi possível enviar o link para seu email.', {
        action: {
          label: 'Reenviar',
          onClick: () => handleSignUp(data)
        }
      })
    }
  }
  return (
    <>
      <Helmet title="Sign Up" />
      <div className='p-8'>
        <div className='w-[350px] flex flex-col justify-center gap-6'>
          <div className='flex flex-col gap-2 text-center'>
            <h1 className='text-2xl font-semibold tracking-tight'>
              Acessar painel
            </h1>
            <p className='text-sm text-muted-foreground'>
              Acompanhe os pedidos de venda pelo painel do parceiro
            </p>
          </div>

          <form
            className='space-y-4'
            onSubmit={handleSubmit(handleSignUp)}
          >
            <div className='space-y-2'>
              <Label htmlFor='email'>
                Email
              </Label>
              <Input
                id='email'
                type='email'
                {...register('email')}
              />
            </div>
            <Button
              disabled={isSubmitting}
              type='submit'
            >
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}

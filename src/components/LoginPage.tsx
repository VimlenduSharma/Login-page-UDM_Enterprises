// src/components/LoginPage.tsx
import React from 'react'
import LoginForm from './LoginForm'
import CompanyLogo from './CompanyLogo'
import { useToast } from '@/components/ui/use-toast'
import { Button } from '@/components/ui/button'

interface LoginPageProps {
  logoUrl?: string
  companyName?: string
}

const LoginPage: React.FC<LoginPageProps> = ({
  logoUrl,
  companyName = 'Your Company',
}) => {
  const { toast } = useToast()

  const handleLogin = (email: string, password: string) => {
    console.log('Login attempt', { email, password })
  }
  const handleForgotPassword = () =>
    toast({
      title: 'Password Reset',
      description: 'Password reset functionality will be implemented here.',
    })
  const handleSignUp = () => {
    window.location.href = '/signup'
  }
  const handleSocialLogin = (provider: string) =>
    toast({
      title: `${provider} Login`,
      description: `${provider} login functionality will be implemented here.`,
    })
  const handleContactUs = () =>
    toast({
      title: 'Contact Us',
      description: 'Contact us functionality will be implemented here.',
    })

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 relative overflow-hidden">
      {/* Background shapes (optional) */}
      <div className="login-shape w-[600px] h-[600px] rounded-full bg-login-medium-purple/30 -left-64 -top-64"></div>
      <div
        className="login-shape w-[500px] h-[500px] rounded-full bg-login-light-purple/20 -right-32 top-[10%]"
        style={{ animationDelay: '1s' }}
      ></div>
      <div
        className="login-shape w-[400px] h-[400px] rounded-full bg-purple-400/20 left-[10%] bottom-[5%]"
        style={{ animationDelay: '2s' }}
      ></div>

      {/* NavBar */}
      <header className="relative z-10 flex justify-between items-center px-8 py-4 bg-gray-900">
        <Button
          variant="ghost"
          className="text-white hover:bg-white/10"
          onClick={handleContactUs}
        >
          Contact Us
        </Button>
        <Button
          className="
            px-4 py-2 
            bg-gradient-to-r from-purple-600 to-pink-500 
            text-white 
            rounded-lg 
            shadow-md 
            hover:opacity-90 
            transition
          "
          onClick={handleSignUp}
        >
          Sign Up
        </Button>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center p-6 relative z-10">
        <div
          className="
            w-full max-w-md 
            p-8 lg:p-12 
            bg-gray-800 bg-opacity-90 
            rounded-3xl 
            shadow-2xl
          "
        >
          {/* Logo */}
          <CompanyLogo
            logoUrl={logoUrl}
            companyName={companyName}
            className="mb-8"
          />

          {/* Title */}
          <h1 className="text-center text-4xl font-bold text-white mb-8">
            Log in
          </h1>

          {/* Form */}
          <LoginForm
            onLogin={handleLogin}
            onForgotPassword={handleForgotPassword}
            onSignUp={handleSignUp}
            onSocialLogin={handleSocialLogin}
          />
        </div>
      </main>
    </div>
  )
}

export default LoginPage

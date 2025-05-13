import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, LogIn } from 'lucide-react';
import SocialLogin from './SocialLogin';

interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
  onForgotPassword: () => void;
  onSignUp: () => void;
  onSocialLogin: (provider: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  onLogin,
  onForgotPassword,
  onSignUp,
  onSocialLogin
}) => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast({ title: "Error", description: "Please fill in all fields", variant: "destructive" });
      return;
    }
    setIsLoading(true);
    try {
      await new Promise(res => setTimeout(res, 1000));
      onLogin(email, password);
      toast({ title: "Success", description: "You have successfully logged in" });
    } catch {
      toast({ title: "Error", description: "Invalid email or password", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-white">
            Email address or Username
          </label>
          <Input
            id="email"
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="username@example.com"
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 w-full transition-all duration-300"
            autoComplete="email"
          />
        </div>

        {/* Password */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium text-white">
              Password
            </label>
          </div>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 w-full pr-10 transition-all duration-300"
              autoComplete="current-password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
              tabIndex={-1}
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Remember me */}
        <div className="flex items-center">
          <Checkbox
            id="remember-me"
            checked={rememberMe}
            onCheckedChange={c => setRememberMe(!!c)}
            className="data-[state=checked]:bg-login-light-purple data-[state=checked]:border-login-light-purple"
          />
          <label htmlFor="remember-me" className="ml-2 text-sm text-white cursor-pointer">
            Remember me
          </label>
        </div>

        {/* Terms */}
        <p className="text-xs text-white/80">
          By continuing, you agree to the{' '}
          <a href="#" className="text-login-light-purple hover:underline">Terms of use</a>{' '}
          and{' '}
          <a href="#" className="text-login-light-purple hover:underline">Privacy Policy</a>.
        </p>

        {/* Submit */}
        <Button
          type="submit"
          disabled={isLoading}
          className="
            w-full flex items-center justify-center
            px-4 py-3
            bg-gradient-to-r from-purple-600 to-pink-500
            text-white font-medium
            rounded-lg shadow-md
            hover:opacity-90 transition
          "
        >
          {isLoading
            ? <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin mr-2" />
            : <LogIn className="h-5 w-5 mr-2" />
          }
          Log in
        </Button>

        {/* Forgot password */}
        <div className="text-center">
          <button
            type="button"
            onClick={onForgotPassword}
            className="text-sm text-white/80 hover:text-login-light-purple"
          >
            Forgot Password?
          </button>
        </div>

        {/* Sign up prompt */}
        <div className="text-center">
          <span className="text-sm text-white/80">
            Don't have an account?{' '}
            <button
              type="button"
              onClick={onSignUp}
              className="text-login-light-purple hover:underline font-medium"
            >
              Sign up
            </button>
          </span>
        </div>
      </form>

      {/* Social login buttons */}
      <SocialLogin onLogin={onSocialLogin} />
    </div>
  );
};

export default LoginForm;

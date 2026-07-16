import { useState } from 'react';
import { LogIn, UserPlus } from 'lucide-react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import AnimateOnScroll from '../components/ui/AnimateOnScroll';
import Input from '../components/ui/Input';
import { validateEmail } from '../utils/validation';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});

  useDocumentTitle(
    isLogin ? 'Login' : 'Register',
    'Access your SynthMindz account or create a new one.'
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!isLogin && !formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.password.trim()) newErrors.password = 'Password is required';
    else if (formData.password.length < 8) newErrors.password = 'Minimum 8 characters';
    if (!isLogin && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    alert(isLogin ? 'Login successful!' : 'Registration successful!');
  };

  return (
    <div className="py-16 lg:py-24 canvas-grid">
      <div className="max-w-md mx-auto px-4">
        <AnimateOnScroll>
          <div className="glass rounded-2xl p-8">
            <div className="flex mb-8 bg-surface-100 rounded-lg p-1">
              <button
                type="button"
                onClick={() => { setIsLogin(true); setErrors({}); }}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-md text-sm font-semibold transition-all duration-300 ${
                  isLogin
                    ? 'bg-white text-ink shadow-sm'
                    : 'text-ink-soft hover:text-ink'
                }`}
              >
                <LogIn className="w-4 h-4" />
                Login
              </button>
              <button
                type="button"
                onClick={() => { setIsLogin(false); setErrors({}); }}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-md text-sm font-semibold transition-all duration-300 ${
                  !isLogin
                    ? 'bg-white text-ink shadow-sm'
                    : 'text-ink-soft hover:text-ink'
                }`}
              >
                <UserPlus className="w-4 h-4" />
                Register
              </button>
            </div>

            <h2 className="text-2xl font-bold font-display text-ink mb-2 text-center">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="text-sm text-ink-soft text-center mb-6">
              {isLogin
                ? 'Sign in to access your SynthMindz strategy boards.'
                : 'Start building AI-powered content strategies today.'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <Input
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  placeholder="Your full name"
                  required
                />
              )}

              <Input
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                placeholder="your@email.com"
                required
              />

              <Input
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                error={errors.password}
                placeholder="••••••••"
                required
              />

              {!isLogin && (
                <Input
                  label="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  error={errors.confirmPassword}
                  placeholder="••••••••"
                  required
                />
              )}

              <button
                type="submit"
                className="w-full btn-glow bg-gradient-to-r from-primary to-primary-dark text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:brightness-110"
              >
                {isLogin ? 'Sign In' : 'Create Account'}
              </button>
            </form>

            {isLogin && (
              <p className="mt-4 text-center text-sm text-ink-soft">
                Don&apos;t have an account?{' '}
                <button
                  type="button"
                  onClick={() => { setIsLogin(false); setErrors({}); }}
                  className="text-primary-dark font-medium hover:underline"
                >
                  Register here
                </button>
              </p>
            )}
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
}

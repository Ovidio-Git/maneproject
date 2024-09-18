'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';



// Definición de tipos para los estados del formulario
interface LoginForm {
  username: string;
  password: string;
}

export default function LoginPage() {
  const [form, setForm] = useState<LoginForm>({ username: '', password: '' });
  const router = useRouter();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
      router.push('/');
  };

  return (
    <div className="min-h-screen flex justify-center items-start md:items-center p-8">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Welcome</CardTitle>
          <CardDescription>
            Please log in with your credentials.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <form onSubmit={handleLogin} className="w-full">
            <Input
              type="text"
              name="username"
              placeholder="Username"
              className="mb-4"
              value={form.email}
              onChange={handleInputChange}
              required
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              className="mb-4"
              value={form.password}
              onChange={handleInputChange}
              required
            />
            <Button className="w-full" type="submit">
              Sign in
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}

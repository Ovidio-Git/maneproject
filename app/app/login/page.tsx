'use client';

import React,{ useState } from 'react';
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
    setForm((prev:LoginForm) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin =  (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
      router.push('/');
  };

  return (
    <div className="min-h-screen flex">
      
      <div className="relative w-4/5 h-screen hidden lg:block">
        {/* logo section */}
        <div className="absolute top-10 w-full p-8  text-start text-white">
          <h1 className="text-3xl font-bold">Mane Logo</h1>
        </div>

        {/* "About Me" section */}
        <div className="absolute top-40 w-full p-8 text-start">
          <h2 className="text-xl  text-white font-semibold">About Us</h2>
          <p className="mt-2 text-white text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
        </div>

        {/* services section */}
        <div className="absolute bottom-0 w-full p-8">
          <div className="flex justify-between items-center space-x-4">
            {/* service 1 */}
            <div className="w-1/2 p-4 border-r border-white text-white">
              <h3 className="text-2xl font-semibold">Service 1</h3>
              <p className="mt-2 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
              </p>
            </div>

            {/* service 2 */}
            <div className="w-1/2 p-4 text-white">
              <h3 className="text-2xl font-semibold">Service 2</h3>
              <p className="mt-2 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
              </p>
            </div>
          </div>
        </div>

        {/* background image */}
        <img
          src="/background-login.jpg"
          alt="Placeholder Image"
          className="object-cover w-full h-full"
        />
       </div>



      <div className="w-2/5 flex justify-center items-center p-8 bg-gray-800">
        <Card className="w-full bg-gray-800" >
          <CardHeader>
            <CardTitle className="text-2xl text-white">Inicio de session</CardTitle>
            <CardDescription className="text-gray-500">
              Porfavor ingresa tus credenciales de usuario.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <form onSubmit={handleLogin} className="w-full">
              <Input
                type="text"
                name="username"
                placeholder="Nombre de usuario"
                className="mb-4"
                value={form.username}
                onChange={handleInputChange}
                required
              />
              <Input
                type="password"
                name="password"
                placeholder="Contraseña"
                className="mb-4"
                value={form.password}
                onChange={handleInputChange}
                required
              />
              <Button className="w-full border border-white-500" type="submit">
                Ingresar
              </Button>
            </form>
          </CardFooter>
        </Card>
      </div>

    </div>
  );
}

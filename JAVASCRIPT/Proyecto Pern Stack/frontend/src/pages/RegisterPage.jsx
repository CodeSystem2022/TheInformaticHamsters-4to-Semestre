import { Button, Card, Input } from "../components/ui";
import { useForm } from "react-hook-form";



function RegisterPage() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Aquí puedes manejar los datos del formulario, como enviarlos a un servidor
  };

  return (
    <div className= "h-[calc(100vh-64px)] flex items-center justify-center">
      <h3 className='text-2xl font-bold'>Registro</h3>
      <Card>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input {...register("name", { required: true })} placeholder="Ingrese su nombre" />
          {errors.name && <p>El nombre es requerido.</p>}

          <Input {...register("email", { required: true })} placeholder="Ingrese su email" type="email" />
          {errors.email && <p>El email es requerido.</p>}

          <Input {...register("password", { required: true })} placeholder="Ingrese su contraseña" type="password" />
          {errors.password && <p>La contraseña es requerida.</p>}

          <Button>Registrarse</Button>
        </form>

        </Card>
      
    </div>
  );
}

export default RegisterPage;

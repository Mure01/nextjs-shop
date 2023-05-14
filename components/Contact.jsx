import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { sendKontaktForm } from "../lib/api";
import Head from "next/head";
import { Services } from ".";
import { AiFillEnvironment } from "react-icons/ai";
import Link from "next/link";
const initValues = { name: "", email: "", subject: "", message: "" };

const initState = { isLoading: false, error: "", values: initValues };

export default function Contact() {
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});
  const [sended, setSended] = useState(false);


  const { values, isLoading, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendKontaktForm(values);
      setTouched({});
      setState(initState);
      setSended(true);
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (
    <>
    <Head>
          <title>Kontakt - Ideal namještaj</title>
        </Head>
<Container className="flex flex-wrap w-full">  
    <Heading className=" text-3xl w-full text-center uppercase font-semibold pt-5">IDEAL kontakt</Heading>

<Container className="w-full md:w-1/2 mt-8 mb-10">
    <Heading className=" text-2xl pb-5 w-full text-center uppercase font-semibold pt-5">  Potražite nas!</Heading>
    <h2 className=" flex items-center gap-2 w-10/12 m-auto text-xl pb-4"><AiFillEnvironment/>PC 96 Vitez</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d715.4547613355572!2d17.781989116531214!3d44.16958907485889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sbs!2sba!4v1672753061171!5m2!1sbs!2sba" width="100%" 
    height="400" allowfullscreen="" className="w-10/12 m-auto" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</Container>

<Container  className=" flex flex-col w-full md:w-1/2 items-center md:pl-11 mt-8 mb-10">
    <Heading className=" text-2xl pb-5 w-full text-center uppercase font-semibold pt-5">Kontaktirajte nas!</Heading>
      {error && (
        <Text color="red.300" my={4} className="text-[red]" fontSize="xl">
          {error}
        </Text>
      )}

      <FormControl isRequired isInvalid={touched.name && !values.name} mb={10} className="w-10/12 space-y-1 ">
        <FormLabel>Ime i prezime</FormLabel>
        <Input
          type="text"
          name="name"
          errorBorderColor="red.300"
          value={values.name}
          onChange={handleChange}
          onBlur={onBlur}
          placeholder="Ime Prezime"
          className=" border rounded-lg border-[#bdd]  w-full	m-auto pt-1 pb-1 pl-2 "
          />
        <FormErrorMessage className="text-[red]">*Obavezan unos</FormErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={touched.email && !values.email} mb={5} className="w-10/12 space-y-1 ">
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          errorBorderColor="red.300"
          value={values.email}
          onChange={handleChange}
          onBlur={onBlur}
          placeholder="mail@example.com"
          className=" border rounded-lg border-[#bdd] w-full	 pt-1 pb-1 pl-2 "
        />
        <FormErrorMessage className="text-[red]" >*Obavezan unos</FormErrorMessage>
      </FormControl>

      <FormControl
        mb={5}
        isRequired
        isInvalid={touched.subject && !values.subject}
        className="w-10/12 space-y-1 "
        >
        <FormLabel>Naslov</FormLabel>
        <Input
          type="text"
          name="subject"
          errorBorderColor="red.300"
          value={values.subject}
          onChange={handleChange}
          onBlur={onBlur}
          placeholder="Naslov"
          className=" border rounded-lg border-[#bdd]  w-full	 pt-1 pb-1 pl-2 "
          />
        <FormErrorMessage className="text-[red]" >*Obavezan unos</FormErrorMessage>
      </FormControl>
      
      <FormControl
        isRequired
        isInvalid={touched.message && !values.message}
        mb={5}
        className="w-10/12 space-y-1 "
        >
        <FormLabel>Poruka</FormLabel>
        <Textarea
          type="text"
          name="message"
          rows={4}
          errorBorderColor="red.300"
          value={values.message}
          onChange={handleChange}
          onBlur={onBlur}
          placeholder="Vaša poruka"
          className=" border rounded-lg border-[#bdd]  w-full	 pt-1 pb-1 pl-2 "
          />
        <FormErrorMessage className=" text-[red]">*Obavezan unos</FormErrorMessage>
      </FormControl>

      <Button
        variant="outline"
        colorScheme="blue"
        isLoading={isLoading}
        disabled={
          !values.name || !values.email || !values.subject || !values.message
        }
        onClick={onSubmit}
        className=" bg-background p-3 text-[#fff] uppercase text-xl pl-7 pr-7 w-10/12 m-0 md:w-1/4 md:px-20 rounded-lg"
        >
        Pošalji
      </Button>
      {sended && <h1 className="text-[green]">Uspjesno ste poslali poruku</h1>}
    </Container>
        </Container>
       <Services/>
        </>
  );
}

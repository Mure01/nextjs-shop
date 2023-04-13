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
  import { sendContactForm } from "../../../lib/api";
  
  const initValues = { name: "", email: "", subject: "", message: "", artikal: "" };
  
  const initState = { isLoading: false, error: "", values: initValues };
  
  export default function Home() {
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
        await sendContactForm(values);
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
      <Container  className=" flex flex-col items-center mt-8">
        <Heading className=" text-3xl">IDEAL narudžba</Heading>
        {error && (
          <Text color="red.300" my={4} className="text-[red]" fontSize="xl">
            {error}
          </Text>
        )}
  
        <FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
          <FormLabel>Ime i prezime</FormLabel>
          <Input
            type="text"
            name="name"
            errorBorderColor="red.300"
            value={values.name}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage className="text-[red]">*Obavezan unos</FormErrorMessage>
        </FormControl>
  
        <FormControl isRequired isInvalid={touched.email && !values.email} mb={5}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            errorBorderColor="red.300"
            value={values.email}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage className="text-[red]" >*Obavezan unos</FormErrorMessage>
        </FormControl>
  
        <FormControl
          mb={5}
          isRequired
          isInvalid={touched.subject && !values.subject}
        >
          <FormLabel>Naslov</FormLabel>
          <Input
            type="text"
            name="subject"
            errorBorderColor="red.300"
            value={values.subject}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage className="text-[red]" >*Obavezan unos</FormErrorMessage>
        </FormControl>




        <FormControl
          mb={5}
          isRequired
          isInvalid={touched.artikal && !values.artikal}
        >
          <FormLabel>Novi objekat</FormLabel>
          <Input
            type="text" 
            name="artikal"
            errorBorderColor="red.300"
            value={values.artikal}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <FormErrorMessage className="text-[red]">*Obavezan unos</FormErrorMessage>
        </FormControl>
  
        
        
        
        
        <FormControl
          isRequired
          isInvalid={touched.message && !values.message}
          mb={5}
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
        >
          Naruči
        </Button>
        {sended && <h1 className="text-[green]">Uspjesno ste poslali poruku</h1>}
      </Container>
    );
  }
  
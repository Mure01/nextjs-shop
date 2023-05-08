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
  
  export default function Buyform() {
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
<Container className="flex flex-wrap">
      <Heading className=" text-3xl w-full text-center uppercase font-semibold pt-5">IDEAL narudžba</Heading>
<Container  className=" flex flex-col w-full items-start pl-11  mt-8">
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
          mb={5}
          isRequired
          isInvalid={touched.artikal && !values.artikal}
          className="w-10/12 space-y-1 "
          >
          <FormLabel>Novi objekat</FormLabel>
          <Input
            type="text" 
            name="artikal"
            errorBorderColor="red.300"
            value={values.artikal}
            onChange={handleChange}
            onBlur={onBlur}
            placeholder="Naziv artikla"
            className=" border rounded-lg border-[#bdd]  w-full	 pt-1 pb-1 pl-2 "
            />
          <FormErrorMessage className="text-[red]">*Obavezan unos</FormErrorMessage>
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
          Naručite
        </Button>
        {sended && <h1 className="text-[green]">Uspjesno ste poslali poruku</h1>}
      </Container>
          </Container>
    );
  }
  
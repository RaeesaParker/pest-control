import { Button, Flex, FormControl, FormLabel, Input, Textarea, useToast } from "@chakra-ui/react"

export const ContactForm = () => {
  const toast = useToast()


  const onSubmit = (e: any) => {
    e.preventDefault();

    // Basic client-side validation
    const form = e.target as HTMLFormElement;
    const name = form.elements.namedItem("name") as HTMLInputElement;
    const email = form.elements.namedItem("email") as HTMLInputElement;
    const message = form.elements.namedItem("message") as HTMLInputElement;


    if (!name.value || !email.value || !message.value) {
      toast({
        title: "Error",
        description: "Please complete all lines of the form",
        status: "error",
        duration: 9000,
        isClosable: true,
        })
    }else{
      //handleSubmit(e);
    }
  };


  return (
    <Flex w="75%" justifyContent="center">
      <form onSubmit={onSubmit} style={{width: "100%"}}>
        <Flex gap="10" flexDirection="column" >
          <Flex gap="14"> 
            <FormControl isRequired>
              <FormLabel> Name </FormLabel>
              <Input        
                id="name"
                type="text" 
                name="name" 
                placeholder="Name"
                border="1px solid #718096"
              /> 
            </FormControl>

            <FormControl isRequired>
              <FormLabel> Email </FormLabel>
              <Input        
                id="email"
                type="email" 
                name="email" 
                placeholder="Email"
                border="1px solid #718096"              
              /> 
            </FormControl>
          </Flex>

          <FormControl isRequired>
            <FormLabel> Message </FormLabel>
            <Textarea
              id="message"
              name="message"
              placeholder="Message"
              border="1px solid #718096"
              />
          </FormControl>
          <Flex justifyContent="center">
            <Button 
              type="submit" 
              w="30%"
              bg="red.dark"
              _hover={{ backgroundColor: "red.light" }}
              color="tones.lightGrey"
            >
              Submit
            </Button>
          </Flex>
        </Flex>
      </form>
    </Flex>
  )
}
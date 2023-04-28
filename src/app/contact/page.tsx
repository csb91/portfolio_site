import ContactForm from "@/components/ContactForm";

export default function Contact() {

  return (
    <div className='container mx-auto justify-center max-w-6xl px-4'>
      <h1 className='text-4xl text-center'>
        Get In Touch!
      </h1>
      <p className='text-center mt-2 px-4 md:px-64'>
        I'm currently looking for new opportunities. Please feel free to reach out via the contact form or using one of the other methods listed.
      </p>
      <div className='container flex flex-col border-2 md:flex-row mt-6 p-4 justify-evenly'>
        <div className='mb-4 md:mb-0 md:mr-10 border-2 md:w-96'>
          <div>phone</div>
          <div>email</div>
        </div>
        <ContactForm />
      </div>
    </div>
  )
}
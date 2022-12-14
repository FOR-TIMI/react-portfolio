import React from 'react'
import Element from '../Element'
import {useFormik } from 'formik'
import {sendEmailSchema } from '../schemas'
import Map from '../Map'

function Contact() {


  const onSubmit = () => {
    console.log(`submitted`)
  }

  const {values,errors, handleBlur, handleChange, handleSubmit, touched} = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    },
    validationSchema: sendEmailSchema,
    onSubmit
  })
   


  return (
    <section id='contact' className='flex pt-44 md:pt-36 justify-between items-center h-full md:h-screen mb-6 md:mb-20 w-full'>

        <section className="flex flex-col md:[40%]">
            <section className="flex">
                <Element htmlElement='h2' />
                <h2 className='p-4 text-blue-500 text-2xl font-semibold '>Contact</h2>
            </section>
            <section className="flex w-full">
                <Element htmlElement='form'/>
                {/* form */}
                <form autoComplete='off' onSubmit={handleSubmit} className='py-10 pl-3 space-y-3 md:flex md:flex-col w-full'>               
                    <section className='md:flex md:space-x-2 md:space-y-0 w-10/12 md:w-full '>
                  
                    {/* Name  */}
                    <section className='h-full flex flex-col flex-grow w-100'>

                      {/* Name error message  */}
                      <section className="h-8 w-full">
                      {errors.name && touched.name && <p className='text-sm text-rose-500'>{errors.name}</p>}
                      </section>


                      <input 
                        type="text" 
                        className={`px-5 py-2 text-white flex-grow bg-transparent border border-blue-500 
                                  outline-none  transition-all duration-500 ease-in h-3/4 
                            ${errors.name && touched.name ? "border border-rose-500 text-rose-500" : "focus:border-none focus:outline-blue-500"}
                                  `}  
                        placeholder='Name' 
                        id='name'
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />

                    </section>
                    
                      {/* Email section  */}
                      <section className='h-full  flex flex-col  w-full'>
                          
                            {/* Email error message  */}
                            <section className="h-8 w-full">
                             {errors.email && touched.email && <p className='text-sm text-rose-500'>{errors.email}</p>} 
                            </section>
                           {/* Email  */}
                          <input type="email"  
                            className={`px-5 py-2 h-3/4 text-white flex-grow bg-transparent border border-blue-500 
                                  outline-none transition-all duration-500 ease-in w-full
                                ${errors.email && touched.email ? "border border-rose-500 text-rose-500" : "focus:border-none focus:outline-blue-500"}
                                    `}
                            id="email" 
                            placeholder='Email'
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}  
                          />
                      </section>

                   
                    </section>


                    {/* subject  */}
                    
                    {/* subject error message  */}
                    <section className="h-4">
                     {errors.subject && touched.subject && <p className='text-sm text-rose-500'>{errors.subject}</p>}
                    </section>

                    <input type="text" 
                     className={`px-5 py-2 flex-grow text-white bg-transparent border  border-blue-500 
                                 outline-none transition-all duration-500 ease-in w-[83%] md:w-[100%]
                                ${errors.subject && touched.subject ? "border border-rose-500 text-rose-500" : "focus:border-none focus:outline-blue-500"}
                               `}  
                     placeholder='Subject'
                     onChange={handleChange}
                     onBlur={handleBlur}  
                     id="subject"
                     value={values.subject}
                     />
                    

                    {/* message  */}
                    
                    {/* message error message  */}
                    {errors.message && touched.message && <p className='text-sm text-rose-500'>{errors.message}</p>}
                    <textarea 
                      type="text" 
                      className={`px-5 py-2 w-[83%]
                      text-white flex-grow bg-transparent border border-blue-500 
                      outline-none transition-all duration-500 ease-out md:w-[100%]
                      ${errors.message && touched.message ? "border border-rose-500 text-rose-500" : "focus:border-none focus:outline-blue-500"}
                      resize-none
                      ` } 
                      placeholder='Message' 
                      id='message'
                      cols={23}
                      rows={10}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      >
                      
                    </textarea> 

                    {/* Send message  */}
                    <button 
                    className='text-blue-500 w-40 mt-5  px-5 py-2 duration-500 transition-all ease-in border  border-blue-500 hover:bg-blue-500 hover:text-white'
                    type='submit'
                    >
                    Send message
                    </button>
            
                </form>
            </section>
        </section>
    
        <section className='hidden lg:block  lg:w-1/2 lg:h-[80vh]'>
              <Map/>
        </section>
    </section>
  )
}

export default Contact
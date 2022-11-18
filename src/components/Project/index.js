import React from 'react'


function Project({name, link, tools}) {

    const images = { 
         'Berg Maps' : require('../../assets/Images/Berg.png'),
         'Quiz app'  : require('../../assets/Images/Quiz.png'),
         'weather app' : require('../../assets/Images/weatherApp.png'),
         'weBlog'    : require('../../assets/Images/weBlog.png'),
         'AutoAuto' : require('../../assets/Images/AutoAuto.png')
    }

  return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <section className='bg-[#181818] cursor-pointer shadow-sm hover:shadow-md ease-in transition-all duration-300 hover:bg-[#282828] rounded-md w-[204px] h-[285px] flex flex-col items-center m-3 p-3'>
                    {/* Project image  */}
                    <section className=' mb-3 '>
                        <section className=" w-[174px] h-[174px] rounded-md shadow-2xl shadow-black">
                                <img className='h-full w-full object-cover rounded-md ' src={images[name]} alt={name}/>
                                <img src="" alt=""/>
                        </section>

                    </section>
                    {/* Project title, name */}
                    <section className='w-[174px] py-3'>
                        <h3 className="text-white">{name}</h3>
                        <p className="text-sm">  {tools.length > 18 ?
                            `${tools.substring(0, 18)}...` : tools
                        }
                        </p>
                    </section>
                </section>
        </a>
  )
}

export default Project
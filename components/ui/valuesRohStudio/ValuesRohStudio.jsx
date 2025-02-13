"use client"
import { AuthFetchrohStudioValue } from '@/utils/FetchSeries.js'

const ValuesRohStudio = () => {  
  const { data, loading } = AuthFetchrohStudioValue();  

  return (    
    <section className='py-pp_80 dark:bg-dark'>      
      <div className="container mx-auto px-4">        
        <div className='text-center dark:text-white'>            
          <h1>قيم روح استديو</h1>        
        </div>        
        <div className='grid grid-cols-1 md:grid-cols-2 pt-14 gap-8'>          
          {data?.map((item, index) => (
            <div key={item?.id} className='flex h-[165px] w-full gap-4 bg-[#F5F5F5] p-6 rounded-lg shadow-md'>                         
              <div className='w-[8%] h-[45px] rounded-lg relative bg-primary flex items-center justify-center'>                       
                <span className='text-xl font-bold text-white'>{`0${index + 1}`}</span>                          
              </div>                         
              <div className='w-[92%]'>                             
                <h4 className='font-bold text-[16px]'>{item?.title}</h4>                             
                <p className='text-grayColor mt-1 text-[14px]'>{item?.description}</p>                         
              </div>                     
            </div>
          ))}        
        </div>      
      </div>    
    </section>  
  ) 
}  

export default ValuesRohStudio;


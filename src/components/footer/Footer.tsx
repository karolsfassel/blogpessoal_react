import { FacebookLogoIcon,  InstagramLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react'
import { AuthContext } from '../../contexts/AuthContext'
import { useContext, type ReactNode } from 'react'

function Footer(){
    let data = new Date().getFullYear()

    const {usuario} = useContext(AuthContext)

    let component:ReactNode 

    if(usuario.token !== ""){
        component =(
    
    
        <div className ='flex justify-center  text-white
       bg-gradient-to-r from-sky-400 via-sky-300 to-pink-400 '
        >
            <div className='container flex flex-col items-center py-4'>
                <p className='text-x1 font-bold'>
                    Blog Pessoal Generation | Copyright: {data}
                </p>
                <p className='text-lg'> Acesse nossas redes sociais</p>
                <div className='flex gap-2'>
                    <a href="https://www.linkedin.com/in/karolinesfdev/" target="_blank">
                      <LinkedinLogoIcon size={48} weight='bold'/>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                        <InstagramLogoIcon size={48} weight='bold'/>
                    </a>

                    <a href="https://www.facebook.com/" target="_blank">
                    <FacebookLogoIcon size={48} weight='bold'/>
                    </a>
                </div>
            </div>
        </div>
        )    
}
return(
    <>
    {component}
    </>
)
}

export default Footer
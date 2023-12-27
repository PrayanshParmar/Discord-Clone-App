const AuthLayout = ({children}:{children: React.ReactNode}) => {
    return (  
        <div className=" text-zinc-600  h-full flex items-center justify-center font-bold text-3xl" >
            {children}
        </div>
    );
}
 
export default AuthLayout;
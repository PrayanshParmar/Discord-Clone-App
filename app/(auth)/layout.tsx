const AuthLayout = ({children}:{children: React.ReactNode}) => {
    return (  
        <div className=" bg-sky-100 h-full flex items-center justify-center font-bold text-3xl" >
            {children}
        </div>
    );
}
 
export default AuthLayout;
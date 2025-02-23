const AuthLayout = ({children}: {
  children: React.ReactNode
}) => {
  return ( 
    <div className="flex justify-center items-center h-full bg-blue-100">
      {children}
    </div>
   );
}
 
export default AuthLayout;
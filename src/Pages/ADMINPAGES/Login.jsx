import React, {useState} from 'react';
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginAuth } from '../../App/AuthSlice';
import { useFormPost } from '../../hooks/FormDataHoook';
import { UserUrls } from '../../utils/apis';

const Login = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [ErrorMsg, setErrorMsg] = useState('');
    const [loading, setloading] = useState(false);
    const formPost = useFormPost();
    const navigate = useNavigate();
    const dispatch =  useDispatch()

    const handleSubmit = async (event) => {
        localStorage.clear()
        event.preventDefault();
        const body = {
          username: email,
          password: password
        };
        setloading(true)
        try {
    
          const response = await formPost.post({
            url: UserUrls.userLogin,
            data: body,
            login:true
          });

          
          const localStorageUser = {id:response.user, role:response.user.role}
    
          localStorage.setItem("user", JSON.stringify(localStorageUser));
          const userdata = {user:response.user, token:response.token}
          localStorage.setItem("token", response.token);
          dispatch(loginAuth({ ...userdata }));
          setemail("");
          setpassword("");
    
          if (response) {
            navigate("/acts/admin/AdminHome");
          } else {
            navigate("/account");
          }

    
        } catch (error) {
            
          if (!error?.respose) {
            setErrorMsg("No server respose or invalid login credentials try again!");
          } else if (error.respose?.status === 400) {
            setErrorMsg("incorrect password or email ");
          } else {
            setErrorMsg("login failed try again later");
          }
        }
        setloading(false)
      };
   
  return (
    <div>
        <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
          <img className="w-8 h-8 mr-2" src={logo} alt="logo"/>
          Acts    
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to  Acts admin
              </h1>
              <h3 className='text-red-700'>{ErrorMsg}</h3>
              <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
                      <input type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name" required
                           value={email}
                           onChange={(e) => setemail(e.target.value)}
                      />
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required
                           value={password}
                           onChange={(e) => setpassword(e.target.value)}
                      />
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 " required />
                          </div>
                          <div className="ml-3 text-sm">
                            <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      {/* <a href="#" className="text-sm font-medium text-primary-600 hover:underline ">Forgot password?</a> */}
                  </div>
                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-purple-500">
                    
                    {loading? "Signing in..." : "Sign in"}</button>
              </form>
          </div>
      </div>
  </div>
</section>
    </div>
  )
}

export default Login
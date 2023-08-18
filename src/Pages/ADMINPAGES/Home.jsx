import { HiUser } from "react-icons/hi";
import React,{useState, useEffect} from "react";
import Page from "../../components/adminComponents/Page";
import PageHeader from "../../components/adminComponents/PageHeader";
import { useDataFetch } from "../../hooks/DataHook";
import { UserUrls } from "../../utils/apis";
import Typography from "../../components/adminComponents/Typography";


export default function AdminHomePage() {
  console.log('dfajfpoiafeafda')
  const[optimizationData, setOptimizationData] = React.useState(null);
  const fetcher = useDataFetch();
  const [data, setdata] = useState();
  const [isLoading, setisLoading] = useState(false);

  const loadData = async () => {
    setisLoading(true);
    const response = await fetcher.fetch({ url: UserUrls.Dashboard });
    console.log(response);
    if (response) {
      setdata(response);
      setisLoading(false);
    }
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <Page className="w-full h-[100%] bg-white">
      <PageHeader>
        <Typography variant='h1'>Home</Typography>
      </PageHeader>
  
       
      <div class="grid md:grid-cols-3 sm:grid-cols-1 gap-4 justify-center p-3  ">
  <div class="container mx-auto pr-4">
    <div class="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
      <div class="h-20 bg-red-400 flex items-center justify-between">
        <p class="mr-0 text-white text-lg pl-5">NO OF APPLICATIONS</p>
      </div>
      <div class="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
        <p>TOTAL</p>
      </div>
      <p class="py-4 text-3xl ml-5">{data?.number_applications}</p>
    </div>
  </div>
     
  <div class="container mx-auto pr-4">
    <div class="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
      <div class="h-20 bg-blue-500 flex items-center justify-between">
        <p class="mr-0 text-white text-lg pl-5">NO OF USERS FEEDBACKS</p>
      </div>
      <div class="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
        <p>TOTAL</p>
      </div>
      <p class="py-4 text-3xl ml-5">{data?.number_contacts}</p>
    </div>
  </div>
    
  <div class="container mx-auto pr-4">
    <div class="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
      <div class="h-20 bg-purple-400 flex items-center justify-between">
        <p class="mr-0 text-white text-lg pl-5">NO OF EVENTS</p>
      </div>
      <div class="flex justify-between pt-6 px-5 mb-2 text-sm text-gray-600">
        <p>TOTAL</p>
      </div>
      <p class="py-4 text-3xl ml-5">{data?.number_events}</p>
    </div>
  </div>
{/*  
  <div class="container mx-auto">
    <div class="w-72 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
      <div class="h-20 bg-purple-900 flex items-center justify-between">
        <p class="mr-0 text-white text-lg pl-5">BT TODAY'S SUBSCRIPTION</p>
      </div>
      <div class="flex justify-between pt-6 px-5 mb-2 text-sm text-gray-600">
        <p>TOTAL</p>
      </div>
      <p class="py-4 text-3xl ml-5">0</p>
    </div>
  </div> */}
</div>
        
      

    </Page>
  )
}

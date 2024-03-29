import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import { useDataFetch } from "../hooks/DataHook";
import { UserUrls } from "../utils/apis";
import PageHeroSection from "../components/PageHeroSection";
import { EventData } from './Home';
import QuickLinks from '../components/QuickLinks';
import { Typography } from "@material-tailwind/react";
import Empty from '../components/adminComponents/Empty';

const AllEvents = () => {
    const fetcher = useDataFetch();
    const [blogs, setBlogs] = useState();
    const navigate = useNavigate();
    const [isLoading, setisLoading] = useState(false);
  
    const loadData = async () => {
      setisLoading(true);
      const response = await fetcher.fetch({ url: UserUrls.Events });
      
      if (response) {
        setBlogs(response);
        setisLoading(false);
      }
    };
    useEffect(() => {
      loadData();
    }, []);

   
    
  return (
    <div>
    <PageHeroSection title="Acts all events"/>
    <div className="flex flex-wrap justify-around mt-16 shadow-sm ">
    <div className="shadow-md p-5 sm:w-full">
        <Typography variant="h6">
            {" "}
            <strong>All Events, News and Upadets </strong>
          </Typography>
          {!blogs || !blogs.length && (
        <div className="'flex justify-center items-center'">
          <Empty message="There are no events at the moment." />
  
        </div>
      )}
        {isLoading? <div className="max-w-full animate-pulse mt-5">
                <Typography
                  as="div"
                  variant="paragraph"
                  className="mb-2 h-12 w- rounded-sm bg-gray-300"
                >
                  &nbsp;
                </Typography>
                <Typography
                  as="div"
                  variant="paragraph"
                  className="mb-2 h-12 w- rounded-sm bg-gray-300"
                >
                  &nbsp;
                </Typography>
                <Typography
                  as="div"
                  variant="paragraph"
                  className="mb-2 h-12 w- rounded-sm bg-gray-300"
                >
                  &nbsp;
                </Typography>
                <Typography
                  as="div"
                  variant="paragraph"
                  className="mb-2 h-12 w- rounded-sm bg-gray-300"
                >
                  &nbsp;
                </Typography>
                
              </div>: 
            blogs
              ?.slice(0, 3)
              .map((blog) => <EventData event={blog} />)}
          
      
        </div>

    </div>    
    {/* <QuickLinks /> */}
        </div>
  )
}

export default AllEvents
import React, { useState, useEffect } from "react";
import Button from "../../components/adminComponents/Button";
import Card from "../../components/adminComponents/Card";
import CardBody from "../../components/adminComponents/CardBody";
import Empty from "../../components/adminComponents/Empty";
import Page from "../../components/adminComponents/Page";
import PageBody from "../../components/adminComponents/PageBody";
import PageHeader from "../../components/adminComponents/PageHeader";
import Typography from "../../components/adminComponents/Typography";
import { useNavigate } from "react-router-dom";
import { UserUrls } from "../../utils/apis";
import { useDataFetch } from "../../hooks/DataHook";
import { baseUrl } from "../../utils/BaseUrl";
// import ProductModal from "./BlogModal";

function BlogCards({ blog }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [CurrentBlog, setCurrentBlog] = useState();
  const [showMore, setShowMore] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState("");
  const fetcher = useDataFetch()
  function closeProductModal() {
    setModalOpen(false);
  }

  function openProductModal() {
    setModalOpen(true);
  }

  function openModal() {
    console.log("open modal");
    setModalOpen(true);
  }

  const handle_delete =async (id) => {
    alert("Are you sure you want to delete!")
    const response = await fetcher.fetch({ url: UserUrls.EventsActions + id });
    console.log(response);
    if (response.delete) {
      window.location.reload()
    }
    //delete
  };

  return (
    <div class="lg:flex">
      <img
        class="object-cover w-full h-56 rounded-lg lg:w-64"
        src={baseUrl+blog?.image}
        alt=""
      />

      <div class="flex flex-col justify-between py-6 lg:mx-6">
        <a
          href="#"
          class="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
        >
          {blog?.title}
        </a>
        <span class="text-sm text-gray-500 dark:text-gray-300">
          On: {blog?.date}-{blog?.time}
        </span>
        <div>
          <Button color="warning">edit</Button>
          <Button color="error" onClick={()=>handle_delete(blog.id)}>Delete</Button>
        </div>
      </div>
    </div>
  );
}

export default function Blogs() {
  //user
  const fetcher = useDataFetch();
  const [blogs, setBlogs] = useState();
  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState(false);

  const loadData = async () => {
    setisLoading(true);
    const response = await fetcher.fetch({ url: UserUrls.Events });
    console.log(response);
    if (response) {
      setBlogs(response);
      setisLoading(false);
    }
  };
  useEffect(() => {
    loadData();
  }, []);

  //fetch blogs
  if (isLoading) return <h1>Loading.....</h1>;
  if (!blogs || !blogs.length) {
    return (
      <div className="'flex justify-center items-center'">
        <Empty message="You don't have any Blogs yet." />
        <Button
          color="primary"
          onClick={() => {
            navigate("/acts/admin/create_events");
          }}
          className=""
        >
          Create Event
        </Button>
      </div>
    );
  }
  return (
    <Page>
      <PageHeader
        extra={
          <Button
            color="primary"
            onClick={() => {
              navigate("/acts/admin/create_events");
            }}
          >
            Create event
          </Button>
        }
      >
        <Typography variant="h1">Events</Typography>
      </PageHeader>
      <PageBody>
        <section class="bg-white dark:bg-gray-900">
          <div class="container px-6 py-10 mx-auto">
            <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
              All acts events
            </h1>

            <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
              {blogs && blogs.reverse().map((blog) => <BlogCards blog={blog} />)}
            </div>
          </div>
        </section>
      </PageBody>
    </Page>
  );
}

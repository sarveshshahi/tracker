import React from "react";
import  { useState ,useRef  } from 'react';
import  "./app.css";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

function App() {
  const [openNav, setOpenNav] = React.useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const featureRef = useRef(null)
  const homeref=useRef(null)

  const pricingref = useRef(null)
  const contactref = useRef(null)
  const faqref = useRef(null)

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const faqData = [
    {
      question: 'How to create an account?',
      answer: 'To create an account, find the "Sign up" or "Create account" button, fill out the registration form with your personal information, and click "Create account" or "Sign up." Verify your email address if needed, and then log in to start using the platform.'
    },
    {
      question: 'Have any trust issue?',
      answer: 'Our focus on providing robust and user-friendly content management capabilities ensures that you can manage your content with confidence, and achieve your content marketing goals with ease.'
    },
    {
      question: 'How can I reset my password?',
      answer: 'Our focus on providing robust and user-friendly content management capabilities ensures that you can manage your content with confidence, and achieve your content marketing goals with ease.'
    },
    {
      question: 'What is the payment process?',
      answer: 'Our focus on providing robust and user-friendly content management capabilities ensures that you can manage your content with confidence, and achieve your content marketing goals with ease.'
    }
  ];

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-bold"
      >
        <a href="#" onClick={()=>scrollToSection(homeref)} className="flex items-center font-bold ">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <a href="#" onClick={()=>scrollToSection(featureRef)} className="flex items-center font-bold">
          Feature
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <a href="#" className="flex items-center font-bold" onClick={()=>scrollToSection(pricingref)}>
          Pricing
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <a href="#" className="flex items-center font-bold" onClick={()=>scrollToSection(faqref)}>
         FAQ
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <a href="#" className="flex items-center font-bold" onClick={()=>scrollToSection(contactref)}>
          Contact Us
        </a>
      </Typography>
    </ul>
  );

  return (
    <>
      <Navbar className="mx-auto max-w-screen-2xl px-0 py-0 lg:px-1 lg:py-1">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium flex items-center"
          >
            <img src="../logo25.png" alt="Logo" className="mr-2" />
            <h2 className="font-bold">Mozility Tracker</h2>
          </Typography>

          <div className="hidden lg:block">{navList}</div>
          <div className="flex items-center gap-x-1">
            <Button variant="text" size="sm" className="hidden lg:inline-block">
              <span>Log In</span>
            </Button>
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block"
            >
              <span>Sign in</span>
            </Button>
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <MobileNav open={openNav}>
          <div className="container mx-auto">
            {navList}
            <div className="flex items-center gap-x-1">
              <Button fullWidth variant="text" size="sm" className="">
                <span>Log In</span>
              </Button>
              <Button fullWidth variant="gradient" size="sm" className="">
                <span>Sign in</span>
              </Button>
            </div>
          </div>
        </MobileNav>
      </Navbar>

      <div className="w-full h-auto relative flex flex-col md:flex-row bg-gradient-to-r from-[#8358b3] to-[#0b70d0]" ref={homeref}>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            className="object-cover object-center w-full md:w-10/12"
            src="../homeimg.gif"
            alt="nature image"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-3 text-white">
          <h3 className="text-2xl md:text-4xl p-5 md:p-4 font-bold text-center">
            Employee Monitoring Software
          </h3>
          <p className="text-lg md:text-xl font-normal text-center">
            Employee tracking software that tells you exactly how your employees
            use their time. Get powerful data for a more productive and
            efficient team.
          </p>
          <div>
            <Button
              variant="outlined"
              className="rounded-full text-white border-white-500 mt-5 md:mt-10"
            >
              Demo
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full items-center justify-center">
        <div className="p-8 md:p-16 font-semibold text-lg md:text-xl">
          210,00+ users from all around the world already use Mozility Tracker
        </div>
        <div className="flex flex-wrap gap-10 md:gap-20 p-8 md:p-14">
          <div>
            <img src="../supreme_logo.png" alt="" className="h-16" />
          </div>
          <div>
            <img src="../falcon-logo.png" alt="" className="h-16" />
          </div>
          <div>
            <img src="../forace-logo.png" alt="" className="h-16" />
          </div>
          <div>
            <img src="../eneos-logo.png" alt="" className="h-16" />
          </div>
          <div>
            <img src="../supreme_logo.png" alt="" className="h-16" />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-wrap  px-4 py-4">
        <div className="w-full md:w-1/2 flex justify-center items-center p-4">
          <img src="../client.png" alt="Clients" className="w-3/4 max-w-full" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-black px-4">
          <h5 className="text-2xl  md:text-2xl p-3 md:p-5 font-bold text-center">
            Overall 5000+ Clients! Get Started Now
          </h5>
          <p className="text-lg md:text-lg font-normal text-center p-3">
            Our Location-based Attendance, Live Tracking, Meeting Notes,
            Distance Traveled, Total Productive Hours, and Reports have
            revolutionized their day-to-day business activities from their past
            outdated methods in managing the workforce. The data generated from
            the real-time employee tracking app have helped our customers in
            taking real-time tactical decisions and smart planning for their
            teams to serve their end customers better.
          </p>
        </div>
      </div>

      <div className="bg-[#e2edf7] flex flex-col w-full items-center justify-center md:p-7 p-4 py-6" ref={featureRef}>
        <h2 className="md:p-6 p-4 md:px-10 font-semibold text-4xl md:text-4xl">
          Feature
        </h2>
        <div className="font-normal text-lg md:text-lg text-center">
          Learn about the features that will streamline your field operations
        </div>

        <div className="w-full flex flex-wrap md:px-20 md:my-6">
          <div className="w-full sm:w-1/2 md:w-2/5 flex justify-center items-center p-4 md:pr-0">
            <img
              src="../Productivity.png"
              alt="Clients"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm xl:max-w-lx rotate-image animate-move"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-3/5 flex flex-col items-center justify-center text-black  md:p-4 md:pr-0">
            <h5 className="text-xl sm:text-xl md:text-3xl p-2 font-bold text-right md:p-4 ">
              Increase WorkForce Productivity
            </h5>
            <p className="text-base sm:text-lg md:text-lg font-normal text-left  md:px-3">
              For businesses with remote workforce teams like sales, support,
              and others, having a perfect field workforce tracking app has
              become necessary. Lystloc is the best-suited workforce tracking
              app platform to measure and increase employees and overall
              organization productivity with real-time data for tactical and
              strategic decisions.
              <ul className="list-disc pl-5 custom-bullets m-4 md:m-8">
                <li>Meeting notes from customer location</li>
                <li>Effective real-time route optimization</li>
                <li>Location integrated task management</li>
              </ul>
            </p>
            <Button
              variant="gradient"
              className="rounded-full mt-1"
              color="blue"
            >
              Read more
            </Button>
          </div>
        </div>

        <div className="w-full flex md:flex-row-reverse flex-wrap md:px-20 ">
          <div className="w-full sm:w-1/2 md:w-2/5 flex justify-center items-center p-4 md:pr-0">
            <img
              src="../tracking.png"
              alt="Clients"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-lx rotate-image animate-move"
            />
          </div>

          <div className="w-full sm:w-1/2 md:w-3/5 flex flex-col items-center justify-center text-black  md:p-4 md:pr-0">
            <h5 className="text-xl sm:text-xl md:text-3xl p-2 font-bold text-right md:p-4 ">
              Vehicle Tracking
            </h5>
            <p className="text-base sm:text-lg md:text-lg font-normal text-left  md:px-3">
              We are a highly user-friendly software for business owners who
              would like an efficient way to keep track of the vehicles and
              drivers' safety without any external hardware.
              <ul className="list-disc pl-5 custom-bullets m-4 md:mx-8 md:my-4">
                <li>Live Tracking</li>
                <li>Route Traveled</li>
                <li>Distance Covered</li>
              </ul>
            </p>
            <Button
              variant="gradient"
              className="rounded-full mt-1"
              color="blue"
            >
              Read more
            </Button>
          </div>
        </div>

        <div className="w-full flex flex-wrap md:px-20 ">
          <div className="w-full sm:w-1/2 md:w-2/5 flex justify-center items-center p-4 md:pr-0">
            <img
              src="../mozilityface.png"
              alt="Clients"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm xl:max-w-lx rotate-image animate-move"
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-3/5 flex flex-col items-center justify-center text-black  md:p-4 md:pr-0">
            <h5 className="text-xl sm:text-xl md:text-3xl p-2 font-bold text-right md:p-4 ">
              MozilityFace
            </h5>
            <p className="text-base sm:text-lg md:text-lg font-normal text-left  md:px-3">
              Your all-new Al powered facial recognition attendance app. Convert
              your android mobile into a face attendance device in less than 2
              minutes
              <ul className="list-disc pl-5 custom-bullets m-4 md:m-8">
                <li>Accurate, Hassle-free Facial attendance</li>
                <li>Automate Salary Processing</li>
                <li>Powerful Data Insights</li>
              </ul>
            </p>
            <Button
              variant="gradient"
              className="rounded-full mt-1"
              color="blue"
            >
              Read more
            </Button>
          </div>
        </div>

        <div className="w-full flex md:flex-row-reverse flex-wrap md:px-20 ">
          <div className="w-full sm:w-1/2 md:w-2/5 flex justify-center items-center p-4 md:pr-0">
            <img
              src="../dashboard.png"
              alt="Clients"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-lx rotate-image animate-move"
            />
          </div>

          <div className="w-full sm:w-1/2 md:w-3/5 flex flex-col items-center justify-center text-black  md:p-4 md:pr-0">
            <h5 className="text-xl sm:text-xl md:text-3xl p-2 font-bold text-right md:p-4 ">
              DashBoard
            </h5>
            <p className="text-base sm:text-lg md:text-lg font-normal text-left  md:px-3">
              With powerful data analytics, get reports with datic required for
              payroll processing, performance evaluation, reimbursement, and
              much more.
              <ul className="list-disc pl-5 custom-bullets m-4 md:mx-8 md:my-4">
                <li>Customizable Reports </li>
                <li>Data Visualization</li>
                <li>On-Demand Data</li>
              </ul>
            </p>
            <Button
              variant="gradient"
              className="rounded-full mt-1"
              color="blue"
            >
              Read more
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full items-center justify-center md:p-7 " ref={pricingref}>
        <section class="bg-white dark:bg-gray-900">
          <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Choose the Prefect Plan for Your Team's Need
              </h2>
              {/* <p class="mb-5 font-light sm:text-xl dark:text-gray-400">
                Here at Flowbite we focus on markets where technology,
                innovation, and capital can unlock long-term value and drive
                economic growth.
              </p> */}
            </div>
            <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
              {/* <!-- Pricing Card --> */}
              <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                <h3 class="mb-4 text-2xl font-semibold">FreeTrail</h3>
                <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                  Best option for personal use & for your next project.
                </p>
                <div class="flex justify-center items-baseline my-8">
                  <span class="mr-2 text-5xl font-extrabold">Free</span>
                  {/* <span class="text-gray-500 dark:text-gray-400">/month</span> */}
                </div>
                {/* <!-- List --> */}
                <ul role="list" class="mb-8 space-y-4 text-left">
                  <li class="flex items-center space-x-3">
                    {/* <!-- Icon --> */}
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Individual configuration</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    {/* <!-- Icon --> */}
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>No setup, or hidden fees</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    {/* <!-- Icon --> */}
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      Team size: <span class="font-semibold">1 developer</span>
                    </span>
                  </li>
                  <li class="flex items-center space-x-3">
                    {/* <!-- Icon --> */}
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      Premium support:{" "}
                      <span class="font-semibold">6 months</span>
                    </span>
                  </li>
                  <li class="flex items-center space-x-3">
                    {/* <!-- Icon --> */}
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      Free updates: <span class="font-semibold">6 months</span>
                    </span>
                  </li>
                </ul>
                <a
                  href="#"
                  class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
                >
                  Get started
                </a>
              </div>
              {/* <!-- Pricing Card --> */}
              <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                <h3 class="mb-4 text-2xl font-semibold">Monthly</h3>
                <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                  Relevant for multiple users, extended & premium support.
                </p>
                <div class="flex justify-center items-baseline my-8">
                  <span class="mr-2 text-5xl font-extrabold">$99</span>
                  <span class="text-gray-500 dark:text-gray-400">/month</span>
                </div>
                {/* <!-- List --> */}
                <ul role="list" class="mb-8 space-y-4 text-left">
                  <li class="flex items-center space-x-3">
                    {/* <!-- Icon --> */}
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Individual configuration</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    {/* <!-- Icon --> */}
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>No setup, or hidden fees</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    {/* <!-- Icon --> */}
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      Team size:{" "}
                      <span class="font-semibold">10 developers</span>
                    </span>
                  </li>
                  <li class="flex items-center space-x-3">
                    {/* <!-- Icon --> */}
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      Premium support:{" "}
                      <span class="font-semibold">24 months</span>
                    </span>
                  </li>
                  <li class="flex items-center space-x-3">
                    {/* <!-- Icon --> */}
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      Free updates: <span class="font-semibold">24 months</span>
                    </span>
                  </li>
                </ul>
                <a
                  href="#"
                  class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
                >
                  Get started
                </a>
              </div>
              {/* <!-- Pricing Card --> */}
              <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                <h3 class="mb-4 text-2xl font-semibold">Yearly</h3>
                <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                  Best for large scale uses and extended redistribution rights.
                </p>
                <div class="flex justify-center items-baseline my-8">
                  <span class="mr-2 text-5xl font-extrabold">$499</span>
                  <span class="text-gray-500 dark:text-gray-400">/month</span>
                </div>
                {/* <!-- List --> */}
                <ul role="list" class="mb-8 space-y-4 text-left">
                  <li class="flex items-center space-x-3">
                    {/* <!-- Icon --> */}
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Individual configuration</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    {/* <!-- Icon --> */}
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>No setup, or hidden fees</span>
                  </li>
                  <li class="flex items-center space-x-3">
                    {/* <!-- Icon --> */}
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      Team size:{" "}
                      <span class="font-semibold">100+ developers</span>
                    </span>
                  </li>
                  <li class="flex items-center space-x-3">
                    {/* <!-- Icon --> */}
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      Premium support:{" "}
                      <span class="font-semibold">36 months</span>
                    </span>
                  </li>
                  <li class="flex items-center space-x-3">
                    {/* <!-- Icon --> */}
                    <svg
                      class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      Free updates: <span class="font-semibold">36 months</span>
                    </span>
                  </li>
                </ul>
                <a
                  href="#"
                  class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="flex flex-col w-full items-center justify-center md:p-7 bg-[#e2edf7] ">
        <img src="../planning.jpg" alt="" className=" md:w-3/4"/>
      </div>

      <div className="flex flex-col w-full items-center justify-center md:px-7 ">
        <div class="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center py-5">
          <div class="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
            <div class="w-full max-w-6xl mx-auto">
              <div class="text-center max-w-xl mx-auto">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  What people are saying.
                </h2>

                <h3 class="text-xl mb-5 font-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
                <div class="text-center mb-10">
                  <span class="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                  <span class="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                  <span class="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                  <span class="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                  <span class="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                </div>
              </div>
              <div class="-mx-3 md:flex items-start">
                <div class="px-3 md:w-1/3">
                  <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                    <div class="w-full flex mb-4 items-center">
                      <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                        <img src="https://i.pravatar.cc/100?img=1" alt="" />
                      </div>
                      <div class="flex-grow pl-3">
                        <h6 class="font-bold text-sm uppercase text-gray-600">
                          Kenzie Edgar.
                        </h6>
                      </div>
                    </div>
                    <div class="w-full">
                      <p class="text-sm leading-tight">
                        <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                          "
                        </span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quos sunt ratione dolor exercitationem minima quas
                        itaque saepe quasi architecto vel! Accusantium, vero
                        sint recusandae cum tempora nemo commodi soluta
                        deleniti.
                        <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                          "
                        </span>
                      </p>
                    </div>
                  </div>
                  <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                    <div class="w-full flex mb-4 items-center">
                      <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                        <img src="https://i.pravatar.cc/100?img=2" alt="" />
                      </div>
                      <div class="flex-grow pl-3">
                        <h6 class="font-bold text-sm uppercase text-gray-600">
                          Stevie Tifft.
                        </h6>
                      </div>
                    </div>
                    <div class="w-full">
                      <p class="text-sm leading-tight">
                        <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                          "
                        </span>
                        Lorem ipsum, dolor sit amet, consectetur adipisicing
                        elit. Dolore quod necessitatibus, labore sapiente, est,
                        dignissimos ullam error ipsam sint quam tempora vel.
                        <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                          "
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="px-3 md:w-1/3">
                  <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                    <div class="w-full flex mb-4 items-center">
                      <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                        <img src="https://i.pravatar.cc/100?img=3" alt="" />
                      </div>
                      <div class="flex-grow pl-3">
                        <h6 class="font-bold text-sm uppercase text-gray-600">
                          Tommie Ewart.
                        </h6>
                      </div>
                    </div>
                    <div class="w-full">
                      <p class="text-sm leading-tight">
                        <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                          "
                        </span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Vitae, obcaecati ullam excepturi dicta error
                        deleniti sequi.
                        <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                          "
                        </span>
                      </p>
                    </div>
                  </div>
                  <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                    <div class="w-full flex mb-4 items-center">
                      <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                        <img src="https://i.pravatar.cc/100?img=4" alt="" />
                      </div>
                      <div class="flex-grow pl-3">
                        <h6 class="font-bold text-sm uppercase text-gray-600">
                          Charlie Howse.
                        </h6>
                      </div>
                    </div>
                    <div class="w-full">
                      <p class="text-sm leading-tight">
                        <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                          "
                        </span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Architecto inventore voluptatum nostrum atque, corrupti,
                        vitae esse id accusamus dignissimos neque reprehenderit
                        natus, hic sequi itaque dicta nisi voluptatem! Culpa,
                        iusto.
                        <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                          "
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="px-3 md:w-1/3">
                  <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                    <div class="w-full flex mb-4 items-center">
                      <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                        <img src="https://i.pravatar.cc/100?img=5" alt="" />
                      </div>
                      <div class="flex-grow pl-3">
                        <h6 class="font-bold text-sm uppercase text-gray-600">
                          Nevada Herbertson.
                        </h6>
                      </div>
                    </div>
                    <div class="w-full">
                      <p class="text-sm leading-tight">
                        <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                          "
                        </span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nobis, voluptatem porro obcaecati dicta, quibusdam sunt
                        ipsum, laboriosam nostrum facere exercitationem pariatur
                        deserunt tempora molestiae assumenda nesciunt alias
                        eius? Illo, autem!
                        <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                          "
                        </span>
                      </p>
                    </div>
                  </div>
                  <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                    <div class="w-full flex mb-4 items-center">
                      <div class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                        <img src="https://i.pravatar.cc/100?img=6" alt="" />
                      </div>
                      <div class="flex-grow pl-3">
                        <h6 class="font-bold text-sm uppercase text-gray-600">
                          Kris Stanton.
                        </h6>
                      </div>
                    </div>
                    <div class="w-full">
                      <p class="text-sm leading-tight">
                        <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">
                          "
                        </span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatem iusto, explicabo, cupiditate quas totam!
                        <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">
                          "
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="flex flex-col w-full items-center justify-center md:p-7" ref={faqref}>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center items-center gap-x-16 gap-y-5 xl:gap-28 lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full">
            <div className="w-full lg:w-1/2">
              <img
                src="../faq.jpeg"
                alt="FAQ tailwind section"
                className="w-full rounded-xl object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-xl">
                <div className="mb-6 lg:mb-16">
                  {/* <h6 className="text-lg text-center font-medium text-indigo-600 mb-2 lg:text-left">
                    faqs
                  </h6> */}
                  <h2 className="text-4xl text-center font-bold text-gray-900 leading-[3.25rem] mb-5 lg:text-left">
                    Looking for answers?
                  </h2>
                </div>
                <div className="accordion-group" data-accordion="default-accordion">
                  {faqData.map((faq, index) => (
                    <div
                      key={index}
                      className={`accordion py-8 border-b border-solid border-gray-200 ${activeIndex === index ? 'active' : ''}`}
                      id={`basic-heading-${index}`}
                    >
                      <button
                        className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600"
                        aria-controls={`basic-collapse-${index}`}
                        onClick={() => toggleAccordion(index)}
                      >
                        <h5>{faq.question}</h5>
                        <svg
                          className={`text-gray-900 transition duration-500 group-hover:text-indigo-600 ${activeIndex === index ? 'rotate-180' : ''}`}
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </button>
                      <div
                        id={`basic-collapse-${index}`}
                        className={`accordion-content w-full px-0 overflow-hidden pr-4 ${activeIndex === index ? 'active' : ''}`}
                        style={{ maxHeight: activeIndex === index ? '100px' : '0' }}
                        aria-labelledby={`basic-heading-${index}`}
                      >
                        <p className="text-base font-normal text-gray-600">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>



      {/* <div className="flex flex-col w-full items-center justify-center md:p-7 ">
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-center items-center gap-x-16 gap-y-5 xl:gap-28 lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full">
              <div className="w-full lg:w-1/2">
                <img
                  src="../faq.jpeg"
                  alt="FAQ tailwind section"
                  className="w-full rounded-xl object-cover"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <div className="lg:max-w-xl">
                  <div className="mb-6 lg:mb-16">
                    <h6 className="text-lg text-center font-medium text-indigo-600 mb-2 lg:text-left">
                      faqs
                    </h6>
                    <h2 className="text-4xl text-center font-bold text-gray-900 leading-[3.25rem] mb-5 lg:text-left">
                      Looking for answers?
                    </h2>
                  </div>
                  <div
                    className="accordion-group"
                    data-accordion="default-accordion"
                  >
                    <div
                      className="accordion pb-8 border-b border-solid border-gray-200 active"
                      id="basic-heading-one-with-arrow-always-open"
                    >
                      <button
                        className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:font-medium always-open"
                        aria-controls="basic-collapse-one-with-arrow-always-open"
                      >
                        <h5>How to create an account?</h5>
                        <svg
                          className="text-gray-900 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:rotate-180"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </button>
                      <div
                        id="basic-collapse-one-with-arrow-always-open"
                        className="accordion-content w-full px-0 overflow-hidden pr-4 active"
                        style={{ maxHeight: "100px" }}
                        aria-labelledby="basic-heading-one-with-arrow-always-open"
                      >
                        <p className="text-base font-normal text-gray-600">
                          To create an account, find the 'Sign up' or 'Create
                          account' button, fill out the registration form with
                          your personal information, and click 'Create account'
                          or 'Sign up.' Verify your email address if needed, and
                          then log in to start using the platform.
                        </p>
                      </div>
                    </div>
                    <div
                      className="accordion py-8 border-b border-solid border-gray-200"
                      id="basic-heading-two-with-arrow-always-open"
                    >
                      <button
                        className="accordion-toggle group inline-flex items-center justify-between font-normal text-xl leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:font-medium"
                        aria-controls="basic-collapse-two-with-arrow-always-open"
                      >
                        <h5>Have any trust issue?</h5>
                        <svg
                          className="text-gray-900 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:rotate-180"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </button>
                      <div
                        id="basic-collapse-two-with-arrow-always-open"
                        className="accordion-content w-full px-0 overflow-hidden pr-4"
                        aria-labelledby="basic-heading-two-with-arrow-always-open"
                      >
                        <p className="text-base text-gray-500 font-normal">
                          Our focus on providing robust and user-friendly
                          content management capabilities ensures that you can
                          manage your content with confidence, and achieve your
                          content marketing goals with ease.
                        </p>
                      </div>
                    </div>
                    <div
                      className="accordion py-8 border-b border-solid border-gray-200"
                      id="basic-heading-three-with-arrow-always-open"
                    >
                      <button
                        className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600"
                        aria-controls="basic-collapse-three-with-arrow-always-open"
                      >
                        <h5>How can I reset my password?</h5>
                        <svg
                          className="text-gray-900 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:rotate-180"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </button>
                      <div
                        id="basic-collapse-three-with-arrow-always-open"
                        className="accordion-content w-full px-0 overflow-hidden pr-4"
                        aria-labelledby="basic-heading-three-with-arrow-always-open"
                      >
                        <p className="text-base text-gray-500 font-normal">
                          Our focus on providing robust and user-friendly
                          content management capabilities ensures that you can
                          manage your content with confidence, and achieve your
                          content marketing goals with ease.
                        </p>
                      </div>
                    </div>
                    <div
                      className="accordion py-8"
                      id="basic-heading-four-with-arrow-always-open"
                    >
                      <button
                        className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600"
                        aria-controls="basic-collapse-four-with-arrow-always-open"
                      >
                        <h5>What is the payment process?</h5>
                        <svg
                          className="text-gray-900 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:rotate-180"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </button>
                      <div
                        id="basic-collapse-four-with-arrow-always-open"
                        className="accordion-content w-full px-0 overflow-hidden pr-4"
                        aria-labelledby="basic-heading-four-with-arrow-always-open"
                      >
                        <p className="text-base text-gray-500 font-normal">
                          Our focus on providing robust and user-friendly
                          content management capabilities ensures that you can
                          manage your content with confidence, and achieve your
                          content marketing goals with ease.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div> */}

      <footer class="relative w-full mb-4 bg-gradient-to-r from-[#8358b3] to-[#0b70d0] text-white p-6">
        <div class="w-full px-8 mx-auto max-w-7xl">
          <div class="grid justify-between grid-cols-1 gap-4 md:grid-cols-1">
            <div class="grid justify-between grid-cols-4 gap-4">
              <ul>
                <p class="block mb-1 text-base font-semibold  text-slate-800">
                  Product
                </p>
                <li>
                  <a
                    href="#"
                    class="block text-slate-600 py-1 hover:text-slate-500 focus:text-slate-500 text-sm"
                  >
                    Overview
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block text-slate-600 py-1 hover:text-slate-500 focus:text-slate-500 text-sm"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block text-slate-600 py-1 hover:text-slate-500 focus:text-slate-500 text-sm"
                  >
                    Solutions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block text-slate-600 py-1 hover:text-slate-500 focus:text-slate-500 text-sm"
                  >
                    Tutorials
                  </a>
                </li>
              </ul>
              <ul>
                <p class="block mb-1 text-base font-semibold text-slate-800">
                  Company
                </p>
                <li>
                  <a
                    href="#"
                    class="block text-slate-600 py-1 hover:text-slate-500 focus:text-slate-500 text-sm"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block text-slate-600 py-1 hover:text-slate-500 focus:text-slate-500 text-sm"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block text-slate-600 py-1 hover:text-slate-500 focus:text-slate-500 text-sm"
                  >
                    Press
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block text-slate-700 py-1 hover:text-slate-500 focus:text-slate-500 text-sm"
                  >
                    News
                  </a>
                </li>
              </ul>
              <ul>
                <p class="block mb-1 text-base font-semibold text-slate-800">
                  Resource
                </p>
                <li>
                  <a
                    href="#"
                    class="block text-slate-600 py-1 hover:text-slate-500 focus:text-slate-500 text-sm"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block text-slate-600 py-1 hover:text-slate-500 focus:text-slate-500 text-sm"
                  >
                    Newsletter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block text-slate-600 py-1 hover:text-slate-500 focus:text-slate-500 text-sm"
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block text-slate-600 py-1 hover:text-slate-500 focus:text-slate-500 text-sm"
                  >
                    Help center
                  </a>
                </li>
              </ul>
              <ul>
                <p class="block mb-1 text-base font-semibold text-slate-800">
                  Help Center
                </p>
                <li>
                  <a
                    href="#"
                    class="block text-slate-600 py-1 hover:text-slate-500 focus:text-slate-500 text-sm"
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block text-slate-600 py-1 hover:text-slate-500 focus:text-slate-500 text-sm"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block text-slate-600 py-1 hover:text-slate-500 focus:text-slate-500 text-sm"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block text-slate-600 py-1 hover:text-slate-500 focus:text-slate-500 text-sm"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="flex flex-col items-center justify-center w-full py-4 mt-12 border-t border-slate-200 md:flex-row md:justify-between">
            <p class="block mb-4 text-sm text-center text-slate-500 md:mb-0">
              Copyright © 2024
              <a href="https://material-tailwind.com/">Material Tailwind</a>.
              All Rights Reserved.
            </p>
            <div class="flex gap-4 text-slate-600 sm:justify-center">
              <a
                href="#"
                class="block transition-opacity text-inherit hover:opacity-80"
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                class="block transition-opacity text-inherit hover:opacity-80"
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                class="block transition-opacity text-inherit hover:opacity-80"
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a
                href="#"
                class="block transition-opacity text-inherit hover:opacity-80"
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                class="block transition-opacity text-inherit hover:opacity-80"
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;








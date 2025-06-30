import React, { useState, useEffect } from "react";
import Footer from "./Footer";

const projects = [
  {
    title: "Sofa",
    tag: "Buy Now",
    image: "https://images.unsplash.com/photo-1749741335932-f5295ee9afd0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
  },
  {
    title: "Chairs",
    tag: "Buy Now",
    image: "https://plus.unsplash.com/premium_photo-1674815329488-c4fc6bf4ced8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Dining Tables",
    tag: "Buy Now",
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Console Tables",
    tag: "Buy Now",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW50ZXJpb3J8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Wardrobes",
    tag: "Buy Now",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGludGVyaW9yfGVufDB8fDB8fHww",
  },
  {
    title: "TV Units",
    tag: "Buy Now",
    image: "https://plus.unsplash.com/premium_photo-1670360414946-e33a828d1d52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGludGVyaW9yfGVufDB8fDB8fHww",
  },
  {
    title: "Lights",
    tag: "Buy Now",
    image: "https://plus.unsplash.com/premium_photo-1686090449194-04ac2af9f758?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGludGVyaW9yfGVufDB8fDB8fHww",
  },
  {
    title: "Customized Decorative elements",
    tag: "Buy Now",
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGludGVyaW9yfGVufDB8fDB8fHww",
  },
];

const images = [
  'https://media.designcafe.com/wp-content/uploads/2023/01/31151510/contemporary-interior-design-ideas-for-your-home.jpg'
];

const AllProducts = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size on load and on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md = 768px
    };
    handleResize(); // Run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleProjects =
    !isMobile || showAll ? projects : projects.slice(0, 6);

  return (
    <>
    <div className="bg-[#eae5df] brico -tracking-wider ">
      <div className="">
        {/* Hero Section */}
        <div className="relative w-full h-[70vh] overflow-hidden">
          <img
            src={images}
            alt="background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 z-10" />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4 space-y-6">
            <p className="text-base md:text-xl uppercase font-semibold">
              Futuristic Elegance
            </p>
            <h1 className="text-5xl md:text-[10rem] brico -tracking-wider">
              Our Products
            </h1>
            <button className="px-6 py-3 rounded-2xl text-sm font-medium text-white bg-white/10 backdrop-blur-md border border-white/20 shadow-md hover:bg-white/20 transition-all duration-200">
              Buy Now
            </button>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 mt-20 max-w-7xl mx-auto px-4">
  {visibleProjects.map((project, index) => (
    <div
      key={index}
      className="group relative bg-gradient-to-br from-[#e7daca] to-[#ddd0bf] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer backdrop-blur-sm border border-white/20"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
      
      {/* Image with masking overlay */}
      <div className="relative overflow-hidden h-80">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        />
        
        {/* Masking overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 md:opacity-60 md:group-hover:opacity-80 transition-opacity duration-500"></div>
        
        {/* Masked content overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
          {/* Title with masking effect */}
          <h3 className="text-xl font-bold mb-3 transform md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 delay-100">
            {project.title}
          </h3>
          
          {/* Tag with masking */}
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center px-4 py-2 text-sm font-medium bg-[#a85f31]/90 text-white rounded-full backdrop-blur-sm border border-white/20 shadow-lg transform md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 delay-200">
              {project.tag}
            </span>
            
            {/* Arrow icon */}
            <div className="transform md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 delay-300">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
    </div>
  ))}
</div>

        {/* Show More / Show Less only for mobile */}
        {isMobile && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-white border border-[#a85f31] text-[#a85f31] font-semibold px-6 py-2 rounded-full shadow-md transition-all hover:bg-[#a85f31] hover:text-white"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
};

export default AllProducts;

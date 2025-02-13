
"use client"
import { useState } from "react";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { AuthFetchBlog } from "@/utils/FetchSeries";
import image from "@/public/images/feat1.svg"
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { FaPlay } from "react-icons/fa6";
import { CiCirclePlus } from "react-icons/ci";

import ModulePop from "@/components/common/modulepop";
const SeriesDetails = ({ selectedCategoryId }) => {
  const {data } = AuthFetchBlog()
  const [playVideo , setPlayvideo] = useState(false)
  const selectedCategory = data.find(
    (category) => category.id === selectedCategoryId
  );

  const [activeTab, setActiveTab] = useState("general_view");
const handelplay = () => {
  setPlayvideo(true)
}
   const [isVisible , setvisbale] = useState(false)
   const [videoUrl , setVideourl] = useState("")
   const handelpopup = (promlink) =>{
     setVideourl(promlink)
     setvisbale(true)
   }

  const renderTabContent = () => {
    switch (activeTab) {
      case "general_view":
        return (
          <p className="max-w-lg text-grayColor leading-7">
            {selectedCategory?.details}
          </p>
        );
      case "watch":
        return (
          <p className="max-w-lg text-grayColor leading-7">
            {selectedCategory?.details}
          </p>
        );
      case "covers":
        return (
          <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-4">
            {selectedCategory?.seriesimagesCutmez?.map((cover, index) => (
              <div
                key={`${index + 1} + ${cover}`}
                className="w-full h-[212px] relative rounded-lg overflow-hidden"
              >
                <Image
                  src={cover?.url ? cover?.url : image}
                  alt={`غلاف ${index + 1}`}
                 fill
                />
              </div>
            ))}
          </div>
        );
      case "team":
        return (
          <ul className="list-disc pl-5 text-grayColor grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 gap-4">
            {selectedCategory?.castimagesCutmez?.map((cover, index) => (
              <div
              key={`${index + 1} + ${cover}`}
              className="w-full [border-image:linear-gradient(to_top_right,#f6b73c,#4d9f0c)_30] border-4 border-solid border-transparent bg-white p-4 h-[280px] relative overflow-hidden max-w-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
            >
              <Image
                src={cover?.url ? cover?.url : image}
                alt={`غلاف ${index + 1}`}
              
              fill
              />
            </div>
            ))}
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div className="py-10  dark:bg-dark">
   <section className="w-full h-[500px] mt-20"> {/* Explicit height */}
  <div className="h-full w-full">
    <Swiper
      navigation
      pagination={{ type: "bullets", clickable: true }}
      style={{ width: "100%", height: "100%" }} // Use 100% height relative to the parent
      autoplay={{
        delay: 2500,
      }}
      loop={true}
      modules={[Autoplay, Navigation, Pagination]}
    >
      {selectedCategory?.seriesimagesCutmez?.map((item) => (
        <SwiperSlide key={item.url}>
          <div
            className="relative w-full h-full bg-cover"
          >
            <Image 
              src={item.url ? item.url : image}
              alt="image"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  <ModulePop onClose={() => setvisbale(false)} isVisible={isVisible} videoUrl={videoUrl} /> 
</section>

      <div className="container mx-auto px-4">
      {/* <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
           <div className="w-full h-[449px] relative rounded-lg overflow-hidden retaltive">
                    {playVideo ? (
                      <iframe
                        width="100%"
                        height="100%"
                        src={`${selectedCategory?.promoLink}?autoplay=1&controls=0`}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      
                      ></iframe>
                    ) : (
                      <Image
                        src={selectedCategory?.seriesimagesCutmez[0]?.url ? selectedCategory?.seriesimagesCutmez[0]?.url :image }
                        alt="trailer-cover"
                        fill
                        objectFit="cover"
                      />
                    )}
                    {!playVideo && (
                      <button
                        onClick={handelplay}
                        className="flex items-center justify-center w-[70px] h-[70px] rounded-[50%] bg-primary text-white absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
                      >
                        <FaPlay size={30} />
                      </button>
                    )}
        </div>

                <div className="flex flex-col gap-6">
                  {
                    selectedCategory?.seriesimagesCutmez?.map((item , index) =>{
                      return  <div key={item.url} className="w-full h-[212px] relative rounded-lg overflow-hidden">
                      <Image
                        src={item?.url ? item?.url : image}
                        alt={item.url}
                        fill
                        objectFit="cover"
                      />
                    </div>
                    })
                  }
                
                </div>
              </div> */}
   
        <div className="flex flex-col items-start gap-4  pt-10 ">
          <div className="w-fll xl:w-1/4 lg:w-1/4">
            <div>
              <h1 className="font-bold text-primary">{selectedCategory?.title}</h1>
            </div>
            <div className="flex gap-2 mt-2 items-center">
              <FaLocationDot className="text-primary" />
              <h4 className=" mt-5 font-bold text-grayColor w-full grid grid-cols-3 gap-3 items-center ">
                
                <span className="text-black">{selectedCategory?.country}</span>
                <span className="text-black">{selectedCategory?.category}</span>
                <span className="text-black">{selectedCategory?.kindOfSeries}</span>
                </h4>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2">
            <div>
              <ul className="grid grid-cols-1 gap-5 items-center text-[18px] font-medium">
                <li
                  className={`text-black ${liStyle} ${
                    activeTab === "general_view" ? "border-primary" : ""
                  }`}
                  onClick={() => setActiveTab("general_view")}
                >
                  نظرة عامة
                </li>
                <li
                  className={`text-black ${liStyle} ${
                    activeTab === "watch" ? "border-primary" : ""
                  }`}
                  onClick={() => setActiveTab("watch")}
                >
                  شاهد
                </li>
                <li
                  className={`text-black ${liStyle} ${
                    activeTab === "covers" ? "border-primary" : ""
                  }`}
                  onClick={() => setActiveTab("covers")}
                >
                  بوستر
                </li>
                <li
                  className={`${liStyle} ${
                    activeTab === "team" ? "border-primary" : ""
                  } text-black`}
                  onClick={() => setActiveTab("team")}
                >
                  فريق العمل
                </li>
              </ul>
            </div>
            <div className="py-6">{renderTabContent()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const liStyle = "cursor-pointer border-b-2 w-full lg:w-[50%] py-2 px-12 text-black";

export default SeriesDetails;




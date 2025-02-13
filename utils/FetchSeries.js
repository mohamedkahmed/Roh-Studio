"use client"
import client from "./ContentfullClient";
import { useEffect, useState } from "react";

const checkimageprotcoll = (images) =>{
  const  custmezimages = images.map((image) =>{
        if(image?.fields?.file?.url?.startsWith("//")) {
            const url = `https:${image.fields.file.url}`
            return {url}
        }else{
            const url = image?.fields?.file?.url
            return {url}
        }
    })
    return custmezimages
}
  export const AuthFetchBlog = () => {
    const [data, setdata] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try {
            const response = await client.getEntries({ content_type: 'rohaStudioSeries' });
        
        const customzData = response?.items?.map((item) => {
            const { title,kindOfSeries , details, category , country ,promoLink ,castImages , seriesImages } = item.fields;
           
           const seriesimagesCutmez = checkimageprotcoll(seriesImages)
           const castimagesCutmez = checkimageprotcoll(castImages)
            const id = item.sys.id;
            return {title, details, category , country , kindOfSeries, promoLink , castimagesCutmez , seriesimagesCutmez , id}
        })  
            

            console.log("Custom Data:", customzData); // Verify data mapping
            setdata([...customzData]); // Update state
            setLoading(false);
        } catch (error) {
            console.error("Error fetching blogs:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);



    return { loading, data  };
};

export const AuthFetchpresesleas = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try {
            const response = await client.getEntries({ content_type: 'blogs' })
        
            const CustomezData = response?.items?.map((item) => {
                const { title, details, image } = item.fields;
                const id = item.sys.id;
                const createdAt = item.sys.createdAt;
                const img = image?.fields?.file?.url?.startsWith("//")
                  ? `https:${image.fields.file.url}`
                  : image?.fields?.file?.url;
                return { id, title, details, img, createdAt };
              });    
            

            console.log("Custom Data:", CustomezData); // Verify data mapping
            setBlogs([...CustomezData]); // Update state
            setLoading(false);
        } catch (error) {
            console.error("Error fetching blogs:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);



    return { loading, blogs  };
};

export const AuthFetchHomeAbout = () => {
    const [data, setdata] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try {
            const response = await client.getEntries({ content_type: 'homePageAboutSection' });
        
        const customzData = response?.items?.map((item) => {
            const { title, details, image} = item.fields;
           
            const img = image?.fields?.file?.url?.startsWith("//")
            ? `https:${image.fields.file.url}`
            : image?.fields?.file?.url;
            const id = item.sys.id;
            return {title, details , id , img}
        })  
            

            console.log("Custom Data:", customzData); // Verify data mapping
            setdata([...customzData]); // Update state
            setLoading(false);
        } catch (error) {
            console.error("Error fetching blogs:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);



    return { loading, data  };
};

export const AuthFetchTeam = () => {
    const [data, setdata] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try {
            const response = await client.getEntries({ content_type: 'pageAboutTeamWork' });
        
        const customzData = response?.items?.map((item) => {
            const { title, about, image ,job} = item.fields;
           
            const img = image?.fields?.file?.url?.startsWith("//")
            ? `https:${image.fields.file.url}`
            : image?.fields?.file?.url;
            const id = item.sys.id;
            return {title, about , id , img ,job}
        })  
            

            console.log("Custom Data:", customzData); // Verify data mapping
            setdata([...customzData]); // Update state
            setLoading(false);
        } catch (error) {
            console.error("Error fetching blogs:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);



    return { loading, data  };
};

export const AuthFetchAboutPage = () => {
    const [data, setdata] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try {
            const response = await client.getEntries({ content_type: 'pageAboutHeroSection' });
        
        const customzData = response?.items?.map((item) => {
            const { title, details, image} = item.fields;
           
            const img = image?.fields?.file?.url?.startsWith("//")
            ? `https:${image.fields.file.url}`
            : image?.fields?.file?.url;
            const id = item.sys.id;
            return {title, details , id , img}
        })  
            

            console.log("Custom Data:", customzData); // Verify data mapping
            setdata([...customzData]); // Update state
            setLoading(false);
        } catch (error) {
            console.error("Error fetching blogs:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);



    return { loading, data  };
};

export const AuthFetchservicea = () => {
    const [data, setdata] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try {
            const response = await client.getEntries({ content_type: 'pageServices' });
        
        const customzData = response?.items?.map((item) => {
            const { title, details, image } = item.fields;
           
            const img = image?.fields?.file?.url?.startsWith("//")
            ? `https:${image.fields.file.url}`
            : image?.fields?.file?.url;
            const id = item.sys.id;
            return {title, details , id , img }
        })  
            

            console.log("Custom Data:", customzData); // Verify data mapping
            setdata([...customzData]); // Update state
            setLoading(false);
        } catch (error) {
            console.error("Error fetching blogs:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);



    return { loading, data  };
};

export const AuthFetchrohStudioValue = () => {
    const [data, setdata] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try {
            const response = await client.getEntries({ content_type: 'rohStudioValue' });
        
        const customzData = response?.items?.map((item) => {
            const { title, description} = item.fields;
            const id = item.sys.id;
            return {title, description , id }
        })  
            

            console.log("Custom Data:", customzData); // Verify data mapping
            setdata([...customzData]); // Update state
            setLoading(false);
        } catch (error) {
            console.error("Error fetching blogs:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);



    return { loading, data  };
};

export const AuthFetchservicesHeroSection = () => {
    const [data, setdata] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try {
            const response = await client.getEntries({ content_type: 'servicesHeroSection' });
        
        const customzData = response?.items?.map((item) => {
            const { text } = item.fields;
           
            const id = item.sys.id;
            return {text, id }
        })  
            

            console.log("Custom Data:", customzData); // Verify data mapping
            setdata([...customzData]); // Update state
            setLoading(false);
        } catch (error) {
            console.error("Error fetching blogs:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);



    return { loading, data  };
};


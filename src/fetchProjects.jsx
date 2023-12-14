import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
    space: "cr30x5hu38fq",
    environment: "master",
    accessToken: "b-7V87qRUy3hLboMOh00-8kfKXqD3ZRZi_N0fTYd5-I"
});

export const useFetchProjects = () => {
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);

    const getData = async() => {
        try {
        const response = await client.getEntries({ content_type: "cmsProject" });
        const projects = response.items.map((item)=>{
            const {title, url, images} = item.fields;
            const id = item.sys.id
            const img = images?.fields?.file?.url
            return {title, url, id, img}
        });
        setProjects(projects)
        setLoading(false)
        } catch (error) {
        console.log(error)
        setLoading(false)
        }
    }

    useEffect(()=>{
        getData()
    },[])
    return {projects, loading}
}

// .then((response) => console.log(response));
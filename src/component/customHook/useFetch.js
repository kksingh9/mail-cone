const { useEffect } = require("react");
const { useState } = require("react")

const useFetch = (url) => {
    const [emailData, setEmailData] = useState([]);

    useEffect(() => {
        let setint = setInterval(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(
              url
            );
            const data = await response.json();
            let newArray = [];
            for (let key in data) {
              newArray.push({
                id: key,
                email: data[key].email,
                subject: data[key].subject,
                description: data[key].description,
                time: data[key].time,
                localtime: data[key].localtime,
                read:data[key].read,
                quantity: data[key].quantity,
              });
            }
            setEmailData(newArray)
          } catch (err) {
            console.log(err.message);
          }
        }
        // if(initial){
        //   initial=false;
        //   return;
        // }
        fetchData();
        }, 2000);
        return () => setInterval(setint);
      }, [url]);

    return [emailData];
};

export default useFetch ;
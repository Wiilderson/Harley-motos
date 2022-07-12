import React from "react";
import API from "../../../Services/API";

function SingleMotoItem() {
  const { id } = useParams();
  //   console.log('id: ', id);
  const [moto, setMoto] = useState([]);

  const getSingleMoto = async () => {
    const res = await API.get(`https://fakestoreapi.com/products/${id}`);

    setMoto(res.json());
  };

  useEffect(() => {
    getSingleMoto();
  }, []);

  return (
    <>
      <div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <h1>title</h1>
        </div>
      </div>
    </>
  );
}

export default SingleMotoItem;

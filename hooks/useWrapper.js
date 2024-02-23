import { setProducts, setVisitors } from "@/lib/slices/slice";
import { dispatchAction, selecter } from "@/lib/utils/reduxUtils";
import axios from "axios";
import { useEffect} from "react";
import { toast } from "react-hot-toast";
import { useSession } from "next-auth/react";
const useWrapper = () => {
  const { status } = useSession();
  const dispatch = dispatchAction();
  const refresh = selecter((state) => state.dashboardReducer.refresh);
  console.log(status)
  const isAddCartOpen = selecter(
    (state) => state.dashboardReducer.isAddCartOpen
  );
  const fetchingData = async () => {
    try {
      const response = await axios.get("/api/products");
      dispatch(setProducts(response?.data?.data));
      const res = await axios.get("/api/visitors");
      dispatch(setVisitors(res?.data?.data));
    } catch (error) {
      return toast.error(error.message);
    }
  };
  useEffect(() => {
    fetchingData();
  }, [isAddCartOpen, refresh]);

  return {status};
};

export default useWrapper;

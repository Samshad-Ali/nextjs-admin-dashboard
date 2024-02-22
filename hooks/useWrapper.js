import { setProducts, setVisitors } from "@/lib/slices/slice";
import { dispatchAction, selecter } from "@/lib/utils/reduxUtils";
import { routes } from "@/utils/route";
import axios from "axios";
import { useEffect} from "react";
import { toast } from "react-hot-toast";
import { useRouter,usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
const useWrapper = () => {
  const { status } = useSession();
  const router = useRouter();
  const pathName = usePathname();
  const dispatch = dispatchAction();
  const refresh = selecter((state) => state.dashboardReducer.refresh);
  const isAddCartOpen = selecter(
    (state) => state.dashboardReducer.isAddCartOpen
  );
  const fetchingData = async () => {
    try {
      const response = await axios.get("/api/products");
      console.log("products from wrapper", response?.data);
      dispatch(setProducts(response?.data?.data));
      const res = await axios.get("/api/visitors");
      console.log("visitors from wrapper", res?.data);
      dispatch(setVisitors(res?.data?.data));
    } catch (error) {
      return toast.error(error.message);
    }
  };
  useEffect(() => {
    fetchingData();
  }, [isAddCartOpen, refresh]);

  useEffect(() => {
    if(status==='unauthenticated' && (pathName.includes(routes.home || routes.dashboard || routes.products || routes.visitors))){
      router.push(routes.unAuth)
    }else if(status==='authenticated' && pathName.includes(routes.unAuth)){
      router.push(routes.home)
    }
  }, [status,pathName]);
  return {status};
};

export default useWrapper;

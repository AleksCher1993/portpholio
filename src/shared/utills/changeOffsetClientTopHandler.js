import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeOffsetContentTop } from "../../widgets/header/model/headerSlice";

export const СhangeOffsetClientTopHandler = (ref) => {
  const dispatch = useDispatch();
  const changeOffsetClientTopHandle = useCallback(() => {
    dispatch(
      changeOffsetContentTop({
        id: ref.current.id,
        offset: ref.current.offsetTop - 50,
      })
    );
  }, [dispatch]);
  useEffect(() => {
    changeOffsetClientTopHandle();
    window.addEventListener("resize", changeOffsetClientTopHandle);
    return () => {
      window.removeEventListener("resize", changeOffsetClientTopHandle);
    };
  }, [changeOffsetClientTopHandle]);
};


import { AlertMessageWithAutoHide } from "../../helpers/components/AlertMessageWithAutoHide";
import { useWeatherStore } from "../../hooks";
import { NavBar, TemplateGrid } from "../index";

export const Weather = () => {
  const {message} = useWeatherStore();
  return (
    <>
      <NavBar/>
      <TemplateGrid/>
      {message ? <AlertMessageWithAutoHide /> : null}
    </>
  )
}

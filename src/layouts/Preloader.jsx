import appData from "@data/app.json";

const Preloader = () => {
  return (
    <div className="preloader"> 
        <figure>
            <img style={{ height: "57px", width: "90px" }} src={appData.settings.preloader.image} alt={appData.settings.preloader.alt} /> 
        </figure>
    </div>
  );
};
export default Preloader;

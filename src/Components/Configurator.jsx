import { useCustomization } from "./contexts/Customization";

const Configurator = () => {
const {bikeColors,bikeColor,setBikeColor,} = useCustomization();
  console.log('bikeColor',bikeColor);
  return (
    <div className="Configurator">
     
        <div className="Configurator_section_title">Color</div>
       
          
            <div className="item_label">
                Fetures
            </div>
            <div className="configurator__section">
        <div className="configurator__section__title">Bike color</div>
        <div className="configurator__section__values">
          {bikeColors.map((item, index) => (
            <div
              key={index}
              className={`item ${
                item.color === bikeColor.color ? "item--active" : ""
              }`}
              onClick={() => setBikeColor(item)}
            >
              <div
                className="item__dot"
                style={{ backgroundColor: item.color }}
              />
              <div className="item__label">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
          </div>
  );
};

export default Configurator;

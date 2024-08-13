import ServiceSectionItem from "./ServiceSectionItem";

function ServiceSection() {

  let data = [
    {id:1, title:"Годовое ТО", backgroundColor:'#22356F', color: "white"},
    {id:1, title:"Выравнивание колес", backgroundColor:'#0052C1', color: "white"},
    {id:1, title:"Настройка переключателей", backgroundColor:'#76B58B', color: "white"},
  ]
  return (
    <div className="service-section" id="service-section">
      {data.map(el => (
        <ServiceSectionItem key={el.id} title={el.title} backgroundColor={el.backgroundColor} color={el.color} />
      ))}
    </div>
  );
}

export default ServiceSection;
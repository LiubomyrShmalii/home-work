
function ServiceSectionItem({id, title, backgroundColor, color}) {
  return (
<div style={{id, backgroundColor, color}} className="service-item-section">
  <p>_____________________<br/>
  <br/>
  {title} </p>
</div>
  )
}

export default ServiceSectionItem
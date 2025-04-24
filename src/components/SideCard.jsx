function SideCard ( { icon, category, score }) {
  const unit = category ==='Calories'?'kCal':'g';
  return (
    <div className={`sideCard ${category}`} >
      <img src={icon} alt={`icon ${category}`} />
      <div>
        <p>{score}{unit}</p>
        <p>{category}</p>
      </div>
    </div>
  )
}

export default SideCard;
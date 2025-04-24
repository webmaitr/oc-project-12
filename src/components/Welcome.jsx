
import './../styles/welcome.css'

function Welcome ({firstName}) {
  


  return (
    <hgroup className="welcome">
      <h1>{`Bonjour `} 
        <span className="firstname">
          {firstName}
        </span>
      </h1>
      <p>
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </hgroup>
  )
}

export default Welcome
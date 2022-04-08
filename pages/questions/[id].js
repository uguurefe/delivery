import axios from "axios"

export default function Detail(props) {
  const listItems = props.detail.choices.map((el,id) =>
    <li key={id} data-url={el.url} onClick={()=>voteChoice(el.url)}>
      {el.choice}--{el.votes}
    </li>
  );
  function voteChoice(param){
    axios.post('https://polls.apiblueprint.org'+param)
    .then(function (response) {
      console.log(response.data);
      location.reload(); //useState yazacaktım ancak vaktim kalmadı
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  return (
    <div>
      <p>{props.detail.question}</p> 
      <ul>
        {listItems}
      </ul>
    </div>  
  )
}
Detail.getInitialProps = async (ctx) => {
  const res = await axios('https://polls.apiblueprint.org/questions/'+ctx.query.id)
  const json = await res.data
  return {detail: json}
}
export default function SingleMyevent({event}){
    return(
        <tr>
        <td>{event.name}</td>
        <td>{event.location}</td>   
      </tr>
    );
}
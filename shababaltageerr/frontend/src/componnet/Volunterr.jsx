export default function Volunterr({volunter}){
    return(
        <tr>
        <td>{volunter.full_name}</td>
        <td>{volunter.phonenumber}</td>
        <td>{volunter.location}</td>
        <td>{volunter.age}</td> 
        <td>
           <a href={volunter.receipt_image}>انقر لمشاهدة الوصل</a>
        </td>
      </tr>
    );
}
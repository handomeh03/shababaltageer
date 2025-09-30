import Alert from '@mui/material/Alert';
export default function ErrorAlert({error}){
    return(
         <Alert style={{marginTop:"4px"}} variant="filled" severity="error">
               {error}
         </Alert>
    );
}
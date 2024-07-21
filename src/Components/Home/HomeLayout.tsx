import useSWR from "swr"
import { getEarningPoint } from "../../API/EarningPoint"



export default function HomeLayout() {

  const { data: earningPointList=[] } = useSWR("earningPoint", getEarningPoint);
  console.log(earningPointList);

  
  return (
    <div>
      {/* <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Point</th>
          </tr>
        </thead>
        <tbody>
          {earningPointList.map(ele) => {
            <tr key={ele.user_id}>
              <td>{ele.first_name}</td>
              <td></td>
            </tr>
          }}         
        </tbody>
      </table> */}
      
    </div>
  )
}

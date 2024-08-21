import { Search_bar } from "./Search_bar"
export function Top_bar(){
    return <div   className="  flex justify-around" >
        <div className=" p-5 " >
       Youtube
        </div>
        <div className="pt-3" >
        <Search_bar/>
         </div>
        <div className=" p-5" >
         signin
        </div>
    </div>
}
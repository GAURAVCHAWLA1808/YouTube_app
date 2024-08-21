export function Videocard(props:any){
    return(
        <div className="p-2" >
              <img className={"rounded-lg"}src={props.thumb} alt="" />
              <div className="grid grid-cols-12 pt-2 pl-2">
                <div className="col-span-1" >
                    <img className={"rounded-full w-20 h-20" }  src={props.image} alt="" />
                </div>
                <div className="col-span-11 " >
                    <div>{props.title}</div>
                    <div className="text-gray-400 text-base" >{props.author}</div>
                    <div className="text-gray-400 text-base " >{props.views} | {props.time} </div>
                </div>
              </div>
        </div>
    )
}
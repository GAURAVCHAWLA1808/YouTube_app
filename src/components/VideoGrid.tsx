import { Videocard } from "./Videocard"
const VIDEOS=[{
    title:"THE DEFINITIVE Sony WH-1000XM5 Review & Comparison by an AUDIO ENGINEER",
      author:"This is tech today",
      views:"2.6M views",
      time:"2 years ago",
      image:"favicon.ico",
      thumb:"thumb2.jpg"
},
{
    title:"THE DEFINITIVE Sony WH-1000XM5 Review & Comparison by an AUDIO ENGINEER",
      author:"This is tech today",
      views:"2.6M views",
      time:"2 years ago",
      image:"favicon.ico",
      thumb:"thumb2.jpg"
},{
    title:"THE DEFINITIVE Sony WH-1000XM5 Review & Comparison by an AUDIO ENGINEER",
      author:"This is tech today",
      views:"2.6M views",
      time:"2 years ago",
      image:"favicon.ico",
      thumb:"thumb2.jpg"
},{
    title:"THE DEFINITIVE Sony WH-1000XM5 Review & Comparison by an AUDIO ENGINEER",
      author:"This is tech today",
      views:"2.6M views",
      time:"2 years ago",
      image:"favicon.ico",
      thumb:"thumb2.jpg"
},{
    title:"THE DEFINITIVE Sony WH-1000XM5 Review & Comparison by an AUDIO ENGINEER",
      author:"This is tech today",
      views:"2.6M views",
      time:"2 years ago",
      image:"favicon.ico",
      thumb:"thumb2.jpg"
},{
    title:"THE DEFINITIVE Sony WH-1000XM5 Review & Comparison by an AUDIO ENGINEER",
      author:"This is tech today",
      views:"2.6M views",
      time:"2 years ago",
      image:"favicon.ico",
      thumb:"thumb2.jpg"
},{
    title:"THE DEFINITIVE Sony WH-1000XM5 Review & Comparison by an AUDIO ENGINEER",
      author:"This is tech today",
      views:"2.6M views",
      time:"2 years ago",
      image:"favicon.ico",
      thumb:"thumb2.jpg"
},{
    title:"THE DEFINITIVE Sony WH-1000XM5 Review & Comparison by an AUDIO ENGINEER",
      author:"This is tech today",
      views:"2.6M views",
      time:"2 years ago",
      image:"favicon.ico",
      thumb:"thumb2.jpg"
},]
export function VideoGrid(){
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" >
{VIDEOS.map(videos=><div>
    <Videocard title={videos.title}
      author={videos.author} 
      views={videos.views} 
      time={videos.time}
      image={videos.image}
      thumb={videos.thumb}/>
</div>
)}
</div>
}